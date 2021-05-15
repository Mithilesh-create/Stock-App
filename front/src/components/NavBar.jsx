import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="/">Exchanger</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/">
                        <Button variant="outline-light">TopStocks</Button>
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                    <Link to="/toplost">
                    <Button variant="outline-light">TopLost</Button>
                    </Link>
                    </Nav.Link>
                    <Nav.Link>
                    <Link to="/topactive">
                    <Button variant="outline-light">TopActive</Button>
                    </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
