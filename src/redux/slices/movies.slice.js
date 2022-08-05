import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { moviesService } from "../../services";

const initialState = {
    movies: [],
    searchResults: [],
    mov: null
};

const getAll = createAsyncThunk(
    "moviesSlice/getAll",
    async ({ page }) => {
        const { data } = await moviesService.getAll(page);
        return data.results;
    }
);

const getById = createAsyncThunk(
    "moviesSlice/getById",
    async ({ id }) => {
        const { data } = await moviesService.getById(id);
        return data
    }
)

const addResults = createAsyncThunk(
    "moviesSlice/addResults",
    async ({ movies }) => {
        const data = await { movies };
        return data
    }
)

const movieSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(addResults.fulfilled, (state, action) => {
                state.searchResults = action.payload.movies;
            })
            .addCase(getById.fulfilled, (state, action) =>
                state.mov = action.payload
            )
    }
});

const { reducer: moviesReducer, actions: { } } = movieSlice;

const moviesActions = {
    getAll,
    addResults,
    getById

};
export { moviesReducer, moviesActions }

