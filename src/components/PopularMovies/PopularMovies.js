import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { moviesActions } from "../../redux";
import { MoviesListCard } from "../MovieCard/MoviesListCard";
import css from "./PopularMovies.module.css";

const PopularMovies = () => {
    const { popular } = useSelector(({ moviesReducer }) => moviesReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getPopularMovies());
    }, []);

    return (
        <div className={css.movieCards}>
            {popular && popular.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
        </div>
    )
};
export { PopularMovies }