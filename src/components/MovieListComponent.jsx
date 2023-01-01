import './MovieListComponent.css'
import { Link } from 'react-router-dom';

function MovieListComponent(props) {

    return (
        <Link to='/detailedMovie'>
            <div className='container'>
                <div className='imgContainer'><img src={props.poster} alt="Poster Picture" /></div>
                <div className="details">
                    <div>
                    <span className="series_title">{props.title}</span>
                    <span className="year"> ({props.year})</span>
                    </div>
                    <span className="rating">IMDB Rating: ⭐️ {props.rating}</span>
                    <span className="genre">Genres: {props.genre}</span>
                    <span className='runtime'>Runtime: {props.runtime}</span>
                </div>
                <div className='overview'>
                    <span className='overview-text'>Overview:</span>
                    <span>{props.overview}</span>
                </div>
            </div>
        </Link>
    )
}

export default MovieListComponent;