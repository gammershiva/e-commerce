import React from 'react'
import Button from '../component/shared/Button'
import img from '../assets/catogory img/headphone.png'
import img1 from '../assets/catogory img/earphone.png'
import img2 from '../assets/catogory img/macbook.png'

const Category = () => {
  return (
<div className='py-8'>
    <div className='px-10 sm:px-10'>
        {/* card main div */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7'>
            {/* first card */}
            <div className='h-[320px] bg-gradient-to-b from-blue-800 to-gray-400 rounded-3xl p-7 relative '>
                <div className='mt-16 '>
                <p className='mb-[2px] text-gray-400'>Enjoy </p>
                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                <p className='text-4xl font-bold opacity-20 mb-2'>Headphone</p>
                </div>
                <Button
                text="Buy now"
                className="hover:bg-gray-500 absolute bg-transparent "
                />
                <img src={img} alt="" className='h-[200px] w-[200px] absolute left-30 bottom-10 '/>
                
            </div>
            {/* secound card */}
             <div className='h-[320px] bg-gradient-to-b from-red-800 to-gray-400 rounded-3xl p-7 relative '>
                <div className='mt-16 '>
                <p className='mb-[2px] text-gray-400'>Enjoy </p>
                <p className='text-2xl font-semibold mb-[2px]'>with</p>
                <p className='text-4xl font-bold opacity-20 mb-2'>Earphone</p>
                </div>
                <Button
                text="Buy now"
                className="hover:bg-gray-500 absolute bg-transparent "
                />
                <img src={img1} alt="" className='h-[200px] w-[200px] absolute left-30 bottom-10 '/>
                
            </div>
            {/* third card */}
             <div className='h-[320px] bg-gradient-to-b from-gray-800 to-gray-400 rounded-3xl p-7 relative col-span-2 '>
                <div className='mt-16 '>
                <p className='mb-[2px] text-gray-400 text-2xl'>Enjoy </p>
                <p className='text-5xl font-semibold mb-[2px]'>with</p>
                <p className='text-6xl font-bold opacity-20 mb-2'>Mackbook</p>
                </div>
                <Button
                text="Buy now"
                className="hover:bg-gray-500 absolute  bg-transparent "
                />
                <img src={img2} alt="" className='h-[250px] w-[250px] absolute  right-0 bottom-10 '/>
                
            </div>
        </div>
      
    </div>
</div>    
  )
}

export default Category
