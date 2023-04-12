
  
import React from 'react'
import client from "../../assets/clients/AL-JERI-112x75.jpg"
 import client1 from "../../assets/clients/AL-RAJHI-112x75.jpg"
 import client2 from "../../assets/clients/AL-TAZAJ-112x75.jpg"
 import client3 from "../../assets/clients/ASSAD-112x75.jpg"
 import client5 from "../../assets/clients/Al-Jazira-Bank-Logo-86x75.jpg"
 import client6 from "../../assets/clients/Al-Othaim-logo-design-company-riyadh-90x75.png"
 import client7 from "../../assets/clients/CLAIRANT-112x75.jpg"
 import client8 from "../../assets/clients/DEEMAH-112x75.jpg"
 import client9 from "../../assets/clients/DEFENCE-112x75.jpg"
 import client10 from "../../assets/clients/ESTECHAB-112x75.jpg"
 import client11 from "../../assets/clients/I-MAN-112x75.jpg"
 import client12 from "../../assets/clients/KUDU-112x75.jpg"
 import client13 from "../../assets/clients/QATAR-112x75.jpg"

import "./slide.css"

const Slider = () => {
  return (
    <div>
<h2 className='mb-4 font-extrabold uppercase'>our esteem client</h2>
   
    <div class="slider">
      <div class="slider-track">
<div class="slide">
<img src={client} alt='img'/>
</div>

<div class="slide">
<img src={client1} alt='img'/>
</div>

<div class="slide">
<img src={client2} alt='img'/>
</div>

<div class="slide">
<img src={client3} alt='img'/>
</div>



<div class="slide">
<img src={client5} alt='img'/>
</div>

<div class="slide">
<img src={client6} alt='img'/>
</div>

<div class="slide">
<img src={client7} alt='img'/>
</div>

<div class="slide">
<img src={client8} alt='img'/>
</div>

<div class="slide">
<img src={client9} alt='img'/>
</div>

<div class="slide">
<img src={client10} alt='img'/>
</div>

<div class="slide">
<img src={client11} alt='img'/>
</div>
<div class="slide">
<img src={client12} alt='img'/>
</div>

<div class="slide">
<img src={client13} alt='img'/>
</div>
      </div>
    </div>
    </div>
  )
}

export default Slider