import React, { useState,useRef } from 'react'
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { useNavigate } from 'react-router-dom';


function crousel() {
    const slides=[
    {
      url:"https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_640.jpg"
    },
    
    {
        url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkoQgPL1AfR9H8ta6NEQBPbvHCUTjxfLl-g&s"
    },
    {
        url:"../public/images/img1.jpg"
    },
    {
        url:"../public/images/img2.jpg"
    }
  ];
  
  const [currentIndex,setCurrentIndex]=useState(0)
  
  
  const navigate = useNavigate();
  
    const handleClick = () => {
      // Navigate to the main screen (adjust the path as needed)
      navigate('/');
    };
    
  
    
  
    const imgRef = useRef(null)
  
    const handleFullscreen = () => {
      if (imgRef.current.requestFullscreen) {
        imgRef.current.requestFullscreen();
      } else if (imgRef.current.webkitRequestFullscreen) { /* Safari */
        imgRef.current.webkitRequestFullscreen();
      } else if (imgRef.current.msRequestFullscreen) { /* IE11 */
        imgRef.current.msRequestFullscreen();
      }
    
  
  
  }
  
  const prevSlide=()=>{
    const isFirstSlide=currentIndex===0;
    const newIndex=isFirstSlide?slides.length -1:currentIndex-1;
    setCurrentIndex(newIndex)
  }
  const nextSlide=()=>{
    const isLastSlide=currentIndex===slides.length-1;
    const newIndex=isLastSlide?0:currentIndex+1;
    setCurrentIndex(newIndex)
  }
  
    return (
      <>
        <div className='  w-full m-auto py-16 px-4 relative snap-none bg-slate-300 '>
        <h1 className='font-bold flex items-center justify-center text-4xl'>Welcome to Nature</h1>
        
          <div>
          <div  className='flex items-center justify-center max-w-screen-sm h-96 mx-auto  mt-20 rounded-2xl  bg-center bg-cover duration-500 '>
          <img
          ref={imgRef}
          style={{backgroundImage:`url(${slides[currentIndex].url})`}}
          // replace with your image URL
          
          className="bg-center bg-cover  w-full h-full bg-no-repeat"
        />
          </div>
          {/*Left Arrow */}
            <div className='  absolute top-[60%]  md:top-[55%] -translate-x-0 translate-y-[-50%] md:left-80 text-2xl rounded-full  p-2 bg-black/20 left-5 text-white bg-black cursor-pointer '>
              <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>
  
          {/*Right Arrow */}
          <div className='absolute top-[60%] -translate-x-0 md:top-[55%] translate-y-[-50%] md:right-80 right-5 text-2xl rounded-full  p-2 bg-black/20 text-white bg-black cursor-pointer '>
            <BsChevronRight onClick={nextSlide} size={30}/>
          </div>
          <div className='flex items-center justify-center'>
      <button onClick={handleFullscreen} className='bg-blue-600 text-white p-4 font-bold rounded-md justify-center flex mt-10 hover:-translate-y-2 hover:bg-blue-800'>
        Full-Screen
      </button>
      <div className="absolute top-4 right-4">
          <button onClick={handleClick} className="text-red-600 hover:text-red-800 focus:outline-none hidden">
            <ImCross size={24} />
          </button>
        </div>
      </div>
        </div>
        
        </div>
  
  
  
  
      </>
    )
  }

export default crousel
