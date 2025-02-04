import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import AddPost from './Components/AddPost'
import ShowPost from './Components/ShowPost'

const App = () => {
  return (
    <div className='flex'>
        <Navbar />
        <Routes>
          <Route path = {"/"} element={<Home />}/>
          <Route path = {"/Profile"} element={<Profile />}>
             <Route path = {"showPost"} element={<ShowPost />}/>
          </Route>
          <Route path = {"/AddPost"} element={<AddPost />}/>
        </Routes>
    </div>
  )
}

export default App