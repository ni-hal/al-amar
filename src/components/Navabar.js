import React from "react";
import logo from "../assets/alamar_only_logo.jpg";
import PhoneEnabledTwoToneIcon from "@mui/icons-material/PhoneEnabledTwoTone";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";

const navabar = () => {
  return (
    <>
    <div class="bg-gray-900 ">
  <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
    <div class="flex items-center mb-4 md:mb-0">
      <img class="h-8 w-auto md:h-10" src={logo} alt="Logo" />
    </div>

    <div class="flex flex-col md:flex-row items-center">
      <div class="text-gray-300 mb-2 md:mb-0 md:mr-6 flex items-center">
        <EmailSharpIcon />
        <a href="mailto:info@example.com" class="text-gray-300 hover:text-white ml-2 md:ml-0">
          info@example.com
        </a>
      </div>


      <div class="text-gray-300 mb-2 md:mb-0 md:mr-6 flex items-center">
        <HomeTwoToneIcon />
        <a href="a" class="text-gray-300 hover:text-white ml-2 md:ml-0">
          adresss
        </a>
      </div>
     

      <div class="text-gray-300 mb-2 md:mb-0 flex items-center">
        <PhoneEnabledTwoToneIcon />
        <a href="tel:+9134567788" class="text-gray-300 hover:text-white ml-2 md:ml-0">
          +91 987 4561 230
        </a>
      </div>
    </div>
  </div>
</div>



  
     </>
    
  );
};

export default navabar;
