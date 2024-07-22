import React, { useRef, useState,useEffect } from 'react';
import gsap from 'gsap';

const RegisterLogin = () => {
  const loginOptionRef = useRef(null);
  const registerOptionRef = useRef(null);
  const slider = useRef(null);
  const [loginColor, setLoginColor] = useState('white');
  const [registerColor, setRegisterColor] = useState('#4e1a3e');
  const loginForm = useRef(null);
  const RegisterFrom=useRef(null);

  useEffect(() => {
    gsap.set(RegisterFrom.current, { x: '100%' });
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
      RegisterFrom.current,
      {x:'100%'},
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
      RegisterFrom.current,
      {x:'0%'},
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
            <form className='w-full h-[80%] flex flex-col px-4 items-center'>
              <input type='email' placeholder='email'  className='w-full h-12 outline-none my-4 px-4 border-b-4 bg-transparent border-[#4e1a3e] text-[#4e1a3e]' />
              <input type='password' placeholder='password' className='w-full h-12 outline-none my-4 px-4 border-b-4 bg-transparent border-[#4e1a3e] text-[#4e1a3e]' />
              <button className='border-[2px] border-solid border-[#4e1a3e] w-[50%] h-[10%] md:h-[20%] font-semibold text-xl hover:bg-[#4e1a3e] hover:text-white ease-in duration-200 active:scale-90'>Login</button>
            </form>
          </div>
          <div className='w-full h-[80vh] absolute ' ref={RegisterFrom}>
          <h2 className='font-poppins font-bold text-4xl flex flex-col items-center my-3 md:my-0'>Welcome </h2>
          <form className='w-full h-[80%] flex flex-col px-4 items-center gap-4 '>
            <input placeholder='Full Name' type='text' className='w-[90%] h-10 outline-none border-b-4 bg-transparent border-[#4e1a3e] text-[#4e1a3e]'></input>
            <input placeholder='Email' type='email' className='w-[90%] h-10 outline-none border-b-4 bg-transparent border-[#4e1a3e] text-[#4e1a3e]'></input>
            <input placeholder='Password' type='password' className='w-[90%] h-10 outline-none border-b-4 bg-transparent border-[#4e1a3e] text-[#4e1a3e]'></input>
            <button className='border-[2px] border-solid border-[#4e1a3e] w-[50%] h-[10%]  font-semibold text-xl hover:bg-[#4e1a3e] hover:text-white ease-in duration-200 active:scale-90'>Register</button>
          </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
