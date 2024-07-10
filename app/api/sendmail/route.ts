const nodemailer = require('nodemailer');

export async function POST(request: Request){

    const maildata = await request.json();

    console.log(maildata.to, maildata.subject, maildata.text);

    const mailTransporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true, // Use SSL
        auth: {
            user: "accounts@oiaes.com",
            pass: "8Tutbury@8",
        },
    })

    const mailOptions = {
        from:"accounts@oiaes.com",
        to:maildata.to,
        subject:`Customer concern - ${maildata.subject}`,
        text:maildata.text
    }

    mailTransporter.sendMail(mailOptions,(error:any ,info)=>{
        if(error){
            console.log(error.message)
            return new Response(JSON.stringify({Message:"error in mail sending"}),{
                headers:{
                    "Content-Type":"application/json"
                },
            })
        }

        console.log('Mail sent successfully' + info.message);
    })

    return new Response(JSON.stringify({message:`Email sent successfully`}),{
        headers:{
            "Content-Type":"application/json"
        },
        status:200
    })
}

// app.post("/send-mail", (req, res) => {
//     const { to, subject, text } = req.body;

//     const mailTransporter = nodemailer.createTransport({
//         host: "smtp.zoho.com",
//         port: 465,
//         secure: true, // Use SSL
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.PASSWORD,
//         },
//     });

//     const mailOptions = {
//         from: process.env.EMAIL,
//         to,
//         subject,
//         text,
//     };

//     mailTransporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send(error.toString());
//         }

//         console.log("Mail sent successfully");

//         res.status(200).send("Email sent: " + info.response);
//     });
// });