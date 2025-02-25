// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import Comments from './Comments';
// import  {likeIncrement , likeDecrement} from './store/Reducers/AllusersSlice'
// import { Link } from 'react-router-dom';

// const Post = ({post ,  onCommentClick}) => {
//     const dispatch =  useDispatch()
//     const allUsers = useSelector((state)=> state.allUsers.users);
//     const likedPost = useSelector(state => state.allUsers.likedPost);
 
//     const [isLike, setisLike] = useState(likedPost.includes(post.postId));
    
//     useEffect(()=>{
//         setisLike(likedPost.includes(post.postId))
//     },[likedPost,post])

//     let profileImg = ""
//     allUsers.forEach(user => {
//         if(post.profile_id === user.user_id){
//             profileImg =  user.profile_img;
//         }
//     });

//     const likeHandler= ()=>{
//         if(!isLike){
//            dispatch(likeIncrement([post.postId , post.profile_id]))
//            setisLike(true)
        
//         }else{
//            dispatch(likeDecrement([post.postId , post.profile_id]))
//            setisLike(false) 
//         }

        
//     }

//     return (
//         <> 
//         <div className='flex '>
//         <div className='h-[38rem] w-[30rem] bg-white rounded-3xl overflow-hidden mx-auto mt-8 '>
//             <div className='h-[90%] w-full bg-black rounded relative '>
//                 <img src={post.imageUrl}
//                     className='object-fit h-[100%] w-[100%]'
//                 />
//                 <Link to={`/Profile/${post.profile_id}`} className='w-[70%]  absolute bottom-0 px-3 pb-3 flex gap-4 items-center'>
//                     <div className='userProfile h-[2.3rem] w-[2.3rem] bg-amber-300 rounded-full overflow-hidden'>
//                         <img src={profileImg}
//                             className='h-full w-full object-fit object-cover object-center hover:scale-150 duration-200 ease-in'
//                         />
//                     </div>
//                     <h1 className='font-bold text-white'>{post.profile_id}</h1>
//                 </Link>
//             </div>

//             <div className='h-[10%] w-full flex items-center  gap-10 px-5'>
//                 <div className='flex gap-3 items-center'>
//                     <i onClick={() => likeHandler()} className={`${isLike ? "ri-heart-fill text-rose-700" : "ri-heart-line"} text-3xl flex  items-center gap-3`}></i>
//                     <p className='text-lg'>{post.likes}</p>
//                 </div>
                
//                 <div className='flex gap-3 items-center'>
//                     <i className="ri-chat-1-fill text-3xl flex items-center gap-3" onClick={()=>  onCommentClick(post)} ><p className='text-lg'>{post.comments.length}</p></i>
//                     <button className={`px-4 py-1 flex items-center`}><i className="ri-user-follow-fill text-2xl"></i> Follow</button>
//                 </div>
//             </div>
//         </div>
       
//         </div>
//        </>
//     )
// }

// export default Post

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeIncrement, likeDecrement } from './store/Reducers/AllusersSlice';
import { Link } from 'react-router-dom';


const Post = ({ post, onCommentClick }) => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers.users);
  const likedPost = useSelector((state) => state.allUsers.likedPost);

  const [isLike, setIsLike] = useState(likedPost.includes(post.postId));
  useEffect(()=>{

            setIsLike(likedPost.includes(post.postId))
        },[likedPost,post])
    
        let profileImg = ""
        allUsers.forEach(user => {
            if(post.profile_id === user.user_id){
                profileImg =  user.profile_img;
            }
        });
    
        const likeHandler= ()=>{
            if(!isLike){
               dispatch(likeIncrement([post.postId , post.profile_id]))
               setisLike(true)
            
            }else{
               dispatch(likeDecrement([post.postId , post.profile_id]))
               setisLike(false) 
            }
    
            
        }
    

  const handleCommentClick = () => {
    // Toggle the comment sidebar visibility
    onCommentClick(post, true); // Pass true to open the sidebar
  };

  return (
    <div className="flex">
      <div className="h-[38rem] w-[30rem] bg-white rounded-3xl overflow-hidden mx-auto mt-8">
        <div className="h-[90%] w-full bg-black rounded relative">
          <img src={post.imageUrl} className="object-fit h-[100%] w-[100%]" />
          <Link to={`/Profile/${post.profile_id}`} className="w-[70%] absolute bottom-0 px-3 pb-3 flex gap-4 items-center">
            <div className="userProfile h-[2.3rem] w-[2.3rem] bg-amber-300 rounded-full overflow-hidden">
              <img
                src={profileImg}
                className="h-full w-full object-fit object-cover object-center hover:scale-150 duration-200 ease-in"
              />
            </div>
            <h1 className="font-bold text-white">{post.profile_id}</h1>
          </Link>
        </div>

        <div className="h-[10%] w-full flex items-center gap-10 px-5">
          <div className="flex gap-3 items-center">
            <i
              onClick={() => {
                if (!isLike) {
                  dispatch(likeIncrement([post.postId, post.profile_id]));
                  setIsLike(true);
                } else {
                  dispatch(likeDecrement([post.postId, post.profile_id]));
                  setIsLike(false);
                }
              }}
              className={`${isLike ? 'ri-heart-fill text-rose-700' : 'ri-heart-line'} text-3xl flex items-center gap-3`}
            />
            <p className="text-lg">{post.likes}</p>
          </div>

          <div className="flex gap-3 items-center">
            <i
              className="ri-chat-1-fill text-3xl flex items-center gap-3"
              onClick={handleCommentClick}
            >
              <p className="text-lg">{post.comments.length}</p>
            </i>
            <button className={`px-4 py-1 flex items-center`}>
              <i className="ri-user-follow-fill text-2xl"></i> Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
