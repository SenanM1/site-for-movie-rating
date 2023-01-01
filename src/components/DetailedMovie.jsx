import {useParams} from 'react-router-dom';

function DetailedMovie(props) {
    const {id} = useParams();
    const {movies} = props;
    const movie = movies[id-1]; // Because index starts from 0

    return (
        <div>
            
        </div>
    )
};

export default DetailedMovie;
