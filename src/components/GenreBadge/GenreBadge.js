import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { urls } from "../../constants/urls";
import { genresActions, genresReducer } from "../../redux";
import { axiosService } from "../../services";

const GenreBadge = ({ genresIds }) => {

    const { genres } = useSelector(state => state.genresReducer);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(genresActions.getAll());
        



        // const {data} = await axiosService.get(urls.genres, {
        //     params: {
        //         api_key: "153892ef2476182cf4542acf7b04fb32"
        //     }
        // }).then(value => value)
        // console.log(data);
        // return data;

        // getGenres()
    }, [dispatch]);

    // console.log(genres);
    return (
        <div>
            badge
        </div>
    )
};
export { GenreBadge }