import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const AddPost = () => {
  const [fileName, setFileName] = useState("No file chosen");
  const [imgUrl, setimgUrl] = useState("");
  const [caption, setcaption] = useState("");
  
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "No file chosen");

    if(file){
      const reader = new FileReader();
      reader.onload = (e)=>{
        setimgUrl(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  };

  const submitHandler = (e)=>{
      e.preventDefault();

    const data = {
      postId : nanoid(),
      userId : "",
      imageUrl : imgUrl,
      caption : caption,
      likes : 0,
      comments : [],
    }


      if(imgUrl){
         navigate("/Profile");
      }
     
  }

  return (
    <form className='h-screen w-[80%] bg-zinc-900 flex justify-center items-center flex flex-col relative'>
      {fileName !== "No file chosen" && !imgUrl && <Loader/>}
      {imgUrl ? <img src={imgUrl} className='w-[50%] h-[65vh] object-fit object-cover object-center'/> : "" }
      <div className='bg-white w-[50%] p-5 text-center flex flex-shrink'>

        <div className="flex items-center gap-10">
          {/* Hidden File Input */}
          <input
            type="file"
            id="fileUpload"
            className="hidden"
            required = {true}
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

      <textarea value={caption} onChange={e=> setcaption(e.target.value)}
      className='mt-5 rounded w-[50%] h-20 text-white border border-white p-5' placeholder='write caption here '></textarea>

      {imgUrl &&
      <button type="submit" onClick={submitHandler}
       className='py-2 px-5 text-xl text-white font-bold bg-green-500 hover:bg-green-700 absolute bottom-10 right-10 rounded'>
       Post</button>
      }
    </form>
  )
}

export default AddPost