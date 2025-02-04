import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
    data: {
        profile_id: "vishal_chouhan07",
        userName: "Vishal chouhan",
        email: "chouhanvishal883@gmail.com",
        password: "1233456",
        bio : "To anyone that ever told you you're no good... they're no better. — Hayley Williams",
        profile_img: "https://static01.nyt.com/images/2023/05/28/multimedia/28CILLIAN-MURPHY-01-tzqm/28CILLIAN-MURPHY-01-tzqm-superJumbo.jpg",
        follower: [{}, {}, {}],
        following: [{}, {}, {}],
        posts: [
            {
                postId: nanoid(),
                profile_id: "Vishal_chouhan07",
                imageUrl: "https://images.unsplash.com/photo-1684262483735-1101bcb10f0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "this is my cation",
                likes: 0,
                comments: [
                    { userId: "hello_vishal", comment: "nice pic" },
                    { userId: "hello_hardik", comment: "osm" },
                    { userId: "hello_rahul", comment: "great" }
                ],
            }, {
                postId: nanoid(),
                profile_id: "Vishal_chouhan07",
                imageUrl: "https://images.unsplash.com/photo-1738167039036-de7b00545f01?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                caption: "this is my cation",
                likes: 0,
                comments: [
                    { userId: "hello_vishal", comment: "nice pic" },
                    { userId: "hello_hardik", comment: "osm" },
                    { userId: "hello_rahul", comment: "great" }
                ],
            }]
    }
}

const MyprofileSlice = createSlice({
    name: "MyProfile",
    initialState,
    reducers: {

    },
})

export default MyprofileSlice.reducer;