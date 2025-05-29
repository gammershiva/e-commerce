import React from 'react'
import headphone from "../assets/ecommerce-images/headphone.png"

const Hero = () => {
  return (
    <div className='p-10 sm:p-10 '>
     <div className='bg-red-600 h-[550px] rounded-3xl'>
       <div className='p-4'>
        {/* content */}
        <div></div>
        {/* img */}
        <div><img src={headphone} alt="" /> </div>
       </div>
     </div>
    </div>
  )
}

export default Hero
