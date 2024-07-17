

import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI as string; // replace with your MongoDB URI
const dbName = 'test'; // replace with your database name

if (!uri) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
}

export const dynamic = 'force-dynamic' // defaults to auto
 
export async function GET(request: Request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

export async function POST(request: Request) {
  try {
    const userQuerie = await request.json();
    
    console.log(userQuerie);

    // Validate the input data
    if (!userQuerie.firstname || !userQuerie.lastname || !userQuerie.company || !userQuerie.email || !userQuerie.message) {
      return new Response(JSON.stringify({ error: 'Invalid input data' }), {
        headers: {
          "Content-Type": "application/json"
        },
        status: 400
      });
    }

    const client = new MongoClient(uri);

    await client.connect();
    const db = client.db(dbName);


    const generateTicket = async (length: number) => {
      const min = Math.pow(10, length - 1);
      const max = Math.pow(10, length) - 1;
  
      const t = Math.floor(Math.random() * (max - min + 1)) + min;
      const c = await db.collection('queries').findOne({ ticket: t }, {});
  
      if (c == null) return t;
      return generateTicket(length);
    };

    const ticket = await generateTicket(6);

    const newQuerie = {
      firstname: userQuerie.firstname,
      lastname: userQuerie.lastname,
      company: userQuerie.company,
      email: userQuerie.email,
      message: userQuerie.message,
      ticket:ticket,
      createdAt:new Date()
    };

    

    const result = await db.collection('queries').insertOne(newQuerie);

    await client.close();

    return new Response(JSON.stringify(newQuerie), {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'https://oiaes.com',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      status: 201
    });
  } catch (error) {
    console.error('Error inserting data:', error);

    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'https://oiaes.com',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      status: 500
    });
  }
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': 'https://oiaes.com',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}