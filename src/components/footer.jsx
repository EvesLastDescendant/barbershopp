import { Container} from "react-bootstrap"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

function Footer() {

    return(
        <>
            <Container fluid style={{textAlign: 'center', fontFamily: "'Poppins', sans-serif"}}>
                <p style={{fontWeight: 200}}>(xxx) xxx-xxxx {`//`} info@examplebarbers.com</p>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <div>
                        <Link 
                            to='' 
                            target="_blank"
                            className="mx-2"
                        >
                            <FontAwesomeIcon icon={faFacebookF} size="xl" className="footer-link" />
                        </Link>
                    </div>
                    <div className="mx-2">
                        <Link 
                            to=''
                            target="_blank"
                            className="mx-2"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="xl" className="footer-link" />
                        </Link>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <div className="mx-2" style={{fontSize: 13, fontWeight: 600}}>
                        <Link to='' className="text-decoration-none footer-link">
                            <div>
                                OUR STORY
                            </div>
                        </Link>
                    </div>
                    <div className="mx-2" style={{fontSize: 13, fontWeight: 600}}>
                        <Link to='' className="text-decoration-none footer-link">
                            <div>
                                FIND US
                            </div>
                        </Link>                        
                    </div>
                </div>
                <p className="mt-4" style={{fontWeight: 200}}>
                    Developed by <a 
                        href="https://cloudhive-rr.netlify.app" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-link"
                        >
                            NetChunin
                    </a>
                </p>
            </Container>
        </>
    )
}


export default Footer
