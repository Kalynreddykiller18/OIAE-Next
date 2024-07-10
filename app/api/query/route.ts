// export async function GET(){
//     return Response.json({"kill":"hii"});
// }

// const generateTicket = async (length: number) => {
//     const min = Math.pow(10, length - 1);
//     const max = Math.pow(10, length) - 1;

//     const t = Math.floor(Math.random() * (max - min + 1)) + min;
//     const c = await Querie.findOne({ ticket: t }, {});

//     if (c == null) return t;
//     return generateTicket(length);
// };

// pages/api/submitData.ts

import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI as string; // replace with your MongoDB URI
const dbName = 'test'; // replace with your database name

if (!uri) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local');
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

    const newQuerie = {
      firstname: userQuerie.firstname,
      lastname: userQuerie.lastname,
      company: userQuerie.company,
      email: userQuerie.email,
      message: userQuerie.message,
      createdAt:new Date()
    };

    const client = new MongoClient(uri);

    await client.connect();
    const db = client.db(dbName);

    const result = await db.collection('queries').insertOne(newQuerie);

    await client.close();

    return new Response(JSON.stringify(newQuerie), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 201
    });
  } catch (error) {
    console.error('Error inserting data:', error);

    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      headers: {
        "Content-Type": "application/json"
      },
      status: 500
    });
  }
}
