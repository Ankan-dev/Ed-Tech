import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/NavLogo.png';
import { IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Nav = () => {

  const navigate = useNavigate();
 const [active, setActive] = useState(false);
 const [user,setUser]=useState({});

  const activeOptions = () => {
    setActive(!active);
  };

  const registerLoginRoute = () => {
    navigate('/Register-Login');
  }


  

  return (
    <nav className='w-full h-[7vh] bg-[#f5c79a] shadow-md fixed top-0 flex justify-between z-20'>
      <div className='w-1/5 h-full flex items-center px-5 gap-x-3'>
        <img src={Logo} className='h-[70%]' alt="Logo" />
        <h1 className='text-2xl font-bold text-[#4e1a3e]'>CodeGuru</h1>
      </div>
      <div className='w-1/5 h-full flex items-center justify-center z-10 md:hidden'>
        <IoMenu onClick={activeOptions} className='text-[#4e1a3e] text-5xl cursor-pointer active:scale-75' />
      </div>
      <div className={`absolute w-60 h-[100vh] bg-[#4e1a3e] right-0 shadow-lg transition-transform duration-300 ${active ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className='text-[#f5c79a] px-5 py-4 w-full h-full'>
          <li className='pb-5'>
            <IoClose className='text-3xl cursor-pointer hover:scale-125 ease-in duration-200' onClick={activeOptions} />
          </li>
          <li className='w-full py-3 font-bold text-xl cursor-pointer hover:shadow-2xl'>Home</li>
          <li className='w-full py-3 font-bold text-xl cursor-pointer'>Courses</li>
          <li className='w-full py-3 font-bold text-xl cursor-pointer'>Discussions</li>
          <li className='w-full py-3 font-bold text-xl cursor-pointer'>Others</li>
          <li className='w-full py-3'>
            <button className='border-solid border-[1px] border-[#f5c79a] px-5 py-1 hover:bg-white ease-in duration-200 hover:text-[#4e1a3e]'>Login</button>
          </li>
        </ul>
      </div>

      <div className='hidden md:flex items-center h-full '>
        <ul className='text-[#4e1a3e] px-5  gap-[10px] flex h-full '>
          <li className='font-bold text-xl cursor-pointer h-full py-4 px-3 hover:bg-[#4e1a3e4b] ease-in duration-100'>Home</li>
          <li className='font-bold text-xl cursor-pointer h-full py-4 px-3 hover:bg-[#4e1a3e4b] ease-in duration-100'>Courses</li>
          <li className='font-bold text-xl cursor-pointer h-full py-4 px-3 hover:bg-[#4e1a3e4b] ease-in duration-100'>Discussions</li>
          <li className='font-bold text-xl cursor-pointer h-full py-4 px-3 hover:bg-[#4e1a3e4b] ease-in duration-100'>Others</li>
        </ul>
      </div>
      <div className=' w-1/5  h-full hidden md:flex items-center justify-end px-5'>
        <p></p>
        <img src=''/>

        <button onClick={registerLoginRoute} className='border-solid border-[2px] border-[#4e1a3e] px-7 py-2 hover:bg-white ease-in duration-200  font-semibold active:scale-[0.90]'>Login</button>
      </div>
    </nav>
  );
}

export default Nav;
