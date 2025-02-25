// import React, { useEffect, useState } from 'react'
// import Post from './Post'
// import Comments from './Comments'
// import { useSelector } from 'react-redux';
// import Search from './Search';

// const Home = () => {
//   const [selectedPost, setselectedPost] = useState(null)
//   const allUsers = useSelector((state)=> state.allUsers.users);
//    const loginUserId = useSelector((state)=> state.allUsers.LoginUserId);

//   const data = allUsers.find((user) => user.user_id === loginUserId);
  
//   const posts = allUsers.reduce((acc, user) => {
//     if (data.following.includes(user.user_id)) {
//       return acc.concat(user.posts); // ✅ Yeh ab sahi tarike se acc ko update karega
//     }
//     return acc; // ✅ Agar user followed nahi hai, toh acc ko return karo
//   }, []);

//   // overflow-y-scroll no-scrollbar
//   return (
//     <>
  
//       <div className='w-[80%] h-screen absolute right-0  bg-zinc-900 flex'>
//         <div className='w-[70%] h-full overflow-y-scroll no-scrollbar pb-20'>
//           <Search />
//           {posts.map((ele, i) => {
//             return <div key={i}> <Post post={ele} onCommentClick={setselectedPost}/> </div>
//           })}

//         </div>
//         <Comments post={selectedPost} />
//       </div>
//     </>
//   )

// }

// export default Home

import React, { useState } from 'react';
import Post from './Post';
import Comments from './Comments';
import { useSelector } from 'react-redux';
import Search from './Search';

const Home = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const allUsers = useSelector((state) => state.allUsers.users);
  const loginUserId = useSelector((state) => state.allUsers.LoginUserId);

  const data = allUsers.find((user) => user.user_id === loginUserId);

  const posts = allUsers.reduce((acc, user) => {
    if (data.following.includes(user.user_id)) {
      return acc.concat(user.posts);
    }
    return acc;
  }, []);

  const handleCommentClick = (post, isOpen) => {
    setSelectedPost(post);
    setIsCommentOpen(isOpen);
  };

  const closeComments = () => {
    setIsCommentOpen(false);
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-900 flex flex-col lg:flex-row">
        <div className="w-full lg:w-[70%] h-full overflow-y-scroll pb-20  md:px-0 px-10 no-scrollbar">
          {/* Grid for posts */}
          <div className="">
            {posts.map((ele, i) => (
              <div key={i} className="w-full">
                <Post post={ele} onCommentClick={handleCommentClick} />
              </div>
            ))}
          </div>
        </div>

        {/* Comments Sidebar */}
        {selectedPost && (
          <Comments post={selectedPost} isCommentsOpen={isCommentOpen} closeComments={closeComments} />
        )}
      </div>
    </>
  );
};

export default Home;
