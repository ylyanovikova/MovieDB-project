import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { genresActions } from "../../redux";
import { Genre } from "../Genre/Genre";
import css from "./GenreBadge.module.css";

const GenreBadge = ({ genresIds }) => {

    const { genres } = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getAll());
    }, [dispatch]);

    const movieGenres = [];
    genresIds.forEach(id => genres.filter((genre) => { if (genre.id === id) { movieGenres.push(genre) } }));

    return (
        <div className={css.badgeContainer}>
            {movieGenres.map(genre => <Genre genre={genre} key={genre.id} />)}
        </div>
    )
};
export { GenreBadge }