import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
//import Form from 'react-bootstrap/Form';
import firebase from 'firebase/app';
import {Button} from 'react-bootstrap/';
//import Card1 from './Card1';

const Menu = () => {

    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">My Cafe</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#home">Reserved a table</Nav.Link>
                        <NavDropdown title="Menu" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Card1">Beverages</NavDropdown.Item>
                            <NavDropdown.Item href="/Card2">Desserts</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    {/* <Form inline> */}
                        <Button variant="outline-success">< button onClick={() => firebase.auth().signOut()}>Sign Out</button></Button>
                    {/* </Form> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Menu;
