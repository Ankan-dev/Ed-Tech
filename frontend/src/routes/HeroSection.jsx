import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/images/Logo.png';
import gsap from 'gsap';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import About from '../assets/images/About_Image.jpeg';
import Cards from '../components/Cards'
import axios from 'axios';

const HeroSection = () => {
    const logoRef = useRef(null);
    const byLineRef = useRef(null);
    const aboutRef = useRef(null);
    const [category, setcategory] = useState([]);
    const categoryRef=useRef(null);

    let getCategory= async ()=>{
        try{
            let response=await axios.get('/app/category/getCategory');
            let data=response.data.allCategories.slice(0,5);
            console.log(data);
            setcategory(data);
        }catch(error){
            console.log(error);
        }
        

    }

    useEffect(()=>{
        getCategory();
    },[])

    useEffect(() => {
        console.log('Updated category:', category);
    }, [category]);

    useEffect(() => {
        gsap.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0 },
            { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
            byLineRef.current,
            { opacity: 0, y: '100%' },
            { opacity: 1, y: '0%', duration: 2, ease: 'power3.out' }
        );
    }, [])

    useEffect(() => {
        gsap.fromTo(
            aboutRef.current,
            { opacity: 0, y: '10%' },
            { opacity: 1, y: '0%', duration: 2, ease: 'power3.out' }
        )
    }, [])

    const [text] = useTypewriter({
        words: ["Learn", "Code", "Upskill", "Build Logic"],
        loop: {}
    })

    
    return (
        <>
            <div className="mt-[7vh] w-full h-[60vh] flex items-center justify-center flex-col">
                <div ref={logoRef}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div ref={byLineRef}>
                    <p className='text-xl font-semibold text-[#4e1a3e] font-poppins my-5 md:text-3xl'>You are here to
                        {" "}
                        <span>{text}</span>
                        <span><Cursor /></span>

                    </p>

                </div>
            </div>
            <hr className="w-[90%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <div ref={aboutRef} className='w-full min-h-[60vh]'>
                <h1 className='text-xl font-semibold text-[#4e1a3e] font-poppins  px-16 py-5 md:text-3xl'>About Us</h1>
                <div className='w-full h-[86%] flex flex-col items-center justify-center pb-10 gap-10 md:flex-row '>
                    <div className='w-40 h-52 bg-black md:w-72 md:h-96'>
                        <img src={About} />
                    </div>
                    <p className='font-poppins font-medium w-[70%]  text-xs md:text-justify md:text-xl  '>Our website offers students the opportunity to learn a wide range of coding and engineering skills from top educators across the country, including those from prestigious colleges, universities, and companies. We provide various types of courses, such as free courses, paid courses, and webinars, all at affordable prices without compromising on quality. Our mission is to deliver top-notch education to those who cannot afford expensive courses, ensuring they also have access to excellent opportunities. We emphasize live classes to facilitate proper and direct interaction between educators and students</p>
                </div>
            </div>
            <hr className="w-[90%] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700 " />
            <div className='w-full min-h-[60vh]'>
                <h1 className='text-xl font-semibold text-[#4e1a3e] font-poppins  px-16 py-4 md:text-3xl'>New Categories</h1>
                <div ref={categoryRef} className='w-full min-h-[70%]  flex items-center justify-center gap-5 flex-wrap pb-5'>
                   {
                    category.map((elm,index)=>{
                        return <Cards key={index} category={elm}/>
                    })
                   }
                </div>
            </div>
        </>

    );
};

export default HeroSection;
