import { urls } from "../constants/urls";
import { axiosService } from "./axois.service";

const moviesService = {
    getAll: (page) => axiosService.get(urls.movies, {
        params: {
            page: page
        }
    }),
    getById: (id) => axiosService.get(`${urls.movie}/${id}`
    ),
    getMoviesByGenres: (with_genres, { page }) => axiosService.get(urls.movies, {
        params: {
            sort_by: 'popularity.desc',
            with_genres,
            page
        }
    }),
    getPopularMovies: () => axiosService.get(`${urls.movie}/popular`)
};

export { moviesService };