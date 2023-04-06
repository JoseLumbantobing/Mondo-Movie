import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./component/MovieCard";
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = 'https://api.themoviedb.org/3/movie/popular?api_key=097732c509350f650f597a8e0fae68b8';
const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=097732c509350f650f597a8e0fae68b8&query";

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
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_SEARCH}&query=${title}`);
        const data = await response.json();
        console.log(data.results);
        setMovies(data.results);
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
            <h1><a href="/">MondoMovies</a></h1>
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