import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <section className="titsec">
                <p className="foo_title">OIAE Systems</p>
                <a href="/Policy.html" target="_blank">
                    Privacy policy
                </a>
            </section>
            <section className="mail">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>accounts@oiaes.com</p>
            </section>
            <a
                href="https://www.linkedin.com/in/oiae-systems-65374b295/"
                target="_blank"
                className="linkd"
            >
                <img src="linkedin.svg" alt="" />
                <p>LinkedIN</p>
            </a>
        </div>
    );
};

export default Footer;
