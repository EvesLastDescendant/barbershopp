import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container,} from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <Container style={{fontFamily: '"Poppins", sans-serif'}} fluid>
                <hr />
                <div className="row row-cols-2">
                    <div className="col-7 d-flex flex-column  justify-content-start align-items-start">
                        <p style={{fontWeight: 200}}>(xxx)xxx-xxxx // info@example.com</p>
                        <Link to={'/our story'} className="text-decoration-none text-primary">
                            OUR STORY
                        </Link>
                        <Link to={'/contact'} className="text-decoration-none text-primary">
                            FIND US
                        </Link>
                    </div>
                    <div className="col-5 d-flex flex-column justify-content-end align-items-end">
                        <p style={{fontWeight: 200}}>Follow Us</p>
                        <Link to={''} target="_blank" className="mb-3">
                            <FontAwesomeIcon icon={faFacebookF} size="xl" color={"#000"} />
                        </Link>
                        <Link to={''} target="_blank">
                            <FontAwesomeIcon icon={faInstagram}size="xl" color={"red"} />
                        </Link>
                    </div>
                    <div className="col-12 text-center">
                        <p>
                            <span>Developed by</span>
                            <a href="" target="_blank" className="ms-1">NetChunin</a>
                        </p> 
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Footer