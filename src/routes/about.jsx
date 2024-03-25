import { Container, Image } from "react-bootstrap"
import NavBar from "../components/navigationbar"

function About() {
    return (
        <>
            <div className="about-navbar">
                <NavBar />
            </div>
            <div style={{minHeight: 10, height: 150}}></div>
            <Container>
                <div className="div">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium quasi quibusdam molestiae perferendis, architecto 
                        labore assumenda placeat sunt exercitationem, consectetur 
                        voluptates atque! Porro dolorem velit quibusdam ad, eos 
                        nam debitis!
                    </p>
                </div>
            </Container>
            <div style={{minHeight: 10, height: 100}}></div>
            <div style={{border: '1px solid'}}>
                <h3>Meet the Team</h3>
                <div>
                    <Image alt="image" src="/src/assets/IMG_4983.jpg" width={250} />
                    <Image alt="image" src="/src/assets/IMG_4983.jpg" width={250} />
                    <Image alt="image" src="/src/assets/IMG_4983.jpg" width={250} />
                </div>
            </div>
        </>
    )
}

export default About