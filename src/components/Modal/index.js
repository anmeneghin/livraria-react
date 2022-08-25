import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { DateTime } from "luxon";
import './styles.css';

const ModalLivro = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let publishedDate = DateTime.fromISO(item.volumeInfo.publishedDate).toFormat('dd/MM/yyyy');

    return (
        <Modal show={show} onHide={onClose} id={item.id} animation={true} scrollable={true}>
            <Modal.Header closeButton>
                <Modal.Title>{item.volumeInfo.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="inner-box">
                    <img src={thumbnail} alt="" />
                    <div className="info">
                        <h2>{item.volumeInfo.title}</h2>

                        <h6>Autor(es): {item.volumeInfo.authors.map(txt => <>{txt}<br /></>)}</h6>
                        <h6>Editora: {item.volumeInfo.publisher}</h6>
                        <h6>Data Publicação: {publishedDate}</h6>
                    </div>
                </div>
                <p className="description">{item.volumeInfo.description}</p>
                <a className='btn-ver-mais' href={item.volumeInfo.previewLink} target="_blank" rel="noreferrer"><Button variant="primary">Ver Mais</Button></a>
            </Modal.Body>
        </Modal>
    )
}
export default ModalLivro;