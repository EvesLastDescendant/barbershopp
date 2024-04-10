import { Container } from "react-bootstrap"
import NavBar from "../components/navigationbar"
import { fontsizes } from "../utils/fontsize"
import { Link } from "react-router-dom"
import { useState } from "react"
import AnimPos from "../components/gsapanimpos"

function Home() {
    const [isHover, setIsHover] = useState(false)
    

    return (
        <> 
            <div className="for-navbar">
                <NavBar />
                <Container fluid style={{display: 'grid', placeItems: 'center', height: '80vh'}}>
                    <div>
                        <AnimPos text={"Clean. Crisp. Classy."}/>
                    </div>
                </Container>
            </div>
            <Container>
                <div style={{minHeight: 10, height: 150}}></div>
                <div className="div">
                    <p style={{fontFamily: "'Cormorant', serif", fontWeight: 'bold'}}>The ultimate relaxed grooming experience for men. Clean cuts, sharp lines, and good times.</p>
                    <p style={{fontFamily: "'Poppins', sans-serif", fontWeight: 100, lineHeight: fontsizes["2xl"]}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus perspiciatis fugit facere maiores aperiam quod sequi, quibusdam consequatur fugiat, vel deleniti dolore cum, debitis sit quas. Odio, ea! Id, soluta?</p>
                    <Link to={'/about'} style={{fontFamily: "'Poppins', sans-serif"}} className="text-warning" >Read more about us</Link>
                </div>
            </Container>
            <Container>
                <div style={{minHeight: 10, height: 150}}></div>
                <Container className="text-center">

   {/* // admin button// */}
   <Link to ={"/SignIn"}>
                    <button 
                    style={{background:"black",
                     padding:"1rem", borderRadius:"1rem",  fontSize: `clamp(${fontsizes.lg} * 3.5, 8vw, 
                        ${fontsizes["1rem"]}  )`,
                        borderRadius: 5,
                        letterSpacing: 2,
                        width: '20%',
                        fontWeight: 200,
                        color: '#fff',
                        }}>
                        
                        ADMIN
                    </button>
                    </Link>
                    {/* ///////////////////////// */}

                    <h1
                        style={{
                            fontSize: `clamp(${fontsizes.lg} * 3.5, 8vw, ${fontsizes["3xl"]} * 2)`,
                            fontWeight: 600,
                            fontFamily: "'Cormorant', serif",
                            color: '#000',
                            marginBottom: '50px'
                        }}
                    >
                        Appointment Hours
                    </h1>
                    <p>Weekdays: Tuesday-Friday 900am-7:00pm</p>
                    <p className="mb-5">Weekends: Saturday 9:00am-1:00pm</p>
                    <Link to={'/bookings'} style={{
                        textDecoration: 'none',
                        borderRadius: 5,
                        letterSpacing: 2,
                        width: '50%',
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 200,
                        backgroundColor: isHover ? '#444' : '#000',
                        border: 'none',
                        color: '#fff',
                        padding: '1rem 1.5rem',
                        transition: 'backgroundColor 0.5s ease-in'
                    }} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                        SCHEDULE AN APPOINTMENT
                    </Link>
                </Container>
            </Container>
            <div style={{minHeight: 10, height: 150}}></div>
                
        </>
    )
}

export default Home