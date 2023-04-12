import React from 'react'
import img from "../assets/AMARUDDIN-KHAN-DIRECTOR.jpg"


const About = () => {
  return (
    <div className=' mt-9'>
<section class=" p-16 gap-12">
  <div class="container mx-auto">
    <div class="flex flex-col lg:flex-row items-center">
      
      <div class="w-full lg:w-1/2 lg:mr-4 mb-4 lg:mb-0">
        <img src={img} alt="pic" class=""/>
      </div>
      <div class="w-full lg:w-1/2">
        <h2 class="text-3xl font-bold mb-4">Director's Message</h2>
        <p class="text-lg lg:text-xl mb-4 text-justify ">Very well said by a known author and something that I've always believed in. We weren't a known entity when we started our journey in 1983. But today, we are one of the leading Manpower Consultancy firms, overseas. With computerized techniques and highly qualified human resources specialist consultants on board, we have an excellent record of providing appreciable services to Government organizations and reputed companies in the Middle East. We constantly catered to our large clientele with quality and professional services, with offering the best talents in the industry. Our the years, we have continued to grow with outstanding achievements and performances, particularly in Saudi Arabia and the Middle Eastern countries. With our efficiency and prompt services, we ensure you get the best.</p>
      </div>
    </div>
  </div>
</section>
    </div>
 
        

  )
}

export default About