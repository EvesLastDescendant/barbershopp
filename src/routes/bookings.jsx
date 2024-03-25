import { useState } from "react";
import NavBar from "../components/navigationbar";

function Bookings() {
    const [value, setValue] = useState("")
    return (
        <>
            <div className="bookings-navbar">
                <NavBar />
            </div>
            <div style={{minHeight: 10, height: 150}}></div>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <input type="text" value={value} onChange={(e) => {
                    setValue(e.target.value)
                    console.log(value)
                }} />
            </form>
        </>
    );
}

export default Bookings