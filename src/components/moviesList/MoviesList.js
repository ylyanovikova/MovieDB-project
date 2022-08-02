import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {moviesActions} from "../../redux";

const MoviesList = () => {
    const { movies } = useSelector(store => store.moviesReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(moviesActions.getAll());
    },[dispatch])
    return (
        <div>

            
        </div>
    )
};
export { MoviesList }