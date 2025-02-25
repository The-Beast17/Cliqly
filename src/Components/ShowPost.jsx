import React, { Children, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { likeDecrement, likeIncrement } from './store/Reducers/AllusersSlice'
import Comments from './Comments'
import { addComment } from './store/Reducers/AllusersSlice'
import { Link } from 'react-router-dom'

const ShowPost = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { data } = useParams();
    const postId = data.split(" ")[0];
    const userId = data.split(" ")[1];

    const allUsers = useSelector((state) => state.allUsers.users);
    const user = allUsers.filter((user) => user.user_id === userId)[0];
    const post = user?.posts?.filter((p) => p.postId === postId)[0];
    const likedPost = useSelector(state => state.allUsers.likedPost);
    const [isLike, setisLike] = useState(likedPost.includes(post.postId));

    useEffect(() => {
        setisLike(likedPost.includes(post.postId))
    }, [likedPost, post.postId])

    const likeHandler = () => {
        if (!isLike) {
            dispatch(likeIncrement([post.postId, post.profile_id]))
        } else {
            dispatch(likeDecrement([post.postId, post.profile_id]))
        }
        setisLike(!isLike)
    }

    //comments
      const [comments, setComments] = useState('');
      const [postData, setPostData] = useState(post);
    
      useEffect(() => {
        if (post && allUsers.length) {
          const user = allUsers.filter((user) => user.user_id === userId)[0];
          const post = user?.posts?.filter((p) => p.postId === postId)[0];
          const pData = user.posts.find((p) => p.postId === post.postId);
          setPostData(pData || post);
        }
      }, [post, allUsers]);

       const handleCommentSubmit = (e) => {
          e.preventDefault();
          const { postId, profile_id } = post;
          dispatch(addComment({comments, postId, profile_id}));
          setComments('');
        };

    return (
        <div className='w-full md:w-[80%]   flex items-center flex-col md:flex-row justify-between bg-zinc-900 pl-5 overflow-y-scroll no-scrollbar '>
            <div className='md:w-[70%] w-full h-[95vh] flex items-center justify-center'>
                <div className='h-[95%] md:w-[70%] w-full bg-white rounded-3xl overflow-hidden mt-8'>
                    <div className='h-[90%] w-full bg-black rounded relative '>
                        <img src={post.imageUrl}
                            className='object-fit h-[100%] w-[100%]'
                        />
                        <div className='text-2xl absolute top-5 right-5'
                            onClick={() => navigate(-1)}>
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
            </div>
            {/* <Comments post={post} /> */}

            {/* comment section */}
            <div className='w-full md:w-[30%] '>
                <div
                    className={`h-[100vh] bg-zinc-800 p-4 sm:p-10 overflow-y-scroll no-scrollbar transform transition-transform duration-300 ease-in-out w-full mt-5 `}
                    style={{ zIndex: 1000 }} // Ensure sidebar is above other elements
                >
                
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
                                    <Link to={`/Profile/${cmts.userId}`} className="px-3 pb-3 flex gap-4 items-center">
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
            </div>
            )
}

            export default ShowPost;