import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import css from "./PosterPreview.module.css";

const PosterPreview = ({ poster, title, movie }) => {

    const [posterImg, setPosterImg] = useState(null)
    useEffect(() => {
        fetch(`https://image.tmdb.org/t/p/w500${poster}`).then(data => setPosterImg(data.url));
    }, []);

    return (
        <div className={css.poster}>
            <NavLink to={`/movie-info/${movie.id}`} state={{ movie, posterImg }}>
                {posterImg && <img src={posterImg} alt={title} />}
            </NavLink>
            <b>{title}</b>
        </div>
    )
};

export { PosterPreview }
