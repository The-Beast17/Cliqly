import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import AddPost from './Components/AddPost'
import ShowPost from './Components/ShowPost'
import {users} from './fakedata';
import EditProfile from './Components/EditProfile'
import Following from './Components/Following'

const App = () => {
   localStorage.setItem("allUsers", JSON.stringify(users));
  //  localStorage.setItem("LikedPost", JSON.stringify([]));
  return (
    <div className='flex w-full h-screen  overflow-hidden pt-20 md:pt-0'>
        <Navbar />
        <Routes>
          <Route path = {"/"} element={<Home />}/>
          <Route path = {"/Profile/:userId"} element={<Profile />} />
          <Route path = {"/editProfile"} element={<EditProfile />} />
          <Route path = {"/showPost/:data"} element={<ShowPost />}/>
          <Route path = {"/following"} element={<Following />}/>
          <Route path = {"/AddPost"} element={<AddPost />}/>
        </Routes>
    </div>
  )
}

export default App