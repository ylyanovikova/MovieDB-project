import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { moviesActions } from "../../redux";
import { MoviesListCard, Loading } from "..";
import css from "./PopularMovies.module.css";

const PopularMovies = () => {
    const { popular } = useSelector(({ moviesReducer }) => moviesReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getPopularMovies());
    }, [dispatch]);

    return (
        <div className={css.movieCards}>
            {popular ? popular.map(movie => <MoviesListCard key={movie.id} movie={movie} />): <Loading/>}
        </div>
    )
};
export { PopularMovies }
