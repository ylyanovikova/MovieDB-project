import { useSelector } from "react-redux";
import css from "./SearchList.module.css";

const SearchList = ()=>{
    const {searchResults} = useSelector(state=> state.moviesReducer);
    
    return(
        <div>
            {searchResults && searchResults.map(movie=>
                <div key={movie.id}>
                    {movie.name}
                </div>
                )}
        </div>
    )
}
export {SearchList}