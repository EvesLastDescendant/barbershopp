import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { CloseButton, Container, Form, FormControl, Modal, ModalBody, Nav, Navbar, NavbarBrand, NavbarOffcanvas, NavbarToggle, OffcanvasBody, OffcanvasHeader} from "react-bootstrap"
import { fontsizes } from './../utils/fontsize';
import { NavLink } from "react-router-dom";

const navigationitems = [
    {title: 'HOMEPAGE', to: ''}, 
    {title: 'FIND US', to: 'contact'},
    {title: 'OUR STORY', to: 'about'} 
]

function NavBar() {
    const [show, setShow] = useState(false)

    const styles = {
        button: {
            border: 'none',
            backgroundColor: 'transparent'
        },
        brandtext: {
            fontFamily: "'Cormorant', serif",
            fontSize: `clamp(${fontsizes.sm}, ${fontsizes["2xl"]}, ${fontsizes["3xl"]} * 2)`
        }
    }

    useEffect(() => {

    }, [])
    return(
        <>
            <Navbar expand="sm" className="pt-5">
                <Container fluid>
                    <NavbarToggle aria-controls="offcanvas-expand"/>
                    <NavbarBrand href="#"><h2 style={styles.brandtext}>Brand Name</h2></NavbarBrand>
                    <NavbarOffcanvas id="offcanvas-expand" placement="start" aria-labelldby="offcanvaslabel-expand" fluid>
                        <OffcanvasHeader closeButton></OffcanvasHeader>
                        <OffcanvasBody className="w-75 mx-auto">
                            <Nav className="justify-content-start flex-grow-1">
                                {navigationitems.map((item) => (
                                        <div key={item.title}>
                                            <NavLink
                                            to={`/${item.to}`} 
                                            className={({isActive}) => (isActive ? 'text-decoration-underline ms-5 mt-1 link-active' : 'text-decoration-none ms-5 mt-1 link')}
                                            >
                                                {item.title}
                                            </NavLink>
                                        </div>
                                ))}
                            </Nav>
                        </OffcanvasBody>
                    </NavbarOffcanvas>
                    <div>
                        <button type="button" style={styles.button} onClick={() => setShow(true)}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>

                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelldby="search-bar-modal"
                        >
                            <ModalBody>
                                <Form className="d-flex align-items-center justify-content-center ">
                                    <FormControl 
                                        type="search"
                                        placeholder="search"
                                        aria-label="search"
                                        className="me-5"
                                    />
                                    <CloseButton onClick={() => setShow(false)}/>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar
// 08060686592 -mr fwanshak