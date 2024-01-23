import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';
import { fontsizes } from '../utils/fontsize';

function Contact() {
    return(
        <>
            <Container className=' w-50 border border-black text-center border-top-0 border-start-0 border-end-0 border-bottom  mx-auto '>
                <p style={{fontFamily: "'Poppins', sans-serif", fontWeight: 200}}>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span> We are located at XXX XXXX XXXX XXXX XXXX</span>
                </p><br /><br /><br />
                <p style={{lineHeight: 2,fontWeight: 'Bolder', fontFamily: "'Cormorant', serif", fontSize: `clamp(${fontsizes.md}, ${fontsizes.xl}, ${fontsizes['2xl']})`}}>
                    BarberShop Name <br /> XXXX X Xxxxx Xxxx Xxxxx x <br /> Xxxxx Xxxxx, XX XXXXX
                </p>
            </Container>
            <Container className='border d-flex justify-content-center align-items-center '>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190570.9834718376!2d44.641951110727305!3d41.727604400364896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x61d084ede2576ea3!2sTbilisi%2C%20Georgia!5e0!3m2!1sen!2sng!4v1706006458149!5m2!1sen!2sng" 
                    width="100%" height="450" 
                    style={{border:0}} 
                    allowfullscreen="true" 
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </Container>
        </>
    )
}

export default Contact