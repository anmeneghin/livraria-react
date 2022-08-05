import React from 'react';
import Card from "../../components/Card";

import NavbarComponent from '../../components/Navbar';

import { useFavorite } from '../../contexts/contextFavorites';


import './styles.css';

function Favorites() {
    const { favorites } = useFavorite()

    return (
        <>
            <NavbarComponent />

            <div className="container">
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