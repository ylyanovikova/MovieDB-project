import { urls } from "../constants/urls";
import { axiosService } from "./axois.service";

const moviesService = {
    getAll: () => axiosService.get(urls.movies, {
        params: {
            api_key: "153892ef2476182cf4542acf7b04fb32"
        }
    }),
    getById: (id) => axiosService.get(`${urls.movies}/${id}`, {
        params: {
            api_key: "153892ef2476182cf4542acf7b04fb32"
        }
    })
};

export { moviesService }