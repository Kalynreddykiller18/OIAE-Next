const nodemailer = require('nodemailer');

export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request: Request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function POST(request: Request) {
  const maildata = await request.json();

  console.log(maildata.subject, maildata.text);

  const mailTransporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.USER,
    to: "bejjankikalyanreddy@gmail.com",
    subject: `Customer concern - ${maildata.fullname}`,
    text: `From: ${maildata.mail} \n
    " ${maildata.message} "
    `,
  };

  console.log(process.env.OWNER);

  try {
    const info = await mailTransporter.sendMail(mailOptions);
    console.log('Mail sent successfully', info);

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      status: 200,
    });
  } catch (error : any) {
    console.error(error.message);

    return new Response(JSON.stringify({ message: 'Error in mail sending' }), {
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': 'https://oiaes.com',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
      status: 500,
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
