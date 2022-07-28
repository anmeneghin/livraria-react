import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalLivro = ({ show, item, onClose }) => {
    if (!show) {
        return null;
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    return (
        <Modal show={show} onHide={onClose} id={item.id} animation={true} scrollable={true}>
            <Modal.Header closeButton>
                <Modal.Title>{item.volumeInfo.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="inner-box">
                    <img src={thumbnail} alt="" />
                    <div className="info">
                        <h1>{item.volumeInfo.title}</h1>
                        <h3>{item.volumeInfo.authors}</h3>
                        <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4>
                    </div>
                </div><br />
                <p className="description">{item.volumeInfo.description}</p><br />
                <a href={item.volumeInfo.previewLink} target="_blank" rel="noreferrer"><Button variant="primary">Ver Mais</Button></a>
            </Modal.Body>
        </Modal>
    )
}
export default ModalLivro;


// import React from 'react';
// const Modal=({show,item,onClose})=>{
//     if(!show)
//     {
//         return null;
//     }
//     let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
//     return(
//         <>
//             <div className="overlay">
//                 <div className="overlay-inner">
//                     <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
//                     <div className="inner-box">
//                         <img src={thumbnail} alt="" />
//                         <div className="info">
//                             <h1>{item.volumeInfo.title}</h1>
//                             <h3>{item.volumeInfo.authors}</h3>
//                             <h4>{item.volumeInfo.publisher}<span>{item.volumeInfo.publishedDate}</span></h4><br/>
//                             <a href={item.volumeInfo.previewLink}><button>More</button></a>
//                         </div>
//                     </div>
//                     <h4 className="description">{item.volumeInfo.description}</h4>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Modal;