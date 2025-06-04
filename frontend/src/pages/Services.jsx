import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
const servicedata=[
{
    id:1,
    icon:<FaCarAlt className="text-5xl text-red-500" />,
    title:"Free Delivery",
    description:"Free Delivery All Over Nepal"
},
{
    id:2,
    icon:<FaCheckCircle className="text-5xl text-red-500"/>,
    title:"Secure",
    description:"Free Delivery All Over Nepal"
},
{
    id:3,
    icon:<FaWallet className="text-5xl text-red-500" />,
    title:"Safe money",
    description:"Free Delivery All Over Nepal"
},
{
    id:4,
    icon:<MdOutlineSupportAgent className="text-5xl text-red-500" />,
    title:"costumer care",
    description:"Free Delivery All Over Nepal"
},
]

const Services = () => {

  return (
    <div className='px-[1rem] sm:px-[3rem] my-14 sm:my-20 '>
        <div className=' grid grid-cols-2 sm:grid-cols-4'>
            {servicedata.map((i)=>(
                <div className='flex flex-col sm:flex-row items-start gap-3'>
                    {i.icon}
                 <div>
                    <h1 className='text-lg font-bold'>{i.title}</h1>
                    <p className='text-sm'>{i.description}</p>
                 </div>
                </div>
                
            ))}
        </div>
      
    </div>
  )
}

export default Services
