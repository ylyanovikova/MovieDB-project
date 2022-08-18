import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import { moviesActions } from "../../redux";
import { GenreBadge, StarRating } from "../../components";
import css from "./MovieInfo.module.css";

const MovieInfo = () => {
    const { mov } = useSelector(state => state.moviesReducer)
    const { id } = useParams();
    const { state } = useLocation();
    const dispatch = useDispatch();

    const { movie, posterImg } = state;
    const [chosenMovie, setChosenMovie] = useState(movie || null);

    useEffect(() => {
        if (state) {
            setChosenMovie(movie);
        } else {
            dispatch(moviesActions.getById({ id }));
            setChosenMovie(mov);
        }
    }, [id, dispatch, mov, movie, state]);

    const { title, vote_average, vote_count, genre_ids, overview, release_date } = chosenMovie;

    return (
        <div className={css.movieInfoContainer}>
            <div className={css.posterRatingBlock}>
                <img src={posterImg} alt={title} />
                <StarRating average={vote_average} votes={vote_count} />
            </div>
            <div>
                <h1>{title}</h1>
                <GenreBadge genresIds={genre_ids} />
                <h3>
                    About movie
                </h3>
                <p>
                    {overview}
                </p>
                <h5>Date of release</h5>
                <span>{release_date}</span>
            </div>
        </div>
    )
};

export { MovieInfo }
