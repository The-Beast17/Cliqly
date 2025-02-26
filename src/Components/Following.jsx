import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { follow, unfollow } from './store/Reducers/AllusersSlice';

const Following = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {userId} = useParams();
      const allUsers = useSelector((state) => state.allUsers.users);
      const loginUserId = useSelector((state) => state.allUsers.LoginUserId);
    
      const loginUserData = allUsers.find((user) => user.user_id === loginUserId);
      const {following} = loginUserData;
      const data = allUsers.filter((user) => following.includes(user.user_id));

      const [followingData, setfollowingData] = useState(data);

    const handleProfileClick = (userId) => {
        navigate(`/Profile/${userId}`);
    };

    const FollowingHandler = (userId) => {
        if(following.includes(userId)){
            dispatch(unfollow(userId));
        }else{
            dispatch(follow(userId));
        }
   }

    return (
        <div className="w-full px-3 py-10 md:p-10 bg-zinc-900 flex-grow">
            <h2 className="text-2xl font-bold mb-4 text-white text-center">Following</h2>
            <div className="w-full mt-3 overflow-y-scroll  no-scrollbar flex-grow">
                <ul>
                    {followingData.length === 0 && (
                        <div className="bg-zinc-600 py-2 px-2 mb-1 w-full text-center">No following users</div>
                    )}
                    {followingData.map((user, i) => (
                        <div
                            key={i}
                            className="bg-zinc-700 py-2 px-10 mb-3 w-full md:w-[70%] mx-auto flex items-center justify-between cursor-pointer"
                        >
                        <div className='flex items-center gap-6'
                         onClick={() => handleProfileClick(user.user_id)}>
                            <div className="h-10 w-10 border rounded-full overflow-hidden">
                                <img src={user.profile_img} className="object-cover" />
                            </div>
                            <li className='text-white'>{user.user_id}</li>
                        </div>

                        { userId === loginUserId &&
                            <button
                                onClick={(e) => FollowingHandler(user.user_id)}
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                            >
                                {following.includes(user.user_id) ? 'Unfollow' : 'Follow'}
                            </button>
                        }
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Following;