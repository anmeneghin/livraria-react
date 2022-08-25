import React from 'react';
import Card from "../../components/Card";

import NavbarComponent from '../../components/Navbar';

import { useFavorite } from '../../contexts/contextFavorites';
import Button from 'react-bootstrap/Button';

import { useNavigate } from "react-router-dom";

import './styles.css';

function Favorites() {
    const { favorites } = useFavorite();

    let navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <>
            <NavbarComponent />
            <div className='container-favoritos'>
                <div>
                    <Button variant="dark" onClick={handleClick}>Voltar</Button>
                </div>
            </div>
            <div className='container-favoritos'>
                <h1 className='titulo-favoritos'>Favoritos</h1>
            </div>

            <div className="container-cards">

                {
                    favorites.map((item) => {
                        return (<Card key={item.id} book={item} />)
                    })
                }
            </div>

        </>
    );
}

export default Favorites;