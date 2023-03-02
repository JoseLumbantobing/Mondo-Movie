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
                <img src={API_IMG+poster_path} alt={title} />
            </div>
            <div>
                <span>{vote_average}</span>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;