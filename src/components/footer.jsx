import { Container} from "react-bootstrap"
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { useState } from "react";

function Footer() {
    const [isFbhover, setisFbhover] = useState(false)
    const [isInHover, setisInHover] = useState(false)
    const [isStoryhover, setisStoryhover] = useState(false)
    const [isFindHover, setisFindHover] = useState(false)
    const [isporthover, setisporthover] = useState(false)

    const fblinkstyle = {
        color: isFbhover ? '#444' : '#dedede',
        transition: 'color 0.3s ease-in'
    }
    const inlinkstyle = {
        color: isInHover ? '#444' : '#dedede',
        transition: 'color 0.5s ease-in'
    }
    const storylinkstyle = {
        color: isStoryhover ? '#444' : '#dedede',
        transition: 'color 0.5s ease-in'
    }
    const findlinkstyle = {
        color: isFindHover ? '#444' : '#dedede',
        transition: 'color 0.5s ease-in'
    }
    const portlinkstyle = {
        color: isporthover ? '#dedede' : '#444',
        transition: 'color 0.3s ease-in'
    }
    
    return(
        <>
            <Container fluid className="text-center">
                <p>(xxx) xxx-xxxx {`//`} info@examplebarbers.com</p>
                <div>
                    <span>
                        <Link 
                            to='' 
                            target="_blank"
                            style={fblinkstyle} 
                            className="mx-2" 
                            onMouseEnter={() => setisFbhover(false)}
                            onMouseLeave={() => setisFbhover(true)}
                        >
                            <FontAwesomeIcon icon={faFacebookF}/>
                        </Link>
                    </span>
                    <span className="mx-2">
                        <Link 
                            to=''
                            target="_blank"
                            style={inlinkstyle}
                            className="mx-2"
                            onMouseEnter={() => setisInHover(false)}
                            onMouseLeave={() => setisInHover(true)}
                        >
                            <FontAwesomeIcon icon={faInstagram}/>
                        </Link>
                    </span>
                </div>
                <p>
                    <Link to='' className="text-decoration-none">
                        <span 
                            className="mx-2"
                            style={storylinkstyle}
                            onMouseEnter={() => setisStoryhover(false)}
                            onMouseLeave={() => setisStoryhover(true)}
                        >
                            OUR STORY
                        </span>
                    </Link>
                    <Link to='' className="text-decoration-none">
                        <span 
                            className="mx-2"
                            style={findlinkstyle}
                            onMouseEnter={() => setisFindHover(false)}
                            onMouseLeave={() => setisFindHover(true)}
                        >
                            FIND US
                        </span>
                    </Link>
                </p>
                <p>
                    Developed by <a 
                        href="https://cloudhive-rr.netlify.app" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className=" text-decoration-none" 
                        style={portlinkstyle}
                        onMouseEnter={() => setisporthover(false)}
                        onMouseLeave={() => setisporthover(true)}
                        >
                            NetChunin
                        </a>
                </p>
            </Container>
        </>
    )
}


export default Footer
