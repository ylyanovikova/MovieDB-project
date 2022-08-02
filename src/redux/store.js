import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/movies.slice";

const rootReducer = combineReducers({
    moviesReducer,
    genres: null
});

const store = configureStore({
    reducer: rootReducer
});


export default store;