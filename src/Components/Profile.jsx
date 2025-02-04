import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Profile = () => {
    const [ShowSinglePost, setShowSinglePost] = useState(true)
    const [postData, setpostData] = useState(null)
    const navigate = useNavigate();
    const {profile_id ,profile_img,userName ,email,posts,follower , following , bio } = useSelector((state)=> state.myProfileData.data);

    const ShowPostHandler = (p)=>{
        console.log("click" , p)
        setpostData(p);
        setShowSinglePost(true);
        console.log(ShowSinglePost)
    }
    return (

        <div className='w-[80%] absolute right-0 h-screen bg-zinc-900 py-10 px-12 overflow-hidden overflow-y-scroll '>
            <h1 className='text-white font-extrabold text-xl mb-10  bg-green-600 px-6 py-2 inline-block rounded-[25px]'>{profile_id}</h1>
            <div className='w-full flex justify-around'>
                <div className='text-center'>
                    <div className='border border-white border-4 h-[15rem] w-[15rem]  rounded-full overflow-hidden'>
                        <img src={profile_img}
                            className='h-full w-full object-fit object-cover object-center hover:scale-150 duration-200 ease-in'
                        />
                    </div>
                    {/* <button className='px-5 py-2 bg-amber-50 rounded mt-5 text-center'>Follow</button> */}
                </div>

                <div className='w-[60%] h-[15rem] p-5 pt-10'>
                    <h1 className='text-white font-bold text-xl'>{userName}</h1>
                    <h1 className='text-zinc-400 text-lg mt-3'>{email}</h1>
                    <div></div>
                    <div className='flex gap-28 mt-8'>
                        <div className='text-white text-center'>
                            <h1 className='font-bold text-xl'>{posts.length}</h1>
                            <h2 className='text-2xl font-bold'>Post</h2>
                        </div>
                        <div className='text-white text-center'>
                            <h1 className='font-bold text-xl'>{follower.length}</h1>
                            <h2 className='text-2xl font-bold'>follower</h2>
                        </div>
                        <div className='text-white text-center'>
                            <h1 className='font-bold text-xl'>{following.length}</h1>
                            <h2 className='text-2xl font-bold'>following</h2>
                        </div>
                    </div>
                </div>
            </div>

            <p className='text-white pr-50 mt-7'>{bio}</p>
            <button className='px-10 py-2  bg-amber-50 rounded mt-5 mr-10 hover:bg-amber-100 '> <i className="ri-user-follow-fill text-lg"></i> Follow</button>
            <button className='px-10 py-2  border border-white rounded mt-5 mr-10 text-white '><i className="ri-pencil-line text-lg "></i> Edit</button>
            <button onClick={()=>navigate("/AddPost")} className='px-10 py-2  rounded mt-5 text-white bg-green-500 hover:bg-green-700'> + Add New Post</button>
            <hr className="mt-6 h-[1.2px] bg-zinc-200" />


            {/* /*******************posts ************ */}
            <div className='w-full p-5 bg-zinc-900 grid grid-cols-4 gap-4'>

                {posts.map((p, i) => {
                    return (
                        <button onClick={()=> ShowPostHandler(p)}
                         key={i} className='w-full bg-black rounded-[15px] overflow-hidden'>
                            <img src={p.imageUrl}
                                className='object-fit h-[100%] w-[100%]'
                            />
                        </button>
                        )
                })}
            </div>
            
                {<Outlet />}
            
        </div>
    )
}

export default Profile