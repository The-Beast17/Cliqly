import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from './store/Reducers/AllusersSlice';


const AddPost = () => {
  const dispatch = useDispatch()
  const [fileName, setFileName] = useState("No file chosen");
  const [imgUrl, setimgUrl] = useState("");
  const [caption, setcaption] = useState("");
  const loginUserId = useSelector((state) => state.allUsers.LoginUserId);


  const navigate = useNavigate();

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

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      postId: nanoid(),
      profile_id: loginUserId,
      imageUrl: imgUrl,
      caption: caption,
      likes: 0,
      comments: [],
    }

    if (imgUrl) {
      dispatch(addPost(data));
      navigate(`/Profile/${loginUserId}`);
    }

  }

  return (
    <div className='h-screen w-full md:w-[80%] bg-zinc-900 overflow-y-scroll no-scrollbar px-5 py-8'>
      <form className='h-full w-full  flex items-center  flex-col relative mb-5 '>
        {fileName !== "No file chosen" && !imgUrl && <Loader />}
        {imgUrl ? <img src={imgUrl} className='md:w-[50%] w-full md:h-[63vh] h-[30vh] object-fit object-cover object-center' /> : ""}
        <div className='bg-white w-[50%] p-5 text-center  flex flex-shrink md:w-[50%] w-full'>

          <div className="flex flex-wrap items-center gap-10">
            {/* Hidden File Input */}
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              required={true}
              onChange={handleFileChange}
            />

            {/* Custom Button */}
            <label
              htmlFor="fileUpload"
              className="cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Select File
            </label>

            {/* File Name Display */}
            <span className="text-gray-700 font-medium">{fileName}</span>
          </div>
        </div>
        {imgUrl &&
          <div className='w-full flex flex-col items-center'>
            <textarea value={caption} onChange={e => setcaption(e.target.value)}
              className='md:w-[50%] w-full mt-5 rounded h-20 text-white border border-white p-5' placeholder='write caption here '></textarea>

            <button type="submit" onClick={submitHandler}
              className='py-2 md:w-[50%] w-full mt-4 px-5 text-xl text-white font-bold bg-green-500 hover:bg-green-700 rounded'>
              Post</button>
          </div>
        }
      </form>


    </div>
  )
}

export default AddPost