import axios from "axios";

import baseURL from "../constants/urls";

const axiosService = axios.create({ baseURL });

axiosService.interceptors.request.use((config) => {
    config.headers.Authorization = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTM4OTJlZjI0NzYxODJjZjQ1NDJhY2Y3YjA0ZmIzMiIsInN1YiI6IjYyZThlYjc0MWJmMjY2MDA1ZGE0M2QzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iM6NfPuEbmU568190dRKTffD-Njq6m79L-L6KjLTAO4";
    return config;
})

export { axiosService }