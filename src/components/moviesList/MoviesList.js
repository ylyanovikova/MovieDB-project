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
        if (queryObj.page < 500) {
            queryObj.page++;
        } else {
            queryObj.page = 1;
        }
        setQuery(queryObj)
    };

    const prevPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        if (queryObj.page > 1) {
            queryObj.page--;
        } else {
            queryObj.page = 500;
        }
        setQuery(queryObj)
    }

    if (movies) {
        return (
            <div id="top">
                <div className={css.movieCards}>
                    {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
                </div>
                <div className={css.navButtons}>
                    <a href="#top"><button onClick={() => prevPage()}>Previous page</button></a>
                    <a href="#top"><button onClick={() => nextPage()}>Next page</button></a>
                </div>
            </div>
        )
    } else {
        return (
            <Loading />
        )
    }

};

export { MoviesList }