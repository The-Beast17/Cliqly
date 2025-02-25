// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addComment } from './store/Reducers/AllusersSlice';
// import { Link } from 'react-router-dom';

// const Comments = ({ post }) => {
//     const dispatch = useDispatch();
//     const [userImages, setuserImages] = useState({})
//     const allUsers = useSelector((state) => state.allUsers.users);
//     const [comments, setcomments] = useState("")
//     const [postData, setpostData] = useState(post)
    

//     /**************upadated post lane ke liye */
//     useEffect(() => {
//         if (post && allUsers.length){
//             const user = allUsers.find(u => u.user_id === post.profile_id);
//             const pData = user.posts.find(p => p.postId === post.postId);
//             setpostData(pData || post);
//         }
//     }, [post, allUsers]);



//        //********************user ki image set krnake liye******* */
//     //    useEffect(() => {
//     //     if (postData?.comments?.length) {
//     //         const imagesMap = postData?.comments?.reduce((acc, comment) => {
//     //             const user = allUsers.find(user => user.user_id === comment.user_id);
//     //             if (user) {
//     //                 console.log(user.profile_img)
//     //                 acc[comment.user_id] = user.profile_img || "/default-profile.png";
//     //             }
//     //             return acc;
//     //         }, {});
//     //         setuserImages(imagesMap);
//     //     }
//     // }, [ post ,postData, allUsers]);
    

//     const CommentHandler = (e)=>{
//         e.preventDefault();
//          const {postId , profile_id} = post
//          dispatch(addComment({comments , postId , profile_id}))
//         setcomments("");
//     }

//     return (
//         <div className='h-screen w-[30%] sticky top-0 bg-zinc-800 p-10 overflow-y-scroll scroll-smooth no-scrollbar'>
//         {postData && 
//         <div>
//             <form className='border border-white flex rounded-[25px] overflow-hidden'
//             onSubmit={CommentHandler}>
//                 <input type="text" placeholder='Write Comments'
//                     value = {comments}
//                     onChange={e=>setcomments(e.target.value)}
//                     className='outline-none w-full px-5 text-zinc-400' />
//                 <button className='px-4 py-2 bg-green-500'><i className="ri-send-plane-line text-xl "></i></button>
//             </form>

//             <hr className="my-6 h-[1.2px] bg-zinc-200" />
//             <p className='text-white'>Caption: {post?.caption} </p>
//             <h1 className='text-xl text-white my-4'>Comments</h1>
//             <ul className='w-full bg'>
//                 {postData?.comments.map((cmts, i) => {
//                     const user = allUsers.find(user => user.user_id === cmts.user_id);
//                     return (
//                         <li className='w-full mb-5 bg-zinc-600 px-2 py-3' key={i}>
//                             <Link to={`/Profile/${cmts.user_id}`} className=' px-3 pb-3 flex gap-4 items-center'>
//                                 <div className='userProfile h-[2.3rem] w-[2.3rem] bg-rose-300 rounded-full overflow-hidden'>
//                                     <img src={user?.profile_img}
//                                         className='h-full w-full object-fit object-cover object-center ' />
//                                 </div>
//                                 <h1 className='font-bold text-white'>{cmts.user_id}</h1>
//                             </Link>
//                             <p className='pl-12 text-white'>{cmts.comment}</p>
//                         </li>
//                     )
//                 })}

//             </ul>
//         </div>
//         }
//         </div>
        
//     )

// }

// export default Comments

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from './store/Reducers/AllusersSlice';
import { Link } from 'react-router-dom';

const Comments = ({ post, isOpen, closeComments }) => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers.users);
  const [comments, setComments] = useState('');
  const [postData, setPostData] = useState(post);

  useEffect(() => {
    if (post && allUsers.length) {
      const user = allUsers.find((u) => u.user_id === post.profile_id);
      const pData = user.posts.find((p) => p.postId === post.postId);
      setPostData(pData || post);
    }
  }, [post, allUsers]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const { postId, profile_id } = post;
    dispatch(addComment({ comments, postId, profile_id }));
    setComments('');
  };

  return (
    <>
      {/* Sidebar for larger screens */}
      <div
        className={`h-screen bg-zinc-800 p-4 sm:p-10 overflow-y-scroll no-scrollbar sm:w-[30%]  transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:translate-x-0`}
        style={{ zIndex: 1000 }} // Ensure sidebar is above other elements
      >
        {/* Close button */}
        <button
          onClick={closeComments}
          className="absolute top-5 right-5 text-white text-3xl md:hidden"
          style={{ zIndex: 1001 }} // Ensure close button is on top of sidebar
        >
          <i className="ri-close-fill"></i>
        </button>

        <form className="border border-white flex rounded-[25px] overflow-hidden" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Write Comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="outline-none w-full px-5 text-zinc-400"
          />
          <button className="px-4 py-2 bg-green-500">
            <i className="ri-send-plane-line text-xl "></i>
          </button>
        </form>

        <hr className="my-6 h-[1.2px] bg-zinc-200" />
        <p className="text-white">Caption: {post?.caption}</p>
        <h1 className="text-xl text-white my-4">Comments</h1>
        <ul className="w-full">
          {postData?.comments.map((cmts, i) => {
            const user = allUsers.find((user) => user.user_id === cmts.user_id);
            return (
              <li className="w-full mb-5 bg-zinc-600 px-2 py-3" key={i}>
                <Link to={`/Profile/${cmts.user_id}`} className="px-3 pb-3 flex gap-4 items-center">
                  <div className="userProfile h-[2.3rem] w-[2.3rem] bg-rose-300 rounded-full overflow-hidden">
                    <img src={user?.profile_img} className="h-full w-full object-cover object-center" />
                  </div>
                  <h1 className="font-bold text-white">{cmts.user_id}</h1>
                </Link>
                <p className="pl-12 text-white">{cmts.comment}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Comments Overlay */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-20 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ zIndex: 1000 }} // Ensure mobile overlay is above other elements
      >
        <div className="relative w-full h-full bg-zinc-800 p-4">
          <button
            onClick={closeComments}
            className="absolute top-5 right-5 text-white text-3xl"
            style={{ zIndex: 1001 }} // Ensure close button is on top of sidebar
          >
            <i className="ri-close-fill"></i>
          </button>
          <form className="border border-white flex rounded-[25px] overflow-hidden my-12" onSubmit={handleCommentSubmit}>
            <input
              type="text"
              placeholder="Write Comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="outline-none w-full px-5 text-zinc-400"
            />
            <button className="px-4 py-2 bg-green-500">
              <i className="ri-send-plane-line text-xl "></i>
            </button>
          </form>

          <p className="text-white">Caption: {post?.caption}</p>
          <h1 className="text-xl text-white my-4">Comments</h1>
          <ul className="w-full">
            {postData?.comments.map((cmts, i) => {
              const user = allUsers.find((user) => user.user_id === cmts.user_id);
              return (
                <li className="w-full mb-5 bg-zinc-600 px-2 py-3" key={i}>
                  <Link to={`/Profile/${cmts.user_id}`} className="px-3 pb-3 flex gap-4 items-center">
                    <div className="userProfile h-[2.3rem] w-[2.3rem] bg-rose-300 rounded-full overflow-hidden">
                      <img src={user?.profile_img} className="h-full w-full object-cover object-center" />
                    </div>
                    <h1 className="font-bold text-white">{cmts.user_id}</h1>
                  </Link>
                  <p className="pl-12 text-white">{cmts.comment}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Comments;
