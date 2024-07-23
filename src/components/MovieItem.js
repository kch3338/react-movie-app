import {Link} from "react-router-dom";
import "../styles/MovieItem.css";

function MovieItem({ id, title, coverImage }) {
    return (
        <div className="movie_item" key={ id }>
            <div className="movie_item_card">
                <Link to={`/movie/${ id }`} >
                    <img src={ coverImage } alt={ title } />
                    <h3>{ title }</h3>
                </Link>
            </div>
        </div>
    );
}

export default MovieItem;