import { Container, Image } from "react-bootstrap"
import NavBar from "../components/navigationbar"
import { teamBarbers } from './../teamdb';

function About() {


    return (
        <>
            <div className="about-navbar">
                <NavBar />
            </div>
            <div style={{minHeight: 10, height: 100}}></div>
            <Container>
                <div className="div">
                    <p className="summary">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Laudantium quasi quibusdam molestiae perferendis, architecto 
                        labore assumenda placeat sunt exercitationem, consectetur 
                        voluptates atque! Porro dolorem velit quibusdam ad, eos 
                        nam debitis!
                    </p>
                </div>
            </Container>
            <section className="horizontal">
                {teamBarbers.map((barber) => (
                    <section  key={barber.id} className="wrapper">
                        <div>
                            <h3>{barber.name}</h3>
                            <p>{barber.title}</p>
                        </div>
                        <div>
                            <Image src={barber.image} className="img-fluid" width={100}/>
                        </div>
                    </section>
                ))}
            </section>
            <div style={{minHeight: 10, height: 100}}></div>
        </>
    )
}

export default About