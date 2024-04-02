import { useEffect, useState } from "react";
import NavBar from "../components/navigationbar";
import { Container, Form, Button, Row, Modal, ModalBody, ModalFooter, Table } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Bookings() {
    const [bookingList, setBookingList] = useState([])
    const [selectOptn, setSelectOptn] = useState("")
    const [show, setShow] = useState(false)
    const [formdata, setFormdata] = useState({
        name: "",
        mail: "",
        cell: "",
        gender: "",
        date:"",
        time: "",
        location: "",
    })

    const index = bookingList.length - 1

    useEffect(() => {
        const lastBooking = bookingList.length > 0 ? bookingList[index] : null
        console.log(bookingList)
        console.log(`Last booking: ${JSON.stringify(lastBooking)}`)
    }, [bookingList, index])

    function addBookings(booking) {
        setBookingList([...bookingList, booking])
    }

    function handleSubmit(e) {
        e.preventDefault()

        if(!formdata.name) return console.log("empty form")

        const newBooking = {
            id: Date.now(),
            name: formdata.name, 
            email: formdata.mail,
            cell: formdata.cell, 
            gender: formdata.gender, 
            date: formdata.date,
            time: formdata.time,
            service: selectOptn,
            ...(selectOptn === "Home" ? {location: formdata.location} : "")
        }

        console.log(`booking list: ${JSON.stringify(newBooking)}`)
        
        addBookings(newBooking)

        setFormdata({
            ...formdata,
            name: "",
            mail: "",
            cell: "",
            gender: "",
            date: "",
            time: "",
        })

        setSelectOptn("")
        setShow(true)
    }
    
    function handleChange(e) {
        const { name, value} = e.target
        setFormdata((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSelect(e) {
        setSelectOptn(e.target.value)
    }

    
    
    return (
        <>
            <div className="bookings-navbar">
                <NavBar />
            </div>
            <div style={{minHeight: 10, height: 100}}></div>
            <Container>
                <div className="form">
                    <Form action="" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="name" className="mb-0 mt-3">Name: </Form.Label>
                            <Form.Control type="text" id="name" name="name" value={formdata.name} autoComplete="true" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="mail" className="mb-0 mt-3">Email: </Form.Label>
                            <Form.Control type="mail" id="mail" name="mail" value={formdata.mail} autoComplete="true" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="cell" className="mb-0 mt-3">Phone No: </Form.Label>
                            <Form.Control type="tel" id="cell" name="cell" value={formdata.cell} autoComplete="true" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col>
                                    <Form.Label htmlFor="gender" className="mb-0 mt-3">Gender: </Form.Label>
                                    <Form.Control type="text" id="gender" name="gender" value={formdata.gender} onChange={handleChange} autoComplete="false" />
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="date" className="mb-0 mt-3">Give us a date: </Form.Label>
                                    <Form.Control type="date" id="date" name="date" value={formdata.date} onChange={handleChange} style={{ cursor: "pointer" }} autoComplete="false" />
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="time" className="mb-0 mt-3">Also a time: </Form.Label>
                                    <Form.Control type="time" id="time" name="time" value={formdata.time} onChange={handleChange} style={{ cursor: "pointer" }} autoComplete="false" />
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="select" className="mb-0 mt-3">Service Type</Form.Label>
                                    <Form.Select id="select" value={selectOptn} style={{ cursor: "pointer" }} onChange={handleSelect}>
                                        <option>Choose a Service</option>
                                        <option value="Home" >Home</option>
                                        <option value="Shop" >Shop</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Button variant="outline-dark"  type="submit">Submit</Button>
                        <Modal show={show} size={"lg"} onHide={() => {setShow(false)}}>
                            <Modal.Header closeButton>
                                <Modal.Title>Customer Details</Modal.Title>
                            </Modal.Header>
                            <ModalBody>
                                {
                                    bookingList.length > 0 && (
                                        <>
                                            <Container>
                                                <Table striped bordered hover responsive>
                                                    <thead>
                                                        <tr>
                                                            <th>id num</th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Booked Date</th>
                                                            <th>Time</th>
                                                            <th>Service Type</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>{bookingList[index].id}</td>
                                                            <td>{bookingList[index].name}</td>
                                                            <td>{bookingList[index].email}</td>
                                                            <td>{bookingList[index].date}</td>
                                                            <td>{bookingList[index].time}</td>
                                                            <td>{bookingList[index].service}</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </Container>
                                        </>
                                    )
                                }
                            </ModalBody>
                            <ModalFooter>
                                <Container className="clearfix">
                                    <Button variant="outline-success" className="float-start" onClick={() => {setShow(false)}}>Save</Button>
                                    <Button variant="outline-danger" className="float-end" onClick={() => {setShow(false)}}>Cancel</Button>
                                </Container>
                            </ModalFooter>
                        </Modal>
                    </Form>
                </div>
            </Container>
            <div style={{minHeight: 10, height: 150}}></div>
        </>
    );
}

export default Bookings