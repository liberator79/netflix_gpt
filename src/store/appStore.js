import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"
import appReducer from "./appSlice";
const appStore = configureStore({
    reducer : {
        user : userReducer,
        movies : moviesReducer,
        app : appReducer
    },
})

export default appStore