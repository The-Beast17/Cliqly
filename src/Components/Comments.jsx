import React from 'react'

const Comments = () => {

    var comments = [1, 2, 3, 4, 45, 6, 6, 7, 8, 8, 9, 9, 0, 0, 0,];
    return (
        <div className='h-screen w-[30%] bg-zinc-800 p-10 overflow-y-scroll scroll-smooth no-scrollbar'>
            <form className='border border-white flex rounded-[25px] overflow-hidden'>
                <input type="text" placeholder='Write Comments'
                    className='outline-none w-full px-5 text-zinc-400' />
                <button className='px-4 py-2 bg-green-500'><i className="ri-send-plane-line text-xl "></i></button>
            </form>

            <hr className="my-6 h-[1.2px] bg-zinc-200" />
            <p className='text-white'>Caption: sksn sdhs ijs sdihis jdsojosj s jskj d sojsjds sdhs ijs sdihis jdsojosj s jskj d sojsjd </p>
            <h1 className='text-xl text-white my-4'>Comments</h1>
            <ul className='w-full bg'>
                {comments.map((cmts, i) => {
                    return (
                        <li className='w-full mb-5 bg-zinc-600 px-2 py-3' key={i}>
                            <div className=' px-3 pb-3 flex gap-4 items-center'>
                                <div className='userProfile h-[2.3rem] w-[2.3rem] bg-rose-300 rounded-full overflow-hidden'>
                                <img src="https://static01.nyt.com/images/2023/05/28/multimedia/28CILLIAN-MURPHY-01-tzqm/28CILLIAN-MURPHY-01-tzqm-superJumbo.jpg"
                                    className='h-full w-full object-fit object-cover object-center '/>
                                </div>
                                <h1 className='font-bold text-white'>Vishal_chouhan1234</h1>
                            </div>
                            <p className='pl-12 text-white'>alkhd shds aij  sid sdjisj sidsjp  sdidjspj  odsjosd odsjjd so</p>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default Comments