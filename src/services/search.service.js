import { urls } from "../constants/urls";
import { axiosService } from "./axois.service";

const SearchServive = {
    getSearch: ({search}) => axiosService.get(urls.search, {
        params: {
            query: search
        }
    })
}

export { SearchServive }