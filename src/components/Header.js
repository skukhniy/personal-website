import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarC() {
	return (
		<Navbar className="navbar-custom" variant="light" expand="xl">
			<Container>
				<Navbar.Brand>Stanislav Kukhniy </Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#link">About Me</Nav.Link>
						<Nav.Link href="#home">Skills</Nav.Link>
						<Nav.Link href="#link">Projects</Nav.Link>
						<Nav.Link href="#link">Contact</Nav.Link>
						<Nav.Link href="#link">Blog</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavbarC;
