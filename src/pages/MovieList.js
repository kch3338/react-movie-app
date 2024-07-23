import {useEffect, useState} from "react";
import MovieItem from "../components/MovieItem";
import "../styles/MovieList.css";

function MovieList() {
    const [movieList, setMovieList] = useState([]);
    const [params, setParams] = useState({
        limit: 20,
        page: 1,
        minRating: 1,
        genre: "",
        sort: "year",
        order: "desc"
    });

    const makeQueryString = () => {
        return `?limit=${params.limit}&page=${params.page}&minimum_rating=${params.minRating}&genre=${params.genre}&sort_by=${params.sort}&order_by=${params.order}`;
    }

    const getMovieList = async() => {
        const queryString = makeQueryString();
        const response = await (
            await fetch("https://yts.mx/api/v2/list_movies.json" + queryString)
        ).json();
        console.log(response);
        setMovieList(response.data.movies);
    }

    useEffect(() => {
        getMovieList();
    }, []);

    return (
        <div className="container">
            <div className="movie_list">
                { movieList.map((movie) =>
                    <MovieItem id={ movie.id }
                               title={ movie.title }
                               coverImage={ movie.medium_cover_image }
                    />
                ) }
            </div>
        </div>
    );
}

export default MovieList;