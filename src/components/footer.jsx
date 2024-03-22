import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div>
                <Container style={{textAlign: 'center', fontFamily: '"Poppins", sans-serif'}} fluid>
                    <div>
                        <p style={{fontWeight: 200}}>(xxx)xxx-xxxx // info@example.com</p>
                    </div>
                    <Container fluid>
                        <Row>
                            <Col md={{span: 1, offset: 5}}>
                                <Link to={''} target="_blank">
                                    <FontAwesomeIcon icon={faFacebookF} size="xl" className=""/>
                                </Link>
                            </Col>
                            <Col md={{span: 1, offset: 0}}>
                                <Link to={''} target="_blank">
                                    <FontAwesomeIcon icon={faInstagram}size="xl" className=""/>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row style={{fontSize: 12, fontWeight: 600}}>
                            <Col md={{span: 2, offset: 4}}>
                                <Link to={'/about'} className="text-decoration-none">
                                    OUR STORY
                                </Link>
                            </Col>
                            <Col md={{span: 2, offset: 0}}>
                                <Link to={'/contact'} className="text-decoration-none">
                                    FIND US
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                    <div>
                        <p>
                        Developed by     
                            <a href="" target="_blank" rel="noopener noreferrer">NetChunin</a>
                        </p>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Footer