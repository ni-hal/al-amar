import React from "react";
import AMARUDDINKHANDIRECTOR from "../assets/AMARUDDIN-KHAN-DIRECTOR.jpg"
const Messages = () => {
  return (
  

    //mobile

    <div className="justify-center bg-white">
  <div className="p-14">
    <div className="grid grid-cols-2 grid-flow-col gap-4">
      <div className="col-span-2 sm:col-span-1 text-justify flex-wrap items-center mt-14">
        <p className="text-justify sm:m-12 text-black" align="center">
          <div className="p-14 -ml-12">
            <h2 className="uppercase transparent tracking-wide text-3xl text-black-400 inline-block text-blue-400">
              Director's Message
            </h2>
            <p className="mt-8 underline-offset-1 underline">
            'Success doesn't come to you...you go it'
            </p>
          </div>
          Very well said by a known author and something that I've always believed in. We weren't a known entity when we started ou Journey in 1983.But today, we are one of the leading Manpower Consultancy firms, overseas. With computerized techniques and highly qualified human resources specialist consultants on board, we have an excellent record of providing appreciable service to Government organizations and reputed companies in the Middle East. We constantly catered to our large clientele with quality and professional services, with offering the best talents in the industry. Our the years, we have continued to grow with outstanding achievements and performances, Particularly in Saudi Arabia and the Middle Eastern countries. With our efficiency and prompt services we ensure you best
        </p>
      </div>
      <div className=" sm:flex relative col-span-2 sm:col-span-1 items-end">
        <div className="absolute hover:scale-110 duration-200 hover:z-10">
          <img
            src={AMARUDDINKHANDIRECTOR}
            className="shadow-lg rounded-lg h-full "
            alt="pic1"
          />
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Messages;
