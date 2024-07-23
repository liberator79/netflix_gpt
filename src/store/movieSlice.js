import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : "movie",
    initialState : {
        nowPlayingMovies : null, 
        trailerId : null,
        TrendingMovies:null,
        PopularMovies:null,
        TopRatedMovies : null,
        UpcomingMovies : null,
    },
    reducers : {
        addMovies :(state, action) => {
            const {movieState, data} = action.payload
            state[movieState] = data;

        }
    }
})

export const {addMovies, addTrailerId} = movieSlice.actions

export default movieSlice.reducer