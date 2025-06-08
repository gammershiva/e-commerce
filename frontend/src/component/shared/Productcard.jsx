import React from 'react'
import Button from './Button'

const Productcard = ({data}) => {
  return (
    <div className='py-12'>
        <div className='grid sm:grid-cols-4 grid-cols-2  mx-13 my-12 rounded-3xl items-center  '>
            {data.map((i)=>(
                <div className='relative group '>
            {/* image section */}
            <div className='rounded-3xl'>
           <img className='rounded-3xl h-[180px] w-[300px] object-cover ' src={i.image} alt="eror" />

          <div className='absolute top-20 translate-x-1/3 hidden group-hover:flex duration-200 justify-center'> 
          <Button
           text="Add to cart"
           className="bg-red-500 text-white"
           />
           </div>
            </div>


            {/* description section */}
            <div className=' '> 
                <h1 className='font-semibold'>{i.title}</h1>
           <p className='font-bold'>{i.price}</p>
            </div>
            </div>
            ))}
        </div>
      
    </div>
  )
}

export default Productcard
