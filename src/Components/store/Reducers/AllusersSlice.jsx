
import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../../fakedata";


const initialState = {
    users : JSON.parse(localStorage.getItem("allUsers")) || [],
    likedPost : JSON.parse(localStorage.getItem("LikedPost")) || [],
    LoginUserId : "vishal_chouhan07",
}


const  AllusersSlice = createSlice({
    name: "AllUsers",
    initialState,
    reducers: {
        addPost : (state , action)=>{
            const post = action.payload; // Payload se user_id aur post extract karo 
            const userIndex = state.users.findIndex(user => user.user_id === post.user_id);
            if (userIndex !== -1) {
                // User ke posts array me naya post add karo
                state.users[userIndex].posts.push(post);
            }
        },

        likeIncrement :(state , action)=>{
            const [postId , profile_id] = action.payload;
            const userIndex = state.users.findIndex(user => user.user_id === profile_id);
            const postIndex = state.users[userIndex].posts.findIndex(post=> post.postId === postId);
            state.users[userIndex].posts[postIndex].likes += 1;
            if (!state.likedPost.includes(postId)) { 
                    state.likedPost = [...state.likedPost, postId]; 
             }
             localStorage.setItem("LikedPost" , JSON.stringify(state.likedPost))  
             localStorage.setItem("allUsers" , JSON.stringify(state.users))              
        },
        likeDecrement :(state , action)=>{
            const [postId , profile_id] = action.payload;
            const userIndex = state.users.findIndex(user => user.user_id === profile_id);
            if (userIndex !== -1) {
                const postIndex = state.users[userIndex].posts.findIndex(post => post.postId === postId);    
                if (postIndex !== -1 && state.likedPost.includes(postId)) {
                    state.users[userIndex].posts[postIndex].likes = Math.max(0, state.users[userIndex].posts[postIndex].likes - 1);
                    state.likedPost = state.likedPost.filter(p => p !== postId);
                }
            }
            localStorage.setItem("LikedPost" , JSON.stringify(state.likedPost));
            localStorage.setItem("allUsers" , JSON.stringify(state.users));
        },

        addComment : (state , action)=>{
          const {comments , postId ,profile_id} = action.payload;
          const userIndex = state.users.findIndex(u => u.user_id === profile_id);
          const postIndex = state.users[userIndex].posts.findIndex(p => p.postId === postId);
          state.users[userIndex].posts[postIndex].comments.push({ user_id: state.LoginUserId, comment: comments})
          localStorage.setItem("allUsers" , JSON.stringify(state.users));
        },

        follow : (state , action)=>{
            const userId = action.payload;
            const loginUserIndex = state.users.findIndex(u => u.user_id === state.LoginUserId);
            state.users[loginUserIndex].following.push(userId);

            //user ki follow list update krna hai
            const userIndex = state.users.findIndex(u => u.user_id === userId);
            state.users[userIndex].followers.push(state.LoginUserId);

            localStorage.setItem("allUsers" , JSON.stringify(state.users));
        },
        unfollow : (state , action)=>{
            const userId = action.payload;
            const loginUserIndex = state.users.findIndex(u => u.user_id === state.LoginUserId);
            state.users[loginUserIndex].following =  state.users[loginUserIndex].following.filter(u=> u !== userId);

            //user ki follower  list update krna hai
            const userIndex = state.users.findIndex(u => u.user_id === userId);
            state.users[userIndex].followers =  state.users[userIndex].followers.filter(u=> u !== state.LoginUserId);

            localStorage.setItem("allUsers" , JSON.stringify(state.users));
        },
    },
})

export const {addPost , likeIncrement , likeDecrement , addComment , follow , unfollow} = AllusersSlice.actions;
export default AllusersSlice.reducer;
