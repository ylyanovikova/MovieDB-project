import { useSelector } from "react-redux";

import css from "./SearchList.module.css";
import { MoviesListCard } from "../../components";

const SearchList = () => {
    const { searchResults } = useSelector(state => state.moviesReducer);

    return (
        <div className={css.movieCards}>
            {searchResults && searchResults.map(movie => <MoviesListCard key={movie.id} movie={movie} />)}
        </div>
    )
}
export { SearchList }
