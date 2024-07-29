import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from '../features/profileSlice';

const RegisterLogin = () => {

  const loginOptionRef = useRef(null);
  const registerOptionRef = useRef(null);
  const slider = useRef(null);
  const [loginColor, setLoginColor] = useState('white');
  const [registerColor, setRegisterColor] = useState('#4e1a3e');
  const loginForm = useRef(null);
  const registerForm = useRef(null); // Corrected name
  const [data, setData] = useState({}); // Initialized to an empty object
  const [loginData,setLoginData]=useState({});
  let navigation=useNavigate();
  let dispatch=useDispatch();

  const getUser=async ()=>{
    try{
      const res=await axios.get('/app/user/profile')
      if(res){
        return res.data;
      }
    }catch(error){
      console.log(error.message)
    }
    
  }
 
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleLoginInput=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value});
  }


  const handleLoginSubmit= async(e)=>{
    e.preventDefault();
    try{
      let Response=await axios.post('/app/user/login',loginData);
      if(Response.data.success==true){
        const User=await getUser()
        navigation('/');
        dispatch(addUser (User));
      }
    }catch(error){
      console.log(error.message);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await axios.post('/app/user/register', data); // Corrected to send data directly
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    if(registerForm.current){
      gsap.set(registerForm.current, { x: '100%' });
    }
  }, []);

  const openRegisterForm = () => {
    let animation = gsap.timeline();
    animation.fromTo(
      slider.current,
      { x: '0%' },
      { x: '100%', duration: 2, ease: 'power3.out' }
    ).fromTo(
      loginForm.current,
      { x: '0%' },
      { x: '-100%', duration: 2, ease: 'power3.out' },
      '-=2'
    ).fromTo(
      registerForm.current,
      { x: '100%' },
      { x: '0', duration: 2, ease: 'power3.out' },
      '-=2'
    )
    setRegisterColor('white');
    setLoginColor('#4e1a3e');
  };

  const openLoginForm = () => {
    
    let animation = gsap.timeline();
    animation.fromTo(
      slider.current,
      { x: '100%' },
      { x: '0%', duration: 2, ease: 'power3.out' }
    ).fromTo(
      loginForm.current,
      { x: '-100%' },
      { x: '0%', duration: 2, ease: 'power3.out' },
      '-=2'
    ).fromTo(
      registerForm.current,
      { x: '0%' },
      { x: '100%', duration: 2, ease: 'power3.out' },
      '-=2'
    )
    setRegisterColor('#4e1a3e');
    setLoginColor('white');
  };

  return (
    <div className='w-full h-[80vh] mt-[7vh] flex items-center justify-center'>
      <div className='w-full h-full md:w-[30%] md:h-[60%] md:border-[2px] md:border-solid md:border-[#4e1a3e] rounded-3xl overflow-hidden relative'>
        <div className='w-[50%] h-[7%] md:h-[10%] m-auto mt-4 rounded-full border-[2px] border-[#4e1a3e] overflow-hidden relative'>
          <div ref={slider} className='w-[50%] h-full bg-[#4e1a3e] rounded-full absolute left-0'></div>
          <div className='w-full h-full absolute flex items-center justify-between px-[15px] pt-3 md:px-[30px]'>
            <p ref={loginOptionRef} className="font-poppins font-bold ml-2 cursor-pointer" style={{ color: loginColor }} onClick={openLoginForm}>Login</p>
            <p ref={registerOptionRef} className="font-poppins font-bold cursor-pointer" style={{ color: registerColor }} onClick={openRegisterForm}>Register</p>
          </div>
        </div>
        <div className='w-full h-[80%] my-4 flex'>
          <div ref={loginForm} className='w-full h-full'>
            <h2 className='font-poppins font-bold text-4xl flex flex-col items-center'>Welcome Back</h2>
            <form onSubmit={handleLoginSubmit} className='w-full h-[80%] flex flex-col px-4 items-center'>
              <input name='email' onChange={handleLoginInput} type='email' placeholder='email' className='w-full h-12 outline-none my-4 px-4 border-b-4 bg-transparent border-[#4e1a3e] text-[#4e1a3e]' />
              <input name='password' onChange={handleLoginInput} type='password' placeholder='password' className='w-full h-12 outline-none my-4 px-4 border-b-4 bg-transparent border-[#4e1a3e] text-[#4e1a3e]' />
              <button className='border-[2px] border-solid border-[#4e1a3e] w-[50%] h-[10%] md:h-[20%] font-semibold text-xl hover:bg-[#4e1a3e] hover:text-white ease-in duration-200 active:scale-90'>Login</button>
            </form>
          </div>
          <div className='w-full h-[80vh] absolute' ref={registerForm}>
            <h2 className='font-poppins font-bold text-4xl flex flex-col items-center my-3 md:my-0'>Welcome </h2>
            <form onSubmit={handleSubmit} className='w-full h-[80%] flex flex-col px-4 items-center gap-4'>
              <input name='fullname' onChange={handleInput} placeholder='Full Name' type='text' className='w-[90%] h-10 outline-none border-b-4 bg-transparent border-[#4e1a3e] text-[#4e1a3e]'></input>
              <input name='email' onChange={handleInput} placeholder='Email' type='email' className='w-[90%] h-10 outline-none border-b-4 bg-transparent border-[#4e1a3e] text-[#4e1a3e]'></input>
              <input name='password' onChange={handleInput} placeholder='Password' type='password' className='w-[90%] h-10 outline-none border-b-4 bg-transparent border-[#4e1a3e] text-[#4e1a3e]'></input>
              <button className='border-[2px] border-solid border-[#4e1a3e] w-[50%] h-[10%] font-semibold text-xl hover:bg-[#4e1a3e] hover:text-white ease-in duration-200 active:scale-90'>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
