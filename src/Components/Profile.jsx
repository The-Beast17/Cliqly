import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import { follow, unfollow } from './store/Reducers/AllusersSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const navigate = useNavigate();

    const allUsers = useSelector((state) => state.allUsers.users); //user_id ,profile_img,userName ,email,posts,follower , following , bio
    const { loginUserId } = useSelector((state) => state.myProfileData)
    const loginUserData = allUsers.filter((user) => user.user_id === loginUserId)[0] || [];

    const data = allUsers.filter((user) => user.user_id === userId)[0] || [];
    const { user_id, profile_img, userName, email, posts, followers, following, bio } = data;


    const followHandler = ()=>{
        dispatch(follow(userId));
        console.log("followed");
    }

    const unfollowHandler = ()=>{
        dispatch(unfollow(userId));
        console.log("unfollowed");
    }
    return (

        <div className='w-[80%] absolute right-0 h-screen bg-zinc-900 py-10 px-12 overflow-hidden overflow-y-scroll '>
            <h1 className='text-white font-extrabold text-xl mb-10  bg-green-600 px-6 py-2 inline-block rounded-[25px]'>{user_id}</h1>
            <div className='w-full flex justify-around'>
                <div className='text-center'>
                    <div className='border border-white border-4 h-[15rem] w-[15rem]  rounded-full overflow-hidden'>
                        <img src={profile_img}
                            className='h-full w-full object-fit object-cover object-center hover:scale-150 duration-200 ease-in'
                        />
                    </div>

                </div>

                <div className='w-[60%] h-[15rem] p-5 pt-10'>
                    <h1 className='text-white font-bold text-xl'>{userName}</h1>
                    <h1 className='text-zinc-400 text-lg mt-3'>{email}</h1>
                    <div></div>
                    <div className='flex gap-28 mt-8'>
                        <div className='text-white text-center'>
                            <h1 className='font-bold text-xl'>{posts?.length}</h1>
                            <h2 className='text-2xl font-bold'>Post</h2>
                        </div>
                        <div className='text-white text-center'>
                            <h1 className='font-bold text-xl'>{followers?.length}</h1>
                            <h2 className='text-2xl font-bold'>follower</h2>
                        </div>
                        <div className='text-white text-center'>
                            <h1 className='font-bold text-xl'>{following?.length}</h1>
                            <h2 className='text-2xl font-bold'>following</h2>
                        </div>
                    </div>
                </div>
            </div>

            <p className='text-white pr-50 mt-7'>{bio}</p>
            {loginUserId !== userId
                ? loginUserData.following.includes(userId) ? <button onClick={unfollowHandler} className='px-10 py-2  bg-amber-50 rounded mt-5 mr-10 hover:bg-amber-100 '> <i className="ri-user-follow-fill text-lg"></i> following </button> : 
                <button onClick={followHandler} className='px-10 py-2  bg-amber-50 rounded mt-5 mr-10 hover:bg-amber-100 '> <i className="ri-user-follow-fill text-lg"></i> follow</button>  :""
            }
            {loginUserId === userId ?
                <>
                    <button className='px-10 py-2  border border-white rounded mt-5 mr-10 text-white '><i className="ri-pencil-line text-lg "></i> Edit</button>
                    <button onClick={() => navigate("/AddPost")} className='px-10 py-2  rounded mt-5 text-white bg-green-500 hover:bg-green-700'> + Add New Post</button>
                </> : ""
            }
            <hr className="mt-6 h-[1.2px] bg-zinc-200" />


            {/* /*******************posts ************ */}
            <div className='w-full p-5 bg-zinc-900 grid grid-cols-4 gap-4'>

                {posts?.map((p, i) => {
                    return (
                        <Link to={`/showPost/${p.postId} ${p.profile_id}`}
                            key={i} className='w-full bg-black rounded-[15px] overflow-hidden'>
                            <img src={p.imageUrl}
                                className='object-fit h-[100%] w-[100%]'
                            />
                        </Link>
                    )
                })}
            </div>
            <Outlet />

        </div>
    )
}

export default Profile