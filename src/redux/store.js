import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moviesReducer, genresReducer } from "./index";


const rootReducer = combineReducers({
    moviesReducer,
    genresReducer
});

const store = configureStore({
    reducer: rootReducer
});


export default store;