import { PosterPreview } from "../../components";
import css from './MovieListCard.module.css';

const MoviesListCard = ({ movie }) => {
    const { original_title, poster_path } = movie;

    return (
        <div className={css.movieCard}>
            <PosterPreview poster={poster_path} title={original_title} movie={movie} />
        </div>
    )
};

export { MoviesListCard }