import React from "react";
// import { useState } from "react";

// import close from "../assets/close.svg";
// import menu from "../assets/close.svg";

const Navbar = () => {
  // const [toggle, setToggle] = useState(false);

  return (
    <div className=" bg-white">
      <div>
        <div class=" items-center justify-between md:flex gap-8 p-7  text-xl md:mr-28 hidden cursor-pointer scroll-smooth text-black">
          <div class="flex items-center">
            <a href="/" class="text-black mr-4">
              Home
            </a>
            <a href="/" class="text-black  mr-4">
              About us
            </a>
            <a href="/" class="text-black  mr-4">
              Our Services
            </a>
            <a href="/" class="text-black  mr-4">
              Recruitment
            </a>
            <a href="/" class="text-black  mr-4">
              Clientele
            </a>
            <a href="/" class="text-black  mr-4">
              Careers
            </a>
            <a href="/" class="text-black  mr-4">
              Our Gallery
            </a>
            <a href="/" class="text-black  mr-4">
              Contacts Us
            </a>
          </div>
        </div>
      </div>

      {/* m obile*/}
      {/* <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          src={toggle ? close : menu}
          alt="ham"
          className="   object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle ? "flex" : "hidden"}   absolute`}>
          <div className="md:flex gap-8 p-7 uppercase text-xl md:mr-28  cursor-pointer scroll-smooth text-white ">
          <div class="">
            <a href="/" class="text-gray-400 hover:text-white mr-4">
              Home
            </a>
            <a href="/" class="text-gray-400 hover:text-white mr-4">
              About us
            </a>
            <a href="/" class="text-gray-400 hover:text-white mr-4">
              Our Services
            </a>
            <a href="/" class="text-gray-400 hover:text-white mr-4">
              Recruitment
            </a>
            <a href="/" class="text-gray-400 hover:text-white mr-4">
              Clientele
            </a>
            <a href="/" class="text-gray-400 hover:text-white mr-4">
              Careers
            </a>
            <a href="/" class="text-gray-400 hover:text-white mr-4">
              Our Gallery
            </a>
            <a href="/" class="text-gray-400 hover:text-white mr-4">
              Contacts Us
            </a>
          </div>
          
          
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Navbar;
