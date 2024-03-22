import { Container } from "react-bootstrap"
import NavBar from "../components/navigationbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

function Contact() {
    return (
        <>
            <div className="contact-navbar">
                <NavBar />
            </div>
            <Container>
                <div className="text-center">
                    <FontAwesomeIcon icon={faLocationDot} size="2xl" />
                    <p style={{fontFamily: "'Cormorant', serif", fontWeight: 'bold'}}>We are located at No X Boulevard Str., Tbilisi, Georgia </p>
                </div>
                <figure>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190570.9834718376!2d44.641951110727305!3d41.727604400364896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi%2C%20Georgia!5e0!3m2!1sen!2sng!4v1706006458149!5m2!1sen!2sng" 
                        width={"100%"}
                        height={"450"}
                        style={{border: 0}}
                        allowFullScreen="true"
                        loading="lazy"
                        referrerPolicy="no-referre-when-dowgrade"
                    ></iframe>
                </figure>
            </Container>
            <div style={{minHeight: 10, height: 150}}></div>
        </>
    )
}

export default Contact