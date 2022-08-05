import { Outlet } from "react-router-dom";
import { Loading } from "../components";
import { SearchForm } from "../components";
import { MoviesSearchResults } from "../components/MoviesSearchResults/MoviesSearchResults";

const HomePage = () => {
    return (
        <div>
            <SearchForm/>
            {/* <MoviesSearchResults/> */}
            <Outlet/>
        </div>
    )
};

export { HomePage }