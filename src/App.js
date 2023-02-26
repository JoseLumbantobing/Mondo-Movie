import { useEffect } from "react";

const API_KEY = 'http://www.omdbapi.com/?apikey=f7b5edc8';

const App = () => {
    // const searchMovies = async (title) => {
    //     const response = await fetch(`${API_KEY}&s=${title}`);
    //     const data = await response.json();

    //     console.log(data.Search);
    // }

    // useEffect(() => {
    //     searchMovies('Spiderman');
    // }, []);

    return (
        <h1>App</h1>
    );
}

export default App;