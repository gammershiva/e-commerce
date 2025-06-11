import React from 'react'
import img from "../assets/brand/br-1.png"
import img2 from "../assets/brand/br-2.png"
import img3 from "../assets/brand/br-3.png"
import img4 from "../assets/brand/br-4.png"
import img5 from "../assets/brand/br-5.png"

const Sponcer = () => {
    return (
        <div className='px-[3rem] py-8 bg-gray-300'>
            <div className='grid grid-cols-5 gap-3 items-center opacity-50'>
                <img src={img} alt="Error" className='w-[80px]' />
                <img src={img2} alt="Error" className='w-[80px]' />
                <img src={img3} alt="Error" className='w-[80px]' />
                <img src={img4} alt="Error" className='w-[80px]' />
                <img src={img5} alt="Error" className='w-[80px]' />
            </div>
        </div>
    )
}

export default Sponcer;
