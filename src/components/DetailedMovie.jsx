import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './DetailedMovie.css';

function DetailedMovie(props) {
    const {id} = useParams();
    const {movies} = props;
    const movie = movies[id-1];

    return (
        <div className='film_card'>
            <div className="first_part">
                <div className='first_half'>
                    <h1 className='movie_title'>{movie && movie.Series_Title}</h1>
                    <div>
                        <span className='movie_year'>{movie && movie.Released_Year}</span>
                        <span>•</span>
                        <span className='movie_certificate'>{movie &&movie.Certificate}</span>
                        <span>•</span>
                        <span className='movie_runtime'>{movie && movie.Runtime}</span>
                    </div>
                </div>
                <div className='first_end'>
                     <div className="imdb-part">
                        <h3 className='movie_imdb'>⭐️ {movie && movie.IMDB_Rating}<span>/10</span></h3>
                        <span className='movie_votes'>({movie && Math.floor(movie.No_of_Votes/1000000)}M votes)</span>
                     </div>
                     <div className="meta-part">
                        <h3 className='movie_meta_text'>Metascore</h3>
                        <span className='movie_meta_score'>{movie && movie.Meta_score}</span>
                     </div>
                     
                </div>
            </div>
            <div className="img_container">
                <img src={movie && movie.Poster_Link} alt="Poster" />
            </div>
            <div className="more_details">
                <span className='movie_genre'><span>Genre: </span>{movie && movie.Genre}</span>
                <p className='movie_overview'><span>Overview: </span>{movie && movie.Overview}</p>
                <span className='movie_director'><span>Director: </span>{movie && movie.Director}</span>
                <p className='movie_stars'><span>Movie Stars: </span>{movie && movie.Star1 + '•' + movie.Star2 + '•' + movie.Star3}</p>
            </div>
        </div>
    )
};

export default DetailedMovie;
