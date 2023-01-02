import MovieListCSS from './MovieListComponent.module.css'
import { Link } from 'react-router-dom';

function MovieListComponent(props) {

    return (
        <Link to={`/movies/${props.id}`}>
            <div className={MovieListCSS.container}>
                <div className={MovieListCSS.imgContainer}><img src={props.poster} alt="Poster Picture" /></div>
                <div className={MovieListCSS.details}>
                    <div>
                    <span className={MovieListCSS.series_title}>{props.title}</span>
                    <span className={MovieListCSS.year}> ({props.year})</span>
                    </div>
                    <span className={MovieListCSS.rating}>IMDB Rating: ⭐️ {props.rating}</span>
                    <span className={MovieListCSS.genre}>Genres: {props.genre}</span>
                    <span className={MovieListCSS.runtime}>Runtime: {props.runtime}</span>
                </div>
                <div className={MovieListCSS.overview}>
                    <span className={MovieListCSS.overview_text}>Overview:</span>
                    <span>{props.overview}</span>
                </div>
            </div>
        </Link>
    )
}

export default MovieListComponent;