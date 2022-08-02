import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { moviesService } from "../../services";

const initialState = {
    movies: []
};

const getAll = createAsyncThunk(
    "moviesSlice/getAll",
    async () => {
        const { data } = await moviesService.getAll();
        return data.results;
    }
);


const movieSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
    }
});

const { reducer: moviesReducer, actions: { } } = movieSlice;

const moviesActions = {
    getAll

};
export { moviesReducer, moviesActions }

