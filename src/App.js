import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';

const API_KEY = 'http://www.omdbapi.com/?apikey=f7b5edc8';

const movie = {
    "Title": "Puss in Boots: The Last Wish",
    "Year": "2022",
    "imdbID": "tt3915174",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_SX300.jpg"
}

const App = () => {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_KEY}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Puss in Boots');
    }, []);

    return (
        <div className="movie-app">
            <h1>MondoMovies</h1>

            <div className="search-bar">
                <input placeholder="Search movies..." />
                <img src={SearchIcon} alt="search icon" />
            </div>

            <div className="movie-container">
                <div className="movie">
                    <div>
                        <p>{movie.Year}</p>
                    </div>
                    <div>
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                    <div>
                        <span>{movie.Type}</span>
                        <h3>{movie.Title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;