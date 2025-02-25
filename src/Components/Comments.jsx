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
//         <div className='h-screen md:w-[30%] w-full sticky top-0 bg-zinc-800 p-10 overflow-y-scroll scroll-smooth no-scrollbar'>
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
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from './store/Reducers/AllusersSlice';
import { Link } from 'react-router-dom';

const Comments = ({ post, isCommentsOpen, closeComments}) => {
    const dispatch = useDispatch();
    const [userImages, setUserImages] = useState({});
    const allUsers = useSelector((state) => state.allUsers.users);
    const [comments, setComments] = useState("");
    const [postData, setPostData] = useState(post);

    // Fetch updated post data when users change
    useEffect(() => {
        if (post && allUsers.length) {
            const user = allUsers.find(u => u.user_id === post.profile_id);
            const pData = user?.posts.find(p => p.postId === post.postId);
            setPostData(pData || post);
        }
    }, [post, allUsers]);

    const CommentHandler = (e) => {
        e.preventDefault();
        const { postId, profile_id } = post;
        dispatch(addComment({ comments, postId, profile_id }));
        setComments("");
    };

    return (
        <div className={`sticky inset-0 md:relative w-full md:w-[30%] bg-zinc-800 p-6 transition-all duration-300 
            ${isCommentsOpen ? "h-auto opacity-100 visible" : "h-0 opacity-0 invisible"} overflow-y-scroll no-scrollbar`}>
            
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-white text-xl" onClick={closeComments}>
                ✖
            </button>

            {postData && (
                <div>
                    {/* Comment Input */}
                    <form className='border border-white flex rounded-[25px] overflow-hidden mt-10' onSubmit={CommentHandler}>
                        <input type="text" placeholder='Write a comment...'
                            value={comments}
                            onChange={e => setComments(e.target.value)}
                            className='outline-none w-full px-5 text-zinc-400 bg-transparent' />
                        <button className='px-4 py-2 bg-green-500'>
                            <i className="ri-send-plane-line text-xl"></i>
                        </button>
                    </form>

                    <hr className="my-6 h-[1.2px] bg-zinc-200" />
                    
                    <p className='text-white'>Caption: {post?.caption}</p>
                    <h1 className='text-xl text-white my-4'>Comments</h1>

                    <ul className='w-full'>
                        {postData?.comments?.map((cmts, i) => {
                            const user = allUsers.find(user => user.user_id === cmts.user_id);
                            return (
                                <li className='w-full mb-5 bg-zinc-600 px-2 py-3 rounded-md' key={i}>
                                    <Link to={`/Profile/${cmts.user_id}`} className='px-3 pb-3 flex gap-4 items-center'>
                                        <div className='h-[2.3rem] w-[2.3rem] bg-rose-300 rounded-full overflow-hidden'>
                                            <img src={user?.profile_img || "/default-profile.png"} className='h-full w-full object-cover' />
                                        </div>
                                        <h1 className='font-bold text-white'>{user?.userName || "Unknown User"}</h1>
                                    </Link>
                                    <p className='pl-12 text-white'>{cmts.comment}</p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Comments;
