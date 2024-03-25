import { Container, Nav, Navbar, NavbarBrand, NavbarOffcanvas, NavbarToggle, OffcanvasBody, OffcanvasHeader } from "react-bootstrap"
import { fontsizes } from './../utils/fontsize';
import { NavLink } from "react-router-dom";

const navigationitems = [
    {title: 'HOME', to: ''},
    {title: 'FIND US', to: 'contact'},
    {title: 'OUR STORY', to: 'our story'}
]

function NavBar() {


    return (
        <>
            <Container fluid className="pt-4 px-3 ">
                <Navbar expand="sm">
                    <NavbarToggle aria-controls="offcanvas-expand" className=" text-bg-light "/>
                    <NavbarBrand href="#">
                        <h2 style={{color: '#fff',fontFamily: "'Cormorant', serif", fontSize: `clamp(${fontsizes.sm}, ${fontsizes["2xl"]}, ${fontsizes["xl"]} * 2)`}}>BRAND NAME</h2>
                    </NavbarBrand>
                    <NavbarOffcanvas style={{backgroundColor: '#e4e4e4'}} id="offcanvas-expand" placement="bottom" aria-labelledby="offcanvaslabel-expand">
                        <OffcanvasHeader closeButton></OffcanvasHeader>
                        <OffcanvasBody>
                            <Nav className="justify-content-end flex-grow-1">
                                {navigationitems.map((item) => (
                                    <div key={item.title}>
                                        <NavLink to={`/${item.to}`} className={({isActive}) => (isActive ? 'text-decoration-underline me-5 mt-1 link-active' : 'text-decoration-none me-5 mt-1 link')}>
                                            {item.title}
                                        </NavLink>
                                    </div>
                                ))}
                            </Nav>
                        </OffcanvasBody>
                    </NavbarOffcanvas>
                </Navbar>
            </Container>
        </>
    )
}

export default NavBar