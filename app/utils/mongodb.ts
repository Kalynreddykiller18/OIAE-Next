// // pages/api/submitData.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import { MongoClient } from 'mongodb';

// const uri = "mongodb+srv://kalyanreddy:AlluArjun12@cluster0.5ubf2ei.mongodb.net/?retryWrites=true&w=majority";
// const dbName = "queries"

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const { firstname, lastname, company, email, message } = req.body;

//       const client = new MongoClient(uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });

//       await client.connect();
//       const db = client.db(dbName);

//       const result = await db.collection('queries').insertOne({
//         firstname,
//         lastname,
//         company,
//         email,
//         message,
//         createdAt: new Date(),
//       });

//       res.status(201).json({ message: 'Data inserted successfully', data: result.ops[0] });
//     } catch (error) {
//       console.error('Error inserting data:', error);
//       res.status(500).json({ error: 'Failed to insert data' });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }
