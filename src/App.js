import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./component/MovieCard";

// const API_KEY = 'http://www.omdbapi.com/?apikey=f7b5edc8';
// const API_KEY = 'https://api.themoviedb.org/3/movie/550?api_key=097732c509350f650f597a8e0fae68b8';
const API_KEY = 'https://api.themoviedb.org/3/movie/popular?api_key=097732c509350f650f597a8e0fae68b8';

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
        fetch(API_KEY)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results);
            setMovies(data.results)
        });
        // searchMovies('Avengers');
    }, []);

    const searchMovies = async (title) => {
        // const response = await fetch(`${API_KEY}&s=${title}`);
        const response = await fetch(`${API_KEY}`);
        const data = await response.json();
        console.log(data);
        // setMovies(data.Search);
    }

    const handleKey = (e) => {
        if(e.key==="Enter") {
            searchMovies(search);
        } else {
            return;
        }
    }

    return (
        <div className="movie-app">
            <h1>MondoMovies</h1>

            <div className="search-bar">
                <input 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyUp={(e) => handleKey(e)}
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
                                return <MovieCard movie={movie} key={movie.id} />
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