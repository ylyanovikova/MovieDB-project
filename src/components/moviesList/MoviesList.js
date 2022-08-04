import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { moviesActions } from "../../redux";
import { Loading } from "../Loading/Loading";
import { MoviesListCard } from "../MovieCard/MoviesListCard";
import css from "./MoviesList.module.css";

const MoviesList = () => {
    const { movies } = useSelector(store => store.moviesReducer);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({ page: 1 });

    useEffect(() => {
        dispatch(moviesActions.getAll({ page: query.get('page') }));
    }, [dispatch, query]);

    const nextPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        queryObj.page++;
        setQuery(queryObj)
    };

    const prevPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        queryObj.page--;
        setQuery(queryObj);
    }

    return (
        <div id="top">
            <div className={css.movieCards}>
                {movies ? movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />) : <Loading />}
            </div>
            <div className={css.navButtons}>
                <button onClick={() => prevPage()}>Previous page</button>
                <a href="#top"><button onClick={() => nextPage()}>Next page</button></a>
            </div>
        </div>
    )
};

export { MoviesList }