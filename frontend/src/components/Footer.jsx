import React from 'react';
import { RiLinkedinBoxLine } from "react-icons/ri";
import { CgInstagram } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

const footer = () => {
    return (
        <div className='w-full min-h-[18vh]  bg-[#f5c79a] md:h-[15vh] pb-3'>
            <div className='md:w-full md:h-20  md:flex md:items-center md:justify-end'>
                <div className='w-full h-12 flex items-center justify-center text-[#4e1a3e] font-semibold'>
                    <p>© 2024 CodeGuru™. All Rights Reserved.</p>
                </div>
                <div className='w-full h-12 flex items-center justify-center text-[#4e1a3e] '>
                    <ul className='flex gap-[20px]'>
                        <li className='hover:font-semibold cursor-pointer hover:underline ease-in duration-75'>CodeGuru</li>
                        <li className='hover:font-semibold cursor-pointer hover:underline ease-in duration-75'> Courses</li>
                        <li className='hover:font-semibold cursor-pointer hover:underline ease-in duration-75'>Discussions</li>
                        <li className='hover:font-semibold cursor-pointer  hover:underline ease-in duration-75'>Others</li>
                    </ul>
                </div>
            </div>
            <div className='w-full h-14 md:h-8'>
                <ul className='flex text-3xl items-center justify-center gap-[5vw] w-full h-full text-[#4e1a3e] cursor-pointer'>
                    <li><RiLinkedinBoxLine className='text-4xl hover:scale-125 ease-in duration-100' /></li>
                    <li><CgInstagram className='hover:scale-125 ease-in duration-100'/></li>
                    <li><FaXTwitter className='hover:scale-125 ease-in duration-100'/></li>
                    <li><VscGithub className='hover:scale-125 ease-in duration-100'/></li>
                </ul>
            </div>
            
        </div>
    )
}

export default footer