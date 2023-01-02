import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import DetailedMovieCSS from './DetailedMovie.module.css';

function DetailedMovie(props) {
    const {id} = useParams();
    const {movies} = props;
    const movie = movies[id-1];

    return (
        <div className={DetailedMovieCSS.film_card}>
            <div className={DetailedMovieCSS.first_part}>
                <div className={DetailedMovieCSS.first_half}>
                    <h1 className={DetailedMovieCSS.movie_title}>{movie && movie.Series_Title}</h1>
                    <div>
                        <span className={DetailedMovieCSS.movie_year}>{movie && movie.Released_Year}</span>
                        <span>•</span>
                        <span className={DetailedMovieCSS.movie_certificate}>{movie &&movie.Certificate}</span>
                        <span>•</span>
                        <span className={DetailedMovieCSS.movie_runtime}>{movie && movie.Runtime}</span>
                    </div>
                </div>
                <div className={DetailedMovieCSS.first_end}>
                     <div className={DetailedMovieCSS.imdb_part}>
                        <h3 className={DetailedMovieCSS.movie_imdb}>⭐️ {movie && movie.IMDB_Rating}<span>/10</span></h3>
                        <span className={DetailedMovieCSS.movie_votes}>({movie && Math.ceil(movie.No_of_Votes/100000)}M votes)</span>
                     </div>
                     <div className={DetailedMovieCSS.meta_part}>
                        <h3 className={DetailedMovieCSS.movie_meta_text}>Metascore</h3>
                        <span className={DetailedMovieCSS.movie_meta_score}>{movie && movie.Meta_score}</span>
                     </div>
                     
                </div>
            </div>
            <div className={DetailedMovieCSS.img_container}>
                <img src={movie && movie.Poster_Link} alt="Poster" />
            </div>
            <div className={DetailedMovieCSS.more_details}>
                <span className={DetailedMovieCSS.movie_genre}><span>Genre: </span>{movie && movie.Genre}</span>
                <p className={DetailedMovieCSS.movie_overview}><span>Overview: </span>{movie && movie.Overview}</p>
                <span className={DetailedMovieCSS.movie_director}><span>Director: </span>{movie && movie.Director}</span>
                <p className={DetailedMovieCSS.movie_stars}><span>Movie Stars: </span>{movie && movie.Star1 + '•' + movie.Star2 + '•' + movie.Star3}</p>
            </div>
        </div>
    )
};

export default DetailedMovie;
