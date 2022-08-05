import { urls } from "../constants/urls";
import { axiosService } from "./axois.service";

const genresService = {
    getAll: () =>
        axiosService.get(urls.genres, {
            params: {
                api_key: "153892ef2476182cf4542acf7b04fb32"
            }
        })
};

export { genresService }