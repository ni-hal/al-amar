import React from "react";
import airticketingserviceimage from "../assets/air_ticketing_service_image.jpg";
import documentattestationserviceimage from "../assets/document_attestation_service_image.jpg";
import passportemigrationserviceimage from "../assets/passport_emigration_service_image.jpg";
import recruitmentserviceimage from "../assets/recruitment_service_image.jpg";
import visaserviceimage from "../assets/visa_service_image.jpg";

const Property = () => {
  return (
    <>
    <div className="text-black font-black uppercase mt-4 flex justify-center text-4xl"> Our Service

    </div>
     <div className="mt-10  ">
      <div class="flex flex-col md:flex-row gap-3 justify-center p-6 text-green-400   ">
         <div className="flex flex-col bg-glass rounded-lg   border border-glass-border  w-full items-center  p-3 backdrop-blur-lg ">
           
             <img
               src={airticketingserviceimage}
               className="  shadow-lg rounded-lg h-full"
               alt="pic1"
             />
              <p className="text-black font-black uppercase mt-4 flex justify-center">air ticketing</p>
          
           
         </div>
         <div className="flex flex-col bg-glass rounded-lg  border border-glass-border backdrop-opacity-50 w-full items-center  p-3 backdrop-blur ">
           <img
             src={documentattestationserviceimage}
             className="  shadow-lg rounded-lg h-full"
             alt="pic2"
           />
           <p className="text-black font-black uppercase mt-4 flex justify-center">Document attestation</p>
         </div>
         <div className="flex flex-col bg-glass rounded-lg  border border-glass-border backdrop-opacity-50 w-full items-center  p-3 backdrop-blur ">
           <img
             src={passportemigrationserviceimage}
             className="  shadow-lg rounded-lg h-full"
             alt="pic3"
           />
            <p className="text-black font-black uppercase mt-4 flex justify-center">passport emigration</p>
         </div>
         <div className="flex flex-col bg-glass rounded-lg  border border-glass-border backdrop-opacity-50 w-full items-center  p-3 backdrop-blur ">
           <img
             src={recruitmentserviceimage}
            className="  shadow-lg rounded-lg h-full"
             alt="pic4"
           />
            <p className="text-black font-black uppercase mt-4 flex justify-center">recruitment overseas</p>
         </div>

       <div className="flex flex-col bg-glass rounded-lg  border border-glass-border backdrop-opacity-50 w-full items-center  p-3 backdrop-blur ">
           <img
            src={visaserviceimage}
             className="  shadow-lg rounded-lg h-full"
             alt="pic5"
          />
          <p className="text-black font-black uppercase mt-4 flex justify-center">visa service</p>
         </div>
       </div>
     </div>


</>
  );
};

export default Property;
