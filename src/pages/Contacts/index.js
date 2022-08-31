import React from 'react';

import NavbarComponent from '../../components/Navbar';

import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";

import './styles.css';

import ImagemFundo from "./../../assets/img/contact.png";

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Contacts() {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <>
            <NavbarComponent />
            <div className='container-contato'>
                <div>
                    <Button variant="dark" onClick={handleClick}>Voltar</Button>
                </div>
            </div>
            <div className="home">
                <div className="row">
                    <h1>Entre em contato!</h1>
                    <h4 className='descricao-contatos'>Lorem ipsum dolor sit, consectetur adipiscing elit. Nunc vulputate volutpat purus vel efficitur. Sed efficitur lacus et urna pulvinar, vel eleifend nisl dignissim.</h4>
                    <br />
                    <h3 className='icons-social-media'><FaInstagram></FaInstagram>&nbsp; <FaLinkedin></FaLinkedin>&nbsp;
                        <FaGithub></FaGithub></h3>
                </div>
                <img className="imagemFundo" src={ImagemFundo} alt="fundo" />
            </div>
        </>
    );
}

export default Contacts;