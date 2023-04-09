import React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
// import axios from 'axios'
// import YouTube from "react-youtube";

// const API_MOVIE = 'https://api.themoviedb.org/3/';
// const API_KEY = '097732c509350f650f597a8e0fae68b8';
const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieCard = ({ movie : {title, poster_path, release_date, vote_average, overview, id }}) => {

    // const [movie, setMovie] = useState({});
    const [show, setShow] = useState(false);
    // const [trailerShow, setTrailerShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // const handleTrailer = () => setTrailerShow(true);
    // const handleCloseTrailer = () => setTrailerShow(false);

    // const fetchMovies = async (movie) => {
    //     const {data} = await axios.get(`${API_MOVIE}movie/${id}`, {
    //         params: {
    //             api_key: API_KEY,
    //             append_to_response: 'videos'
    //         }
    //     })
    //     return data;
    // }

    // const selectedMovie = async (movie) => {
    //     const data = await fetchMovies(movie.id);
    //     console.log('Movie data', data);
    //     setMovie(data);
    // }

    // const renderVideo = () => {
    //     const trailer = selectedMovie.videos.results.find(vid => vid.name === 'Official Trailer');
    //     // console.log(trailer);
    //     return (
    //         <YouTube videoId={trailer.key} />
    //     )
    // }

    return(
        <div className="movie">
            <div>
                <button className="info-btn btn" onClick={handleShow}>Info</button>
                {/* <button className="t-btn btn" onClick={selectedMovie}>Trailer</button> */}
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
                {/* <Modal show={trailerShow} onHide={handleCloseTrailer} backdrop="static" >
                    <Modal.Header closeButton>
                        <Modal.Title>Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {selectedMovie.videos ? renderVideo() : null}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseTrailer}>Close</Button>
                    </Modal.Footer>
                </Modal> */}
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