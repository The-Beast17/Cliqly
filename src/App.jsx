import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import AddPost from './Components/AddPost'
import ShowPost from './Components/ShowPost'
import {users} from './fakedata';

const App = () => {
   localStorage.setItem("allUsers", JSON.stringify(users));
  //  localStorage.setItem("LikedPost", JSON.stringify([]));
  return (
    <div className='flex'>
        <Navbar />
        <Routes>
          <Route path = {"/"} element={<Home />}/>
          <Route path = {"/Profile/:userId"} element={<Profile />} />
          <Route path = {"/showPost/:data"} element={<ShowPost />}/>
          <Route path = {"/AddPost"} element={<AddPost />}/>
        </Routes>
    </div>
  )
}

export default App