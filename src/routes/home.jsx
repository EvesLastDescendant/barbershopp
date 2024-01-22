import { useState } from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { fontsizes } from './../utils/fontsize';

function Home() {
    const [isHover, setIsHover] = useState(false)

    const styles = {
        headertext: {
            fontFamily: "'Cormorant', serif",
            fontSize: `clamp(${fontsizes.lg} * 2, 8vw, ${fontsizes["3xl"]} * 2)`,
            fontWeight: 600
        },
        subtext: {
            fontFamily: "'Cormorant', serif",
            fontSize: `clamp(${fontsizes.xs}, ${fontsizes.xl}, ${fontsizes["2xl"]})`,
            fontWeight: 'bold'
        },
        storytext: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 100,
            lineHeight: fontsizes["2xl"]
        },
        tostory: {
            fontFamily: "'Poppins', sans-serif"
        },
        timestyle: {
            fontFamily: "'Poppins', sans-serif"
        },
        buttonStyle: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 200,
            border: 'none',
            backgroundColor: isHover ? '#444' : '#000',
            color: '#D3D3D3',
            padding: '1.3rem 3rem',
            transition: 'backgroundColor 0.5s ease-in',
        }
    }

    return (
        <>
            <Container fluid className="text-center">
                <Container>
                    <p style={styles.headertext}>Crisp. Clean. <br />Classic.</p>
                </Container>
                <Container style={{minHeight: '10', height: 250, maxHeight: 300}}></Container>
                <Container>
                    <p className="m-auto d-flex flex-column text-start w-75">
                        <span style={styles.subtext}>
                            The ultimate relaxed grooming experience for men. Clean cuts, sharp lines, and good times.
                        </span><br />
                        <span style={styles.storytext}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse accusamus rem aperiam. Tenetur sed pariatur possimus eum repellat tempore, et nobis? At voluptatibus odit!
                        </span><br />
                        <Link to='' style={styles.tostory} className=" text-warning">Read our story.</Link>
                    </p>
                </Container>
                <Container>
                    <div><h1 style={styles.headertext}>Appointment Hours</h1></div>
                    <p style={styles.timestyle}>Tuesday-Friday 9:00am-7:00pm</p>
                    <p style={styles.timestyle}>Saturday 9:00am-1:00pm</p>
                    <div>
                        <button 
                            type="button" 
                            style={styles.buttonStyle} 
                            onMouseEnter={() => setIsHover(true)}
                            onMouseLeave={() => setIsHover(false)}
                        >
                            <span>SCHEDULE APPOINTMENT</span>
                        </button>
                    </div>
                </Container>
            </Container>
        </>
    )
}



export default Home