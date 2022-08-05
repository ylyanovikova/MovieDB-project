import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { moviesActions } from "../../redux";
import { SearchServive } from "../../services";
import css from "./SearchForm.module.css";

const SearchForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { handleSubmit, register, reset } = useForm();
    let movies = null;

    const submit = async (value) => {
        const data = await SearchServive.getSearch(value.search).then(({ data }) => data.results);
        movies = data;
        dispatch(moviesActions.addResults({ movies }))
        navigate("/home/searchList");
        reset();
    };

    return (
        <div >
            <form onSubmit={handleSubmit(submit)} className={css.form}>
                <div><input type="text" placeholder="Search movie" {...register("search")}></input></div>
                <div><button>Search</button></div>
            </form>
        </div>
    )
};

export { SearchForm }