import React, { useEffect, useState } from 'react'
import Post from './Post'
import Comments from './Comments'
import { useSelector } from 'react-redux';


const Home = () => {
  const [selectedPost, setselectedPost] = useState(null)
  const allUsers = useSelector((state)=> state.allUsers.users);
   const {loginUserId} = useSelector((state)=> state.myProfileData);

  const data = allUsers.find((user) => user.user_id === loginUserId);
  
  const posts = allUsers.reduce((acc, user) => {
    if (data.following.includes(user.user_id)) {
      return acc.concat(user.posts); // ✅ Yeh ab sahi tarike se acc ko update karega
    }
    return acc; // ✅ Agar user followed nahi hai, toh acc ko return karo
  }, []);

  return (
    <>
      <div className='w-[80%] h-screen absolute right-0  bg-zinc-900 flex '>

        <div className='w-[63%]  py-17 px-15 overflow-y-scroll no-scrollbar'>
          <div className='z-5 fixed top-0 left-[20%] w-[50%] bg-black px-20 py-5  '>
            <form className='border border-white flex rounded-[25px] overflow-hidden'>
              <input type="text" placeholder='Search'
                className='outline-none w-full px-5 text-zinc-400' />
              <button className='px-4 py-2 bg-white overflow-hidden'>
                <i className="ri-search-2-line text-xl font-bold text-black"></i>
              </button>
            </form>
          </div>

          {posts.map((ele, i) => {
            return <div key={i}> <Post post={ele} onCommentClick={setselectedPost}/> </div>
          })}
        </div>
        <Comments post={selectedPost} />
      </div>
    </>
  )

}

export default Home