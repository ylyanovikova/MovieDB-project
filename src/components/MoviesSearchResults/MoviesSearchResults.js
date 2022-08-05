import css from "./MoviesSearchResults.module.css";
import { MoviesListCard } from "../MovieCard/MoviesListCard";
import { Loading } from "../Loading/Loading";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const MoviesSearchResults = ({movies}) => {

    // const { searchResults} = useSelector(state => state.moviesReducer);
    // console.log('====================================');
    // console.log(searchResults);
    // console.log('====================================');
    // const[movies, setMovies] = useState(searchResults)

    // useEffect(()=>{
    //     if(searchResults){
    //         setMovies(searchResults);
    //         console.log(movies);
    //     }
    // },[searchResults])


    return (
        <div className={css.movieCards}>
            {/* { movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />) : <Loading />} */}
        </div>
    )
};
export { MoviesSearchResults }