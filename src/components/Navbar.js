import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FaSearch, FaHeart, FaPhone } from "react-icons/fa";

import { Link } from 'react-router-dom';

function NavbarComponent({ searchBook, search, bookData, setSearch, setData }) {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="justify-content-center">
                <Container className="container-navbar">
                    <Navbar.Brand className="nav-link-home" as={Link} to="/" onClick={() => { setData([]); setSearch("") }}>Biblioteca Online</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    {
                        Boolean(bookData?.length) && (
                            <Form className="d-flex form-search-navbar" onSubmit={searchBook}>
                                <Form.Control
                                    placeholder="Encontre o seu livro..."
                                    className="me-2 input-search"
                                    aria-label="Encontre o seu livro..."
                                    ic
                                    value={search} onChange={e => setSearch(e.target.value)}

                                />
                                <Button className="form-button" type="submit" variant="outline-secondary" value={search}><FaSearch></FaSearch></Button>
                            </Form>
                        )
                    }
                    <Nav className="" id="responsive-navbar-nav">
                        <Nav.Link as={Link} to="/favoritos">Favoritos <FaHeart></FaHeart></Nav.Link>
                        <Nav.Link as={Link} to="/contatos">Contatos <FaPhone></FaPhone></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;