import { useState } from "react";
import { useEffect } from "react";

const PosterPreview = ({ poster, title }) => {

    const [posterImg, setPosterImg] = useState(null)
    useEffect(() => {
        fetch(`https://image.tmdb.org/t/p/w500${poster}`).then(data => setPosterImg(data.url));
    }, []);


    return (
        <div>
            {posterImg && <img src={posterImg} alt={title} />}
        </div>
    )
};

export { PosterPreview }