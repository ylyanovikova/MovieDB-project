import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PosterPreview, Loading } from "../../components";
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
    }, [id]);

    return (
        <div className={css.movieCard}>
            {movie ? <PosterPreview poster={mov.poster_path} title={mov.original_title} movie={movie} /> : <Loading />}
        </div>
    )
};

export { MoviesListCard }