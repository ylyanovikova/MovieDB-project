import { useLocation } from "react-router-dom";
import { GenreBadge } from "../GenreBadge/GenreBadge";
import { StarRating } from "../StarsRating/StarsRating";

import css from "./MovieInfo.module.css";

const MovieInfo = () => {
    const { state } = useLocation();
    const { movie, posterImg } = state;

    return (
        <div className={css.movieInfoContainer}>
            <div className={css.posterRatingBlock}>
                <img src={posterImg} alt={movie.title} />
                <StarRating average={movie.vote_average} votes={movie.vote_count} />
            </div>
            <div>
                <h1>{movie.title}</h1>
                <GenreBadge genresIds={movie.genre_ids}/>
            </div>
        </div>
    )
};
export { MovieInfo }