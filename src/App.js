import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./component/MovieCard";

const API_KEY = 'http://www.omdbapi.com/?apikey=f7b5edc8';

// const movie = {
//     "Title": "Puss in Boots: The Last Wish",
//     "Year": "2022",
//     "imdbID": "tt3915174",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_SX300.jpg"
// }

const App = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        searchMovies('Avengers');
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_KEY}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    return (
        <div className="movie-app">
            <h1>MondoMovies</h1>

            <div className="search-bar">
                <input 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search movies..." />
                <img 
                    src={SearchIcon} 
                    alt="search icon"
                    onClick={() => searchMovies(search)} 
                />
            </div>

            {
                movies?.length > 0 
                    ? (
                        <div className="movie-container">
                            {movies.map((movie) => {
                                return <MovieCard movie={movie} />
                            })}
                        </div>
                    ) : (
                        <div className="not-found">
                            <h2>Movie not found!</h2>
                        </div>
                    )
            }
        </div>
    );
}

export default App;