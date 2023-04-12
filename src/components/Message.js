import React from 'react'
import logo from "../assets/alamar_only_logo.jpg"

const Message = () => {
  return (
  <div className='mb-9 gap-4'>
    <div class="flex flex-col lg:flex-row items-center gap-4">
  <div class="relative lg:w-1/2 p-3">
    <img
      src={logo}
      class="shadow-lg rounded-lg"
      alt="pic1"
    />
  </div>
  <div class="text-center lg:text-left">
    <h2 class="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">AL-AMAR MANPOWER CONSULTANCY</h2>
    <p class="text-sm lg:text-base">
      It is a great PRIVILEGE to introduce ourselves as one of the LEADING TRAVEL and RECRUITING agents having various Branches in India and Abroad with a number of associate offices across the nation. Over the years AL-AMAR MANPOWER CONSULTANCY has constantly Catered to our Large Clientele with quality and Professional Services, while offering the Best Talents in the Industry. We have continued to Grow with Outstanding Achievements and Performances, particularly in Saudi Arabia and Middle Eastern countries.
    </p>
  </div>
</div>
</div>


  


  )
}

export default Message