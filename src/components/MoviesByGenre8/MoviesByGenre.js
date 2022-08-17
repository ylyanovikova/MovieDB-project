import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

import { moviesService } from "../../services";
import { Loading } from "../Loading/Loading";
import { MoviesListCard } from "../movieCard8/MoviesListCard";
import css from "./MoviesByGenre.module.css";

const MoviesByGenre = () => {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const [query, setQuery] = useSearchParams({ page: 1 });

    useEffect(() => {
        moviesService.getMoviesByGenres(id, { page: query.get('page') }).then(({ data }) => setMovies(data.results));
    }, [id, query]);

    const nextPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        if (queryObj.page < 500) {
            queryObj.page++;
        } else {
            queryObj.page = 1;
        }
        setQuery(queryObj)
    };

    const prevPage = () => {
        const queryObj = Object.fromEntries(query.entries());
        if (queryObj.page > 1) {
            queryObj.page--;
        } else {
            queryObj.page = 500;
        }
        setQuery(queryObj)
    }

    if(movies){
        return (
            <div id="topToGenres">
                <div className={css.movieCards}>
                    {movies.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
                </div>
                <div className={css.navButtons}>
                    <a href="#topToGenres"><button onClick={() => prevPage()}>Previous page</button></a>
                    <a href="#topToGenres"><button onClick={() => nextPage()}>Next page</button></a>
                </div>
            </div>
        )
    }else{
        return(
            <Loading/>
        )
    }
}

export { MoviesByGenre }