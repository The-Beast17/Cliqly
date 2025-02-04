import { configureStore } from "@reduxjs/toolkit";
import MyProfileSlice from "./Reducers/Myprofile"
export const store = configureStore({
    reducer:{
       myProfileData : MyProfileSlice,
    },
})
