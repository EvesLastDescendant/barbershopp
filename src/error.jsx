import { Container } from 'react-bootstrap'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()

    return (
        <Container id='error-page' className='d-flex flex-column align-items-center justify-content-center text-center' style={styles.box} fluid>
            <h1>404 Oops!</h1>
            <p>Page not found, unexpexted error occured</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </Container>
    )
}

const styles = {
    box: {
        height: '100vh'
    }
}

export default Error