import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { likeDecrement, likeIncrement } from './store/Reducers/AllusersSlice'
import Comments from './Comments'

const ShowPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const  {data} = useParams();
    const postId = data.split(" ")[0];
    const userId = data.split(" ")[1];

    const allUsers = useSelector((state)=> state.allUsers.users);
    const user = allUsers.filter((user)=> user.user_id === userId)[0];
    const post = user.posts.filter((p)=> p.postId === postId)[0];
        const likedPost = useSelector(state => state.allUsers.likedPost);
        const [isLike, setisLike] = useState(likedPost.includes(post.postId));
        
        useEffect(()=>{
            setisLike(likedPost.includes(post.postId))
        },[likedPost,post.postId])
   
    const likeHandler= ()=>{
            if(!isLike){
               dispatch(likeIncrement([post.postId , post.profile_id]))
            }else{
               dispatch(likeDecrement([post.postId , post.profile_id])) 
            }
            setisLike(!isLike)
     }
    

    return (
        <div className='w-[80%] h-screen flex justify-center items-center bg-zinc-900  fixed right-0 top-0 backdrop-blur-2xl'>
            <div className='h-[38rem] w-[30rem] bg-white rounded-3xl overflow-hidden mx-auto mt-8 '>
                <div className='h-[90%] w-full bg-black rounded relative '>
                    <img src={post.imageUrl}
                        className='object-fit h-[100%] w-[100%]'
                    />
                    <div className='text-2xl absolute top-5 right-5' 
                      onClick={()=> navigate(-1)}>
                        <i className="ri-close-large-line text-white hover:font-bold"></i>
                    </div>

                    <div className='w-[70%]  absolute bottom-0 px-3 pb-3 flex gap-4 items-center'>
                        <div className='userProfile h-[2.3rem] w-[2.3rem] bg-amber-300 rounded-full overflow-hidden'>
                            <img src={user.profile_img}
                                className='h-full w-full object-fit object-cover object-center hover:scale-150 duration-200 ease-in'
                            />
                        </div>
                        <h1 className='font-bold text-white'>{user.user_id}</h1>
                    </div>
                </div>


                <div className='h-[10%] w-full flex items-center  gap-10 px-5'>
                    <div className='flex gap-3 items-center'>
                        <i onClick={() => likeHandler()} className={`${isLike ? "ri-heart-fill text-rose-700" : "ri-heart-line"} text-3xl flex  items-center gap-3`}></i>
                        <p className='text-lg'>{post.likes}</p>
                    </div>

                    <div className='flex gap-3 items-center'>
                        <i className="ri-chat-1-fill text-3xl flex items-center gap-3"><p className='text-lg'>{post.comments.length}</p></i>
                        <button className={`px-4 py-1 flex items-center`}><i className="ri-user-follow-fill text-2xl"></i> Follow</button>
                    </div>
                </div>
            </div>
          <Comments post={post} />
        </div>
    )
}

export default ShowPost;