
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import client from "../assets/clients/AL-JERI-112x75.jpg";
import client1 from "../assets/clients/AL-RAJHI-112x75.jpg";
import client2 from "../assets/clients/AL-TAZAJ-112x75.jpg";
import client3 from "../assets/clients/ASSAD-112x75.jpg";
import client4 from "../assets/clients/Al-Jazira-Bank-Logo-86x75.jpg";
import client5 from "../assets/clients/Al-Othaim-logo-design-company-riyadh-90x75.png";
import client6 from "../assets/clients/CLAIRANT-112x75.jpg";
import client7 from "../assets/clients/DEEMAH-112x75.jpg";
import client8 from "../assets/clients/DEFENCE-112x75.jpg";
import client9 from "../assets/clients/ESTECHAB-112x75.jpg";
import client10 from "../assets/clients/I-MAN-112x75.jpg";
import client11 from "../assets/clients/KUDU-112x75.jpg";
import client12 from "../assets/clients/QATAR-112x75.jpg";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const sliderData = [
  client,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
];
const Client = () => {
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    console.log("handleResize", window.innerWidth);
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  console.log("width", dimensions);
  return (
    <div>

    
      <div className="text-black font-black uppercase mt-4 flex justify-center text-4xl"> Our Client

    </div>
   
    <div className="p-10  block  md:flex-row " >
    
     <Swiper
  modules={[Navigation]}
  spaceBetween={30}
  slidesPerView={
    dimensions.width < 640 ? 1 : dimensions.width < 1024 ? 3 : 5
  }
  navigation={dimensions.width <= 768 ? false : true}
  pagination={{ clickable: true }}
  scrollbar={{ draggable: true }}
  loop={true} // Add the loop prop to enable an infinite loop
  onSwiper={(swiper) => console.log(swiper)}
  onSlideChange={() => console.log("slide change")}
>
  {sliderData.map((sliderData, index) => (
    <SwiperSlide key={index}>
      <img
        src={sliderData}
        className="rounded-lg shadow-xl md:hover:scale-110 hover:z-10 duration-100"
        alt="/"
        style={{ width: "100px", height: "100px" }}
      />
    </SwiperSlide>
  ))}
</Swiper>
    </div>
    </div>
  );
};
export default Client



