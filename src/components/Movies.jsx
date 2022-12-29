import { useState } from "react";
import { useEffect } from "react";

import MovieListComponent from "./MovieListComponent";
import "./Movies.css"

function createMovieComp(movie){
    return (
        <MovieListComponent
        key = {movie.Id}
        id = {movie.Id}
        poster = {movie.Poster_Link}
        title = {movie.Series_Title}
        year = {movie.Released_Year}
        rating = {movie.IMDB_Rating}
        genre = {movie.Genre}
        runtime = {movie.Runtime}
        overview = {movie.Overview}
        />
    )
}

function createMovieCompList(movies){
    let movieComps = [];

    for (let movie of movies){
        movieComps.push(createMovieComp(movie));
    }

    return movieComps;
};

function Movies() {
    const [movies, setMovies] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const API_URL = 'http://localhost:3500/imdb_top_1000';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch(API_URL);
                if(!res.ok) throw Error('The Data has not received');
                const moviesList = await res.json();
                setMovies(moviesList);
                setFetchError(null);
            } catch (e){
                setFetchError(e.message);
            } finally {
                setIsLoading(false);
            }
        }

        setTimeout(() => {
            fetchMovies();
        }, 2000);
        
    },[])

    return (
        <div className="MoviesPage">
            <h1>Top 1000 Movies</h1>
            {isLoading && <p>Loading Movies...</p>}
            {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
            {!fetchError && !isLoading && <div className="movie-list">
                {createMovieCompList(movies)}
            
            </div>}
        </div>
    )
}

export default Movies;