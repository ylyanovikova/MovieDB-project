import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { moviesActions } from "../../redux";
import { MoviesListCard } from "../MovieCard/MoviesListCard";

const MoviesList = () => {
    const { movies } = useSelector(store => store.moviesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll());
    }, [dispatch])
    return (
        movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)
    )
};
export { MoviesList }