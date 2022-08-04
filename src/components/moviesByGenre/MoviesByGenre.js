import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { moviesService } from "../../services";
import { Loading } from "../Loading/Loading";
import { MoviesListCard } from "../MovieCard/MoviesListCard";
import css from "./MoviesByGenre.module.css";

const MoviesByGenre = () => {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const [query, setQuery] = useSearchParams({ page: 1 });

    useEffect(() => {
        moviesService.getMoviesByGenres(id, { page: query.get('page') }).then(({ data }) => setMovies(data.results));
    }, [id, query]);

    const nextPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++;
        setQuery(queryObj)
    };

    const prevPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        queryObj.page--;
        setQuery(queryObj)
    }

    return (
        <div>
            <div className={css.movieCards}>
                {movies ? movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />) : <Loading />}
            </div>
            <div className={css.navButtons}>
                <button onClick={() => prevPage()}>Previous page</button>
                <button onClick={() => nextPage()}>Next page</button>
            </div>
        </div>
    )
}

export { MoviesByGenre }