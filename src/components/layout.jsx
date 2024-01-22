import { Outlet } from 'react-router-dom'

import { Container, Stack } from 'react-bootstrap'

import NavBar from './navigationbar'
import Footer from './footer'

function PageLayout() {
    return(
        <>
            <Container fluid>
                <Stack gap={5}>
                        <NavBar /><br /><br />
                        <Outlet /><br /><br /><br />
                        <Footer />
                </Stack>
            </Container>
        </>
    )
}

export default PageLayout