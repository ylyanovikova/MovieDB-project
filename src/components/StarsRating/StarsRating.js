import React from "react";
import ReactStars from "react-rating-stars-component";

import css from "./StarRating.module.css";

const StarRating = ({ average, votes }) => {

    const stars = {
        size: 40,
        count: 5,
        isHalf: false,
        value: 10,
        color: "silver",
        activeColor: "orange"
    };

    return (
        <div className={css.rating}>
            <ReactStars {...stars} />
            <span>{average}</span>
            <span className={css.votes}>({votes})</span>
        </div>
    );
}

export { StarRating }





