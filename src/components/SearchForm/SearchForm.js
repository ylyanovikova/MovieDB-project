import { useState } from "react";
import { useEffect } from "react";
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

    const [searchValue, setSearchValue] = useState([]);

    const submit = async (value) => {
        await SearchServive.getSearch(value).then(({ data }) => setSearchValue(data.results));
        navigate("/home/searchList");
        reset();
    };

    useEffect(() => {
        searchValue &&
            dispatch(moviesActions.addResults(searchValue));
    }, [searchValue, dispatch, navigate]);

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
