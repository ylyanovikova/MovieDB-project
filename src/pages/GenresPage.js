import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";

import { Genre } from "../components";
import { genresActions } from "../redux";
import css from "./GenresPage.module.css";

const GenresPage = () => {

    const { genres } = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getAll());
    }, [dispatch]);

    return (
        <div>
            <div className={css.genresStyle}>
                {genres && genres.map(genre => <Genre key={genre.id} genre={genre} />)}
            </div>
            <Outlet />
        </div>
    )
};

export { GenresPage }