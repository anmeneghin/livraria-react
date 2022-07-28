import React, { useState } from 'react';
import Modal from "./Modal";
import { FaHeart } from "react-icons/fa";
import { useFavorite } from '../contexts/contextFavorites';


const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    const { toggleFavorite, favorites } = useFavorite()

    const isFavorite = Boolean(favorites.find(b => b.id === book.id))

    let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
    let amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;
    if (thumbnail !== undefined && amount !== undefined) {
        return (
            <>
                <div className="card" onClick={() => { setShow(true); setItem(book) }}>
                    <img src={thumbnail} alt="" /><br />
                    <div className="bottom">
                        <h5 className="title">{book.volumeInfo.title}</h5>
                        {/* <p className="amount"></p> */}
                        <br />
                        <button onClick={() => { toggleFavorite(book) }} className={"favorito " + (isFavorite ? "favoritado" : "")}><FaHeart></FaHeart></button>
                    </div>
                </div>
                <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
            </>
        )
    }
}
export default Card;