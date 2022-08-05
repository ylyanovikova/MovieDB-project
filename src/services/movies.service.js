import { urls } from "../constants/urls";
import { axiosService } from "./axois.service";

const moviesService = {
    getAll: (page) => axiosService.get(urls.movies, {
        params: {
            page: page,
            api_key: "153892ef2476182cf4542acf7b04fb32"
        }
    }),
    getById: (id) => axiosService.get(`${urls.movie}/${id}`, {
        params: {
            api_key: "153892ef2476182cf4542acf7b04fb32"
        }
    }),
    getMoviesByGenres: (with_genres, {page})=> axiosService.get(urls.movies, {
        params:{
            api_key: "153892ef2476182cf4542acf7b04fb32",
            sort_by: 'popularity.desc',
            with_genres,
            page
        }

    })
};

export { moviesService }