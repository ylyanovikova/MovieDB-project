import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PosterPreview } from "..";
import { moviesActions } from "../../redux";
import css from './MovieListCard.module.css';

const MoviesListCard = ({ movie }) => {

    const { id } = useParams();
    const { movieById } = useSelector(state => state.moviesReducer);
    const [mov, setMov] = useState(movie || movieById);
    const dispatch = useDispatch();

    useEffect(() => {
        if (movie) {
            setMov(movie);
        } else {
            dispatch(moviesActions.getById({ id }));
            setMov(movieById)
        }
    }, [id, dispatch, movie, movieById]);

    return (
        <div className={css.movieCard}>
            {movie && <PosterPreview poster={mov.poster_path} title={mov.original_title} movie={movie} />}
        </div>
    )
};

export { MoviesListCard }