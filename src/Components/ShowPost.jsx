import React, { useState } from 'react'

const ShowPost = () => {
  const [isLike, setisLike] = useState(false)
  return (
    <div className='w-[80%] h-screen flex justify-center items-center bg-red-500 fixed right-0 top-0'>
         <div className='h-[38rem] w-[30rem] bg-white rounded-3xl overflow-hidden mx-auto mt-8'>
            <div className='h-[90%] w-full bg-black rounded relative '>
                <img src='https://images.unsplash.com/photo-1738363436637-ee6f4a910715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8'
                    className='object-fit h-[100%] w-[100%]'
                />
                <div className='w-[70%]  absolute bottom-0 px-3 pb-3 flex gap-4 items-center'>
                    <div className='userProfile h-[2.3rem] w-[2.3rem] bg-amber-300 rounded-full overflow-hidden'>
                        <img src='https://static01.nyt.com/images/2023/05/28/multimedia/28CILLIAN-MURPHY-01-tzqm/28CILLIAN-MURPHY-01-tzqm-superJumbo.jpg'
                            className='h-full w-full object-fit object-cover object-center hover:scale-150 duration-200 ease-in'
                        />
                    </div>
                    <h1 className='font-bold text-white'>Vishal_chouhan1234</h1>
                </div>
            </div>

            <div className='h-[10%] w-full flex items-center  gap-10 px-5'>
                <div className='flex gap-3 items-center'>
                    <i onClick={() => setisLike(!isLike)} className={`${isLike ? "ri-heart-fill text-rose-700" : "ri-heart-line"} text-3xl flex  items-center gap-3`}></i>
                    <p className='text-lg'>2344</p>
                </div>
                
                <div className='flex gap-3 items-center'>
                    <i className="ri-chat-1-fill text-3xl flex items-center gap-3"><p className='text-lg'>2344</p></i>
                    <button className={`px-4 py-1 flex items-center`}><i className="ri-user-follow-fill text-2xl"></i> Follow</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowPost;