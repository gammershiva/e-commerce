import React from 'react'
import headphone from "../assets/ecommerce-images/headphone.png"
import image1 from "../assets/ecommerce-images/headphone.png"
import image2 from "../assets/ecommerce-images/macbook.png"
import image3 from "../assets/ecommerce-images/vr.png"

let Herodata=[

{
  id:1,
  img: image1,
  title:"Wireless",
  subtitle:"dublicate iphone",
  title23:"Headphone",
  description:"this is best duplicate item"

},

{
  id:2,
  img: image2,
  title:"Wireless",
  subtitle:"dublicate iphone",
  title23:"Headphone",
  description:"this is best duplicate item"

},

{
 id:3,
  img: image3,
  title:"Wireless",
  subtitle:"dublicate iphone",
  title23:"Headphone",
  description:"this is best duplicate item"

},

]


const Hero = () => {
  return (
    <div className='p-10 sm:p-10 '>
     <div className='bg-red-600 h-[550px] rounded-3xl'>
     {Herodata.map((i)=>(

    
       <div className='p-4'>
        {/* content */}
        <div>
          <h1>{i.title}</h1>
          <h1>{i.subtitle}</h1>
          <h1>{i.title23}</h1>
        </div>
        {/* img */}
        <div><img src={i.img} alt="" /> </div>
       </div>
        ))}
     </div>
    </div>
  )
}

export default Hero
