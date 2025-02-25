import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editProfile } from './store/Reducers/AllusersSlice';
import { useNavigate } from 'react-router-dom';
const EditProfile = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const data = useSelector(state => state.allUsers);
    const loginUserData = data.users.find(u => u.user_id === data.LoginUserId)

    const [fileName, setFileName] = useState("No file chosen");
    const [imgUrl, setimgUrl] = useState(loginUserData.profile_img);
    const [user_id, setuser_id] = useState(loginUserData.user_id);
    const [isUserIdAvailable, setisUserIdAvailable] = useState(true);

    const [userName, setuserName] = useState(loginUserData.userName);
    const [email, setemail] = useState(loginUserData.email);
    const [bio, setbio] = useState(loginUserData.bio);

    
    const submitHandler = (e)=>{
      e.preventDefault();
      if(isUserIdAvailable){
      const newData = {
        user_id ,
        userName,
        email,
        bio,
        profile_img : imgUrl,
        followers : loginUserData.followers,
        following : loginUserData.following,
        posts : loginUserData.posts,
      }
      dispatch(editProfile(newData));
      navigate("/");
     }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFileName(file ? file.name : "No file chosen");

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setimgUrl(e.target.result)
            }
            reader.readAsDataURL(file)
        }
    };

    const userIdHandler = (e) =>{
        const allUsers = data.users;
        const userIds  = allUsers.map(u => u.user_id);
        setuser_id(e.target.value)
        if(e.target.value === data.LoginUserId || !userIds.includes(e.target.value)){
         setisUserIdAvailable(true);  
        }else{
            setisUserIdAvailable(false);
        }
    }
    return (
        <div className='w-[80%] h-screen flex justify-center items-center bg-zinc-900  fixed right-0 top-0 backdrop-blur-2xl'>
            <form className='border border-white w-1/3 p-5 rounded' onSubmit={submitHandler}>
                <h1 className='text-white text-2xl text-center mb-4'>Edit Profile</h1>
                <input type="text" placeholder='User Id'
                    className='px-4 py-2 text-white rounded w-full  border mb-1'
                    value={user_id}
                    onChange={e => userIdHandler(e)}
                    required
                />
                <span className='text-red-500 pb-4'>
                    {isUserIdAvailable ? "" : "userId is not available" }
                </span>

                <input type="text" placeholder='UserName'
                    className='px-4 py-2 text-white rounded w-full  border my-4'
                    value={userName}
                    onChange={e=> setuserName(e.target.value)}
                    required
                />
                <input type="email" placeholder='Enter Email'
                    className='px-4 py-2 text-white rounded w-full  border mb-6'
                    value={email}
                    onChange={e=> setemail(e.target.value)}
                    required
                />

                <input
                    type="file"
                    id="fileUpload"
                    className="hidden"
                    onChange={handleFileChange}
                />
                {/* Custom Button */}
                <div className='mb-5'>
                    <label
                        htmlFor="fileUpload"
                        className="cursor-pointer mb-5 bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
                    >
                        Select File
                    </label>

                    {/* File Name Display */}
                    <span className="text-gray-700 font-medium"> {fileName}</span>
                </div>

                <input type="text" placeholder='bio'
                    className='px-4 py-2 text-white rounded w-full  border mb-4'
                    value={bio}
                    onChange={e=>setbio(e.target.value)}
                />

                <button className='text-center bg-amber-100 w-full py-2 font-bold'> Edit</button>
            </form>
        </div>
    )
}

export default EditProfile