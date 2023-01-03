import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ContactMe from "./components/ContactMe";
import DetailedMovie from "./components/DetailedMovie";

import './App.css';

import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
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
        
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/site-for-movie-rating/home'><Home /></Route>
                <Route exact path='/site-for-movie-rating/movies'><Movies movies={movies} fetchError={fetchError} isLoading={isLoading}/></Route>
                <Route path='/site-for-movie-rating/contactme'><ContactMe /></Route>
                <Route path='/site-for-movie-rating/movies/:id'><DetailedMovie movies={movies}/></Route>
            </Switch>
        </Router>
        
    )
};

export default App;