import { useState } from "react";
import { useEffect } from "react";

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
        <div>
            <h1>Movies List</h1>
            {isLoading && <p>Loading Movies...</p>}
            {fetchError && <p style={{color: "red"}}>{`Error: ${fetchError}`}</p>}
        </div>
    )
}

export default Movies;