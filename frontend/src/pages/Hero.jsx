import React from 'react'
import headphone from "../assets/ecommerce-images/headphone.png"
import image1 from "../assets/ecommerce-images/headphone.png"
import image2 from "../assets/ecommerce-images/macbook.png"
import image3 from "../assets/ecommerce-images/vr.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from '../component/shared/Button'


let Herodata=[

{
  id:1,
  img: image1,
  title:"Wireless",
  subtitle:"Dublicate Headphone",
  title23:"Headphone",
  description:"this is best duplicate item"

},

{
  id:2,
  img: image2,
  title:"Wireless",
  subtitle:"Dublicate Macbook",
  title23:"Mackbook",
  description:"this is best duplicate item"

},

{
 id:3,
  img: image3,
  title:"Wireless",
  subtitle:"dublicate VR",
  title23:"VR",
  description:"this is best duplicate item"

},

]


const Hero = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    button:true
  };
  return (
    <div className='p-10 sm:p-10 '>
     <div className='bg-red-600 h-[550px] rounded-3xl'>
      <div className=''>
        
       <Slider {...settings }>
     {Herodata.map((i)=>(
      <div>
       <div className='p-4 grid grid-cols-1 sm:grid-cols-2'>

        {/* content */}
        <div className='flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0'>
          <h1 className='text-2xl sm:text-5xl font-bold '>{i.subtitle}</h1>
          <h1 className='text-2xl sm:text-6xl font-bold'>{i.title}</h1>
          <h1 className='text-5xl uppercase text-white sm:text-[80px] md:text-[100px] x1:text-[150px] font-bold whitespace-nowrap'>{i.title23}</h1>
          <div >
            <Button 
             text="BUY NOW"
            className="bg-red-500"/>
           
            </div>``
        </div>

        {/* img */}
        <div>
          <img src={i.img} alt=""
           className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-x-150 lg:scale-110 object-contain mx-auto drop-shadow-2xl' /> 
          </div>

       </div>

       </div>
        ))}
        </Slider>
        
      </div>
     </div>
    </div>
  )
}

export default Hero
