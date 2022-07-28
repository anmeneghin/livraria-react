import React, { useState } from 'react';
import Card from "../../components/Card";
import NavbarComponent from '../../components/Navbar';

import ImagemFundo from "./../../assets/img/bookshelves-illustration.png"

import axios from "axios";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaSearch } from "react-icons/fa";

const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);;

    const searchBook = (evt) => {
        evt.preventDefault();
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=' + process.env.REACT_APP_API_KEY + '&maxResults=40')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))
    }

    return (
        <>
            <NavbarComponent searchBook={searchBook} search={search} bookData={bookData} setSearch={setSearch} setData={setData} ></NavbarComponent>

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