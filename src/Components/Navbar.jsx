import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const allUsers = useSelector((state)=> state.allUsers.users); //user_id ,profile_img,userName ,email,posts,follower , following , bio
  const {loginUserId} = useSelector((state)=> state.myProfileData)
  const data =  allUsers.filter((user)=> user.user_id === loginUserId)[0] || [];


  return (
   <nav className='w-[20%] h-screen bg-zinc-800 text-white p-5 text-center'>
       <h1 className='text-3xl font-[cursive] tracking-[10px] font-bold mb-4 mt-6'>Trendly</h1>
       <hr className='mb-10 h-[1px] w-full text-green-500' />

      <NavLink to={`/Profile/${loginUserId}`} style={(e)=> e.isActive ? {color : 'green'} : {}} className={`text-xl flex gap-3 pl-5 py-5 border-b-[1px] border-zinc-600`}>
      <div className='h-7 w-7 rounded-full bg-white overflow-hidden '>
        <img src={data.profile_img}
         className='h-full w-full object-fit object-cover object-center '/>
      </div>
       Profile</NavLink>

      <NavLink to="/" style={(e)=> e.isActive ? {color : 'green'} : {}} className={`text-xl flex gap-6 pl-5 py-5 border-b-[1px] border-zinc-600`}><i className="ri-home-4-line"></i> Home</NavLink>
      <NavLink to="/AddPost" style={(e)=> e.isActive ? {color : 'green'} : {}}  className={`text-xl flex gap-6 pl-5 py-5 border-b-[1px] border-zinc-600`}><i className="ri-add-large-fill"></i> Add Post</NavLink>
      <NavLink to="/Story" style={(e)=> e.isActive ? {color : 'green'} : {}} className={`text-xl flex gap-6 pl-5 py-5 border-b-[1px] border-zinc-600`}><i className="ri-arrow-right-fill"></i> Explore</NavLink>
      <NavLink to="/dkfj" style={(e)=> e.isActive ? {color : 'green'} : {}} className={`text-xl flex gap-6 pl-5 py-5 border-b-[1px] border-zinc-600`}><i className="ri-home-4-line"></i> Logout</NavLink>
   </nav>
  )
}

export default Navbar