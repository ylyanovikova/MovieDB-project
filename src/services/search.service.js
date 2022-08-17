import { urls } from "../constants/urls";
import { axiosService } from "./axois.service";

const SearchServive = {
    getSearch: ({search}) => axiosService.get(urls.search, {
        params: {
            query: search,
            api_key: "153892ef2476182cf4542acf7b04fb32"
        }
    })
}

export { SearchServive }