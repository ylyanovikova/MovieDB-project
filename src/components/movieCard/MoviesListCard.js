import { GenreBadge, MovieInfo, PosterPreview, StarsRating } from "../../components";

const MoviesListCard = ({movie})=>{

    const {original_title, genre_ids, poster_path, vote_average} = movie;

    // const poster = movie['poster_path'];
   
    // const posterImage = fetch(`https://image.tmdb.org/t/p/w500/${poster_path}`).then(response=> response.json());
    // console.log(posterImage);
    // console.log(movie);
    return(
        <div>
            <h1>{original_title}</h1>
            <PosterPreview poster={poster_path} title={original_title}/>
            <GenreBadge genres={genre_ids}/>
            <MovieInfo movie={movie}/>
            <StarsRating average={vote_average}/>

        </div>
    )
};

export {MoviesListCard}