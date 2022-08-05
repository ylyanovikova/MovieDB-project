import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { moviesActions } from "../../redux";
import { moviesService, SearchServive } from "../../services";
import { SearchList } from "../SearchList/SearchList";
import css from "./SearchForm.module.css";

const SearchForm = () => {

    const dispatch = useDispatch();
    const { data } = useSelector(state => state.moviesReducer);
    const navigate = useNavigate();

    const { handleSubmit, register, reset } = useForm();
    let movies = null;

    const submit = async (value) => {
        const data = await SearchServive.getSearch(value.search).then(({ data }) => data.results);
        movies = data;
        dispatch(moviesActions.addResults({movies}))
        navigate("/home/searchList");
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="Search movie" {...register("search")}></input>
                <button>Search</button>
            </form>

        </div>
    )

};

export { SearchForm }