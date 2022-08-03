import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { moviesActions } from "../../redux";
import { Loading } from "../Loading/Loading";
import { MoviesListCard } from "../MovieCard/MoviesListCard";
import css from "./MoviesList.module.css";

const MoviesList = () => {
    const { movies } = useSelector(store => store.moviesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll());
    }, [dispatch])
    return (
        <div className={css.movieCards}>
            {movies? movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />): <Loading/>}
        </div>
    )
};
export { MoviesList }