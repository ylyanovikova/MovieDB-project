import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { current } from "@reduxjs/toolkit";

import { moviesService } from "../../services";

const initialState = {
    movies: [],
    searchResults: [],
    movieById: null,
    popular: []
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

// const addResults = createAsyncThunk(
//     "moviesSlice/addResults",
//     async ({ movies }) => {
//         const data = { movies };
//         return data
//     }
// )

const getPopularMovies = createAsyncThunk(
    "moviesSlice/getPopularMovies",
    async () => {
        const { data } = await moviesService.getPopularMovies();
        return data.results
    }
)

const movieSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        addResults: (state, action)=>{
            state.searchResults = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            // .addCase(addResults.fulfilled, (state, action) => {
            //     state.searchResults = action.payload.movies;
            // })
            .addCase(getById.fulfilled, (state, action) => {
                state.movieById = action.payload
            })
            .addCase(getPopularMovies.fulfilled, (state, action) => {
                state.popular = action.payload;
            })
    }
});

const { reducer: moviesReducer, actions: {addResults} } = movieSlice;

const moviesActions = {
    getAll,
    addResults,
    getById,
    getPopularMovies
};
export { moviesReducer, moviesActions }

