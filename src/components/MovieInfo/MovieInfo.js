import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { moviesService } from "../../services";
import { GenreBadge } from "../GenreBadge/GenreBadge";
import { StarRating } from "../StarsRating/StarsRating";

import css from "./MovieInfo.module.css";

const MovieInfo = () => {
    const { state } = useLocation();
    const { movie, posterImg } = state;
    const { id } = useParams();

    const [chosenMovie, setChosenMovie] = useState(movie);

    useEffect(() => {
        if (movie) {
            setChosenMovie(movie)
        } else {
            moviesService.getById(id).then(value => setChosenMovie(value))
        }
    }, [id]);

    const {title, vote_average, vote_count, genre_ids, overview, release_date} = chosenMovie;

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