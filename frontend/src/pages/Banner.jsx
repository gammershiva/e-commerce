import React from 'react'
import Button from '../component/shared/Button'


const Banner = ({ data }) => {
  console.log(data)
  return (
    <div className='mx-[3rem] my-12'>
      <div className={`grid grid-cols-1 sm:grid-cols-3 items-center rounded-3xl ${data.className}`}>
        {/* first content */}
        <div className='p-8'>
          <p className='text-sm'>{data.discount}</p>
          <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title2}</h1>
          <p className='text-sm'>{data.date}</p>
        </div>
        {/* secound content */}
        <div>
          <img src={data.image} alt="Bammer image"
            className='w-[250px] sm:w-[350px] drop-shadow-2xl object-contain ' />
        </div>
        {/* third content */}
        <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
          <p className='font-bold text-xl '>{data.title2}</p>
          <p className='text-3xl sm:text-5xl font-semibold'>{data.title3}</p>
          <p className='text-sm'>{data.title4}</p>
          <div>
            <Button text="Shop now " className={`${data.className} bg-white text-red-600`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
