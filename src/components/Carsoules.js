import React, { useState, useEffect, useRef } from "react";
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai";



import slide3 from "../assets/slider/slider3.jpg";
import slide4 from "../assets/slider/slider4.jpg";
import slide5 from "../assets/slider/slider5.jpg";

const featuredProducts = [  slide3, slide4, slide5];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  let slideInterval = null;

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);
    startSlider();

    return () => {
      pauseSlider();
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    const nextIndex = (currentIndex + 1) % featuredProducts.length;
    setCurrentIndex(nextIndex);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const prevIndex =
      currentIndex === 0 ? featuredProducts.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div>
  
      
      <div ref={slideRef} className="w-full select-none relative">
        <div className="aspect-w-14 aspect-h-9">
          <img src={featuredProducts[currentIndex]} className="w-full h-1/2 rounded" alt="" />
          
        </div>

        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition "
            onClick={handleOnPrevClick}
          >
            <AiOutlineVerticalRight size={30} />
          </button>
          <button
            className="bg-black text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <AiOutlineVerticalLeft size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
