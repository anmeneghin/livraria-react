import React, { useState } from 'react';
import Card from "./Card";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch, FaHeart, FaPhone } from "react-icons/fa";

import ImagemFundo from "./../_assets/img/bookshelves-illustration.png"

import axios from "axios";
const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        evt.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=' + process.env.REACT_APP_API_KEY + '&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
    }
    return (
        <>
            {/* <div className="header">
                <div className="row1">
                    <h1>“Books are the mirrors of the soul.”<br /> - Virginia Woolf</h1>
                </div>
            </div> */}
            <Navbar collapseOnSelect expand="lg" variant="dark" className="justify-content-center">
                <Container className="container-navbar">
                    <Navbar.Brand className="nav-link-home" onClick={() => { setData([]); setSearch("") }}>Biblioteca Online</Navbar.Brand>
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
                        <Nav.Link href="#favoritos">Favoritos <FaHeart></FaHeart></Nav.Link>
                        <Nav.Link href="#contatos">Contatos <FaPhone></FaPhone></Nav.Link>
                    </Nav>


                </Container>
            </Navbar>

            {
                !Boolean(bookData?.length) && (
                    <div className="home">
                        <div className="row1">
                            <h1>“Books are the mirrors of the soul.”<br /> - Virginia Woolf</h1>
                            <Form className="d-flex form-search" onSubmit={searchBook}>
                                <Form.Control
                                    placeholder="Encontre o seu livro..."
                                    className="me-2 input-search"
                                    aria-label="Encontre o seu livro..."
                                    value={search} onChange={e => setSearch(e.target.value)}

                                />
                                <Button className="form-button" type="submit" variant="outline-secondary" value={search}><FaSearch></FaSearch></Button>
                            </Form>
                        </div>
                        <img className="imagemFundo" src={ImagemFundo} alt="fundo" />
                    </div>
                )
            }


            <div className="container-cards">
                {
                    bookData.map((item) => {
                        return (<Card key={item.id} book={item} />)
                    })
                }
            </div>
        </>
    )
}
export default Main;