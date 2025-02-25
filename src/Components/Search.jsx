import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// const Search = () => {
//     const navigate = useNavigate();
//     const [search, setsearch] = useState("")
//     const [searchData, setsearchData] = useState([]);
//     const [noUser, setnoUser] = useState(false);
//     const allUsers = useSelector((state) => state.allUsers.users);
//     const userData = allUsers.map(user => user.user_id);

//     const searchHandler = (e) => {
//         const query = e.target.value;
//         setsearch(e.target.value);
//         const data = allUsers.filter(u => u.user_id.includes(query.toLocaleLowerCase()))
//         setsearchData(data)
//         if (query.trim().length === 0) {
//             setnoUser(false);
//             setsearchData([]);
//         }
//         if (searchData) setnoUser(false);
//     }

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (userData.includes(search.toLocaleLowerCase())) {
//             setnoUser(false)
//             navigate(`/Profile/${search}`)
//         } else {
//             setnoUser(true);
//         }
//         setsearchData([]);
//     }

//     return (
//         <div className='z-5 sticky top-0  w-full  py-5 px-25 bg-black  '>
//             <form className='border border-white flex rounded-[25px] overflow-hidden w-full'
//                 onSubmit={submitHandler}>
//                 <input type="text" placeholder='Search'
//                     className='outline-none w-full px-5 text-zinc-400'
//                     value={search}
//                     onChange={searchHandler}
//                 />
//                 <button className='px-4 py-2 bg-white overflow-hidden'>
//                     <i className="ri-search-2-line text-xl font-bold text-black"></i>
//                 </button>
//             </form>

//             <div className='w-full mt-3'>
//                 <ul>
//                     {noUser && <div className='bg-zinc-600 py-2 px-2 mb-1 w-full text-center'> no user</div>}
//                     {searchData.map((user, i) => {
//                         return (
//                             <div key={i}  onClick={(e) => (setsearch(user.user_id), setsearchData([]))}
//                             className='bg-zinc-700 py-2 px-2 mb-1 w-full flex items-center gap-6'>
//                                 <div className='h-7 w-7 border rounded-full overflow-hidden'>
//                                     <img src={user.profile_img} className='object-fit'/>
//                                 </div>
//                                 <li>{user.user_id}</li>
//                             </div>
//                         )
//                     })}
//                 </ul>
//             </div>
//         </div>

//     )
// }

// export default Search

const Search = ({setisSearchOpen , setIsMenuOpen}) => {

  const navigate = useNavigate();
  const [search, setsearch] = useState("");
  const [searchData, setsearchData] = useState([]);
  const [noUser, setnoUser] = useState(false);
  const allUsers = useSelector((state) => state.allUsers.users);
   const loginUserId = useSelector((state) => state.allUsers.LoginUserId);
  

  const searchHandler = (e) => {
      const query = e.target.value;
      setsearch(query);
      const data = allUsers.filter((u) => u.user_id.includes(query.toLowerCase()) && u.user_id !== loginUserId);
      setsearchData(data);
      if (query.trim().length === 0) {
          setnoUser(false);
          setsearchData([]);
      }
      if (searchData) setnoUser(false);
  };

  const SearchClickHandler = (id) =>{
    setsearch(id)
    setsearchData([])
    navigate(`/Profile/${id}`)
    setisSearchOpen(false);   
    setIsMenuOpen(false);
  }

  const submitHandler = (e) => {
      e.preventDefault();
      if (allUsers.some((user) => user.user_id === search.toLowerCase())) {
          setnoUser(false);
          navigate(`/Profile/${search}`);
          setisSearchOpen(false);   
          setIsMenuOpen(false);
      } else {
          setnoUser(true);
      }
      setsearchData([]);    
  };

  return (
      <div className="w-full py-5 z-50 transition-all duration-300 ">
         <div className='relative w-full '>
          <form className="border border-white flex rounded-[25px] overflow-hidden w-full" onSubmit={submitHandler}>
              <input
                  type="text"
                  placeholder="Search"
                  className="outline-none w-full px-5 text-zinc-400"
                  value={search}
                  onChange={searchHandler}
              />
              <button className="px-4 py-2 bg-white">
                  <i className="ri-search-2-line text-xl font-bold text-black"></i>
              </button>
          </form>

          <div className="w-full mt-3 overflow-y-scroll max-h-[15rem] absolute bg-black">
              <ul>
                  {noUser && <div className="bg-zinc-600 py-2 px-2 mb-1 w-full text-center">No user</div>}
                  {searchData.map((user, i) => (
                      <div
                          key={i}
                          onClick={() => SearchClickHandler(user.user_id) }
                          className="bg-zinc-700 py-2 px-2 mb-1 w-full flex items-center gap-6"
                      >
                          <div className="h-7 w-7 border rounded-full overflow-hidden">
                              <img src={user.profile_img} className="object-cover" />
                          </div>
                          <li>{user.user_id}</li>
                      </div>
                  ))}
              </ul>
          </div>
          </div>
      </div>
  );
};

export default Search;
