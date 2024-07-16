const nodemailer = require('nodemailer');

export async function POST(request: Request){

    const maildata = await request.json();

    console.log( maildata.subject, maildata.text);

    const mailTransporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true, // Use SSL
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD,
        },
    })

    const mailOptions = {
        from:process.env.USER,
        to:"accounts@oiaes.com",
        subject:`Customer concern - ${maildata.subject}`,
        text:maildata.text
    }

    console.log(process.env.OWNER)

    mailTransporter.sendMail(mailOptions,(error:any ,info:any)=>{
        if(error){
            console.log(error.message)
            return new Response(JSON.stringify({Message:"error in mail sending"}),{
                headers:{
                    "Content-Type":"application/json"
                },
            })
        }

        console.log('Mail sent successfully' + info);
    })

    return new Response(JSON.stringify({message:`Email sent successfully`}),{
        headers:{
            "Content-Type":"application/json"
        },
        status:200
    })
}
