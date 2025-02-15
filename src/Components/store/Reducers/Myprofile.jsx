import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    loginUserId : "vishal_chouhan07",
}

const MyprofileSlice = createSlice({
    name: "MyProfile",
    initialState,
    reducers: {
    },
})

export default MyprofileSlice.reducer;