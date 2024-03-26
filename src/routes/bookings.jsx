import { useState } from "react";
import NavBar from "../components/navigationbar";
import { Container, Form, Button, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Bookings() {
    const [bookingList, setBookingList] = useState([])
    const [formdata, setFormdata] = useState({
        name: "",
        mail: "",
        gender: "",
        date:"",
        time: "",
    })
    const [selectOptn, setSelectOptn] = useState("") 

    function addBookings(booking) {
        setBookingList((bookingList) => [...bookingList, booking])
    }

    function handleSubmit(e) {
        e.preventDefault()

        if(!formdata.name) return console.log("empty form")

        const newBooking = {
            name: formdata.name, 
            email: formdata.mail, 
            gender: formdata.gender, 
            date: formdata.date,
            time: formdata.time,
            service: selectOptn
        }

        console.log(`booking list: ${JSON.stringify(newBooking)}`)
        
        addBookings(newBooking)

        setFormdata({
            ...formdata,
            name: "",
            mail: "",
            gender: "",
            date: "",
            time: "",
        })

        setSelectOptn("")
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
            <div style={{minHeight: 10, height: 150}}></div>
            <Container>
                <div className="form">
                    <Form action="" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="name">Name: </Form.Label>
                            <Form.Control type="text" id="name" name="name" value={formdata.name} autoComplete="true" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="mail">Email: </Form.Label>
                            <Form.Control type="mail" id="mail" name="mail" value={formdata.mail} autoComplete="true" onChange={handleChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Row>
                                <Col>
                                    <Form.Label htmlFor="gender">Gender: </Form.Label>
                                    <Form.Control type="text" id="gender" name="gender" value={formdata.gender} onChange={handleChange} autoComplete="false" />
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="date">Give us a date: </Form.Label>
                                    <Form.Control type="date" id="date" name="date" value={formdata.date} onChange={handleChange} style={{ cursor: "pointer" }} autoComplete="false" />
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="time">Also a time: </Form.Label>
                                    <Form.Control type="time" id="time" name="time" value={formdata.time} onChange={handleChange} style={{ cursor: "pointer" }} autoComplete="false" />
                                </Col>
                                <Col>
                                    <Form.Label htmlFor="select" >Service Type</Form.Label>
                                    <Form.Select id="select" value={selectOptn} style={{ cursor: "pointer" }} onChange={handleSelect}>
                                        <option>Choose a Service</option>
                                        <option value="home" >Home</option>
                                        <option value="shop" >Shop</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                        </Form.Group>
                        <Button variant="outline-dark"  type="submit">submit</Button>
                    </Form>
                </div>
            </Container>
            <div style={{minHeight: 10, height: 150}}></div>
        </>
    );
}

export default Bookings