import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "../styles/MovieDetail.css";

function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});

    const makeQueryString = () => {
        return `?movie_id=${id}`;
    }

    const getMovie = async() => {
        const queryString = makeQueryString();
        const response = await (
            await fetch("https://yts.mx/api/v2/movie_details.json" + queryString)
        ).json();
        console.log(response);
        setMovie(response.data.movie);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className="movie_detail">
            { movie.title }
        </div>
    );
}

export default MovieDetail;