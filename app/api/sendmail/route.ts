import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

// CORS handler function
const handleCors = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with the specific origin if needed
  res.status(200).end();
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'OPTIONS') {
    handleCors(req, res);
    return;
  }

  if (req.method !== 'POST') {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with the specific origin if needed
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { firstname, lastname, company, email, message } = req.body;

  // Validate the input data
  if (!firstname || !lastname || !company || !email || !message) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with the specific origin if needed
    res.status(400).json({ error: 'Invalid input data' });
    return;
  }

  const newQuerie = {
    firstname,
    lastname,
    company,
    email,
    message,
    createdAt: new Date(),
  };

  const uri = process.env.MONGO_URI as string; // replace with your MongoDB URI
  const dbName = 'test'; // replace with your database name

  if (!uri) {
    throw new Error('Please define the MONGO_URI environment variable inside .env.local');
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db(dbName);
    await db.collection('queries').insertOne(newQuerie);
    await client.close();

    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with the specific origin if needed
    res.status(201).json(newQuerie);
  } catch (error) {
    console.error('Error inserting data:', error);

    res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with the specific origin if needed
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
