import { configureStore } from "@reduxjs/toolkit";
import MyProfileSlice from "./Reducers/Myprofile"
import AllusersSlice from "./Reducers/AllusersSlice"
export const store = configureStore({
    reducer:{
       myProfileData : MyProfileSlice,
       allUsers : AllusersSlice,
    },
})
