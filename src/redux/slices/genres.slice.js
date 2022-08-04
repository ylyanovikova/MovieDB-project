import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urls } from "../../constants/urls";

import { axiosService, genresService } from "../../services";

const initialState = {
    genres: []
};

// const getAll = createAsyncThunk(
//     "genresSlice/getAll",
//     async() => {
//         const data = await axiosService.get(urls.genres,
//             {
//                 params: {
//                     api_key: "153892ef2476182cf4542acf7b04fb32"
//                 }
//             }
//         ).then(({data}) => data.genres);
//         // console.log(data);
//         return data;
//     }
// )

const getAll = createAsyncThunk(
    "genresSlice/getAll",
    async() => {
        const data = await genresService.getAll();
        console.log(data);
    }
)

const genresSlice = createSlice({
    name: "genresSlice",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload;
                // console.log(state.genres);
            })
    }
}
);

const { reducer: genresReducer, actions:{} } = genresSlice;

const genresActions = {
    getAll,

};

export {
    genresReducer,
    genresActions
}