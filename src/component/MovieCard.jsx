import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie : {title, poster_path, release_date, vote_average, overview }}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return(
        <div className="movie">
            <div>
                <button className="info-btn btn" onClick={handleShow}>Info</button>
                <button className="t-btn btn">Trailer</button>
                <Modal show={show} onHide={handleClose} backdrop="static" >
                    <Modal.Header closeButton>
                        <Modal.Title>Info Film</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <img style={{ width:'14rem' }} src={poster_path ? API_IMG+poster_path : "https://media.istockphoto.com/id/171302206/id/foto/error-404.jpg?s=612x612&w=0&k=20&c=JbdlRFFxIWtswcgk6J3-a6eQ12JKYm0sAMFiM3-dN7Y="} alt={title} />
                    <h3>{title}</h3>
                    <h4>ImDB: {vote_average}</h4>
                    <h4>Release Date: {release_date}</h4>
                    <br />
                    <h4>Overview</h4>
                    <p>{overview}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <img src={poster_path ? API_IMG+poster_path : "https://media.istockphoto.com/id/171302206/id/foto/error-404.jpg?s=612x612&w=0&k=20&c=JbdlRFFxIWtswcgk6J3-a6eQ12JKYm0sAMFiM3-dN7Y="} alt={title} />
            </div>
            <div>
                <span>{vote_average}</span>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;