import { Outlet } from "react-router-dom"
import Footer from "../components/footer"

function PageLayout() {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default PageLayout