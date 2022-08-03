import { useLocation } from "react-router-dom";

const MovieInfo = () => {
    const { state } = useLocation();
    const { movie, posterImg } = state;

    return (
        <div>
            <img src={posterImg} alt={movie.title}/>
        </div>
    )
};
export { MovieInfo }