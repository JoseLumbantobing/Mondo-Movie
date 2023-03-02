import React from "react";
const API_IMG = "https://image.tmdb.org/t/p/w500/";

// const MovieCard = ({movie : {Year, Poster, Title, Type}}) => {
const MovieCard = ({movie : {title, poster_path, release_date, vote_average}}) => {
    return(
        <div className="movie">
            <div>
                <p>{release_date}</p>
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