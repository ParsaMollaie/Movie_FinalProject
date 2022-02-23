import { Container, Nav, Navbar } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import logo from '../images/logo.jpg'



const Header = ({ title }) => {


    return (
        <div>
            <Navbar className='py-3' bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand >
                        <Link to={"/"} style={{ textDecoration: 'none' }} className='title'>
                            <img
                                alt="logo"
                                src={logo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            {title}
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ms-5">
                            <Link className='me-3 link' to="/">Home</Link>
                            <Link className='link' to="/addMovie">Add Movie</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
