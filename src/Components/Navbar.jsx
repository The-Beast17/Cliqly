// import React from 'react'
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   const allUsers = useSelector((state)=> state.allUsers.users); //user_id ,profile_img,userName ,email,posts,follower , following , bio
//   const loginUserId = useSelector((state)=> state.allUsers.LoginUserId)
//   const data =  allUsers.filter((user)=> user.user_id === loginUserId)[0] || [];


//   return (
//    <nav className='w-[20%] h-screen bg-zinc-800 text-white p-5 text-center'>
//        <h1 className='text-3xl font-[cursive] tracking-[10px] font-bold mb-4 mt-6'>Trendly</h1>
//        <hr className='mb-10 h-[1px] w-full text-green-500' />

//       <NavLink to={`/Profile/${loginUserId}`} style={(e)=> e.isActive ? {color : 'green'} : {}} className={`text-xl flex gap-3 pl-5 py-5 border-b-[1px] border-zinc-600`}>
//       <div className='h-7 w-7 rounded-full bg-white overflow-hidden '>
//         <img src={data.profile_img}
//          className='h-full w-full object-fit object-cover object-center '/>
//       </div>
//        Profile</NavLink>

//       <NavLink to="/" style={(e)=> e.isActive ? {color : 'green'} : {}} className={`text-xl flex gap-6 pl-5 py-5 border-b-[1px] border-zinc-600`}><i className="ri-home-4-line"></i> Home</NavLink>
//       <NavLink to="/AddPost" style={(e)=> e.isActive ? {color : 'green'} : {}}  className={`text-xl flex gap-6 pl-5 py-5 border-b-[1px] border-zinc-600`}><i className="ri-add-large-fill"></i> Add Post</NavLink>
//       {/* <NavLink to="/Story" style={(e)=> e.isActive ? {color : 'green'} : {}} className={`text-xl flex gap-6 pl-5 py-5 border-b-[1px] border-zinc-600`}><i className="ri-arrow-right-fill"></i> Explore</NavLink> */}
//       {/* <NavLink to="/logout" style={(e)=> e.isActive ? {color : 'green'} : {}} className={`text-xl flex gap-6 pl-5 py-5 border-b-[1px] border-zinc-600`}><i className="ri-home-4-line"></i> Logout</NavLink> */}
//    </nav>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const allUsers = useSelector((state) => state.allUsers.users);
  const loginUserId = useSelector((state) => state.allUsers.LoginUserId);
  const data = allUsers.find((user) => user.user_id === loginUserId) || {};
  const [isSearchOpen, setisSearchOpen] = useState(false)

  return (
    <nav className="w-full md:w-[20%]  md:h-screen  bg-zinc-800 text-white p-5 flex flex-col md:items-start fixed md:relative top-0 left-0 z-50">
      <h1 className='text-3xl font-[cursive] tracking-[10px] font-bold mb-4 mt-6 hidden md:block'>Trendly</h1>
      <div className="items-center gap-3 hidden md:inline-block max-h-screen">
        <Search/>
      </div>
      {/* Navbar Header (For Mobile) */}
      <div className="flex justify-between items-center w-full md:hidden">
        <h1 className=" logo text-2xl font-[cursive] tracking-[10px] font-bold">Trendly</h1>

        <button className={`${isSearchOpen ? 'bg-green-500' : 'bg-white'} px-2 py-1  rounded-full`} onClick={() => setisSearchOpen(!isSearchOpen)}>
          <i className="ri-search-2-line text-md font-bold text-black"></i>
        </button>

        {/* Search Bar in Navbar (Only in Mobile View) */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl p-2 focus:outline-none">
          {isMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      <div className={`flex items-center gap-3 ${isSearchOpen ? 'block' : 'hidden'} md:hidden`}>
        <Search  setisSearchOpen={setisSearchOpen} setIsMenuOpen={setIsMenuOpen}/>
      </div>



      {/* Horizontal Line */}
      <hr className="mb-5 h-[1px] w-full text-green-500 hidden md:block" />

      {/* Navigation Links */}
      <div className={`flex flex-col items-start w-full ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <NavLink onClick={() => setIsMenuOpen(false)}
         to={`/Profile/${loginUserId}`} 
        style={(e)=> e.isActive ? {color : 'green'} : {}}
        className="text-xl flex items-center gap-3 px-5 py-3 border-b-[1px] border-zinc-600 w-full">
          <div className="h-7 w-7 rounded-full bg-white overflow-hidden">
            <img src={data.profile_img} className="h-full w-full object-cover" alt="Profile" />
          </div>
          Profile
        </NavLink>

        <NavLink to="/" onClick={() => setIsMenuOpen(false)} style={(e)=> e.isActive ? {color : 'green'} : {}} className="text-xl flex items-center gap-6 px-5 py-3 border-b-[1px] border-zinc-600 w-full">
          <i className="ri-home-4-line"></i> Home
        </NavLink>

        <NavLink to="/AddPost" onClick={() => setIsMenuOpen(false)} style={(e)=> e.isActive ? {color : 'green'} : {}} className="text-xl flex items-center gap-6 px-5 py-3 border-b-[1px] border-zinc-600 w-full">
          <i className="ri-add-large-fill"></i> Add Post
        </NavLink>
      
        {/* <NavLink to="/Story" style={(e)=> e.isActive ? {color : 'green'} : {}} className={`text-xl flex gap-6 pl-5 py-3 border-b-[1px] border-zinc-600`}><i className="ri-arrow-right-fill"></i> Explore</NavLink> 
        <NavLink to="/logout" style={(e)=> e.isActive ? {color : 'green'} : {}} className={`text-xl flex gap-6 pl-5 py-3 border-b-[1px] border-zinc-600`}><i className="ri-home-4-line"></i> Logout</NavLink> */}


      </div>
    </nav>
  );
};

export default Navbar;
