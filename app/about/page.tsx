"use client"

import { useRef } from "react";
import axios from "axios";

const About = () => {
    const fnameRef = useRef<HTMLInputElement>(null);
    const lnameRef = useRef<HTMLInputElement>(null);
    const companyRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const sendQueryMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const emailInfo = {
            to: process.env.TO,
            subject: companyRef.current?.value,
            text: `FirstName: ${fnameRef.current?.value}  LastName: ${lnameRef.current?.value}
            MailId: ${emailRef.current?.value}         
            concern: ${messageRef.current?.value}`,
        };

        const mailDBdata = {
            firstname: fnameRef.current?.value,
            lastname: lnameRef.current?.value,
            company: companyRef.current?.value,
            email: emailRef.current?.value,
            message: messageRef.current?.value,
        };

        console.log(emailInfo);

        try {
            await axios.post(
                "https://main--oiaes.netlify.app/api/sendmail",
                emailInfo
            );

            const response = await axios.post(
                "https://main--oiaes.netlify.app/api/query",
                mailDBdata
            );

            alert(
                `Your query sent successfully with Ticket No: XX
                our team will contact you`
                // ${response.data.ticket}, 
            );
            console.log("Mail sent successfully");
        } catch (error) {
            alert(
                "We are unable to send your mail, please try after some time"
            );
            console.error(
                "Error sending email: ",
               (error as any).response ? (error as any).response.data : (error as Error).message
            );
        } finally {
            if (fnameRef.current) fnameRef.current.value = "";
            if (lnameRef.current) lnameRef.current.value = "";
            if (companyRef.current) companyRef.current.value = "";
            if (emailRef.current) emailRef.current.value = "";
            if (messageRef.current) messageRef.current.value = "";
        }
    };

    return (
        <div className="about">
            <div className="about_card">
                <img src="DTR.png" alt="" />
                <h1>Digital Transformation Realized</h1>
                <p className="about_p">
                    With the digital age disrupting entire industries, OIAE
                    Systems was born out of the idea that there is a better way
                    to harness the power of information and analytics. True
                    business transformation is about people first, then process,
                    and finally – technology. OIAE Systems helps businesses
                    transform from the inside out with our client-centered
                    approach. We take a holistic view of your business –
                    understanding your unique challenges to help your business
                    connect better and more efficiently. Change is hard but it’s
                    the only way to grow. We provide a differentiated customer
                    experience by involving clients actively from the start
                    because education leads to adoption which leads to change.
                    Our clients begin to test drive solutions as they are
                    created and immediately begin to practice what we teach.
                </p>
            </div>
            <div className="about_card">
                <h1>Your Success Is Our Passion</h1>
                <p className="about_p">
                    We listen, empathize, share knowledge, and focus on tangible
                    outcomes, striving to earn your trust every day. We work to
                    solve strategic problems at the outset of our relationship
                    and the little problems that arise throughout it. We know
                    we’ve been successful when clients begin to trust their data
                    and rely on the insights derived from their financial teams
                    to gain overall competitive advantage and make better
                    decisions.
                </p>
            </div>
            <div className="about_card">
                <img src="WBC.png" alt="" />
                <h1>We Bring Change</h1>
                <p className="about_p">
                    We do more than just help you implement a solution. We drive
                    process, and organizational transformation. We take best
                    practices and leading-edge technology and apply that to your
                    business issues – turning complexity into simplicity. In the
                    end, we help connect your business, realize digital
                    transformation, and bring about change. Our clients have
                    done it, and you can too.
                </p>
            </div>
            <section className="bottom">
                <div className="address">
                    <h2>Our Location</h2>
                    <h3>OIAE Systems LLC. </h3>
                    <h3>6557 Hazeltine National Dr, Unit C 11</h3>
                    <h3>Orlando</h3>
                    <h3>Florida - 32822</h3>
                    <h3>Phone: +1 689-710-4572</h3>
                </div>

                <div className="contact">
                    <h1>Contact US</h1>
                    <form onSubmit={(e) => sendQueryMail(e)}>
                        <input
                            type="text"
                            className="ip1"
                            placeholder="First Name"
                            ref={fnameRef}
                            required
                        />
                        <input
                            type="text"
                            className="ip1"
                            placeholder="Last Name"
                            ref={lnameRef}
                            required
                        />
                        <input
                            type="text"
                            className="ip2"
                            placeholder="Company"
                            ref={companyRef}
                            required
                        />
                        <input
                            type="email"
                            className="ip2"
                            placeholder="Mail"
                            ref={emailRef}
                            required
                        />
                        <textarea
                            className="ip3"
                            placeholder="Enter your Message"
                            ref={messageRef}
                            required
                        />
                        <input
                            className="sub"
                            type="submit"
                            value="GET IN TOUCH"
                        />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default About;
