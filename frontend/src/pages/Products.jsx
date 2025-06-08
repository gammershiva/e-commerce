import React from 'react'
import img from "../assets/product/p-1.jpg"
import img2 from "../assets/product/p-2.jpg"
import img3 from "../assets/product/p-3.jpg"
import img4 from"../assets/product/p-4.jpg"
import Productcard from '../component/shared/Productcard'

const Productdata=[
    {
        id:1,
        image:img,
        title:"Boat Headphone",
        price:"120",
    },
    {
        id:2,
        image:img2,
        title:"Boat Headphone",
        price:"120",
    },
    {
        id:3,
        image:img3,
        title:"Boat Headphone",
        price:"120",
    },
    {
        id:4,
        image:img4,
        title:"Boat Headphone",
        price:"120",
    },
]

const Products = () => {
  return (
    <div>
        {/* title */}
        <div className='flex flex-col text-center mb-5 '>
            <h1 className='text-3xl font-bold '>Our Product</h1>
            <p className='text-md text-gray-400 '>Explore our Product</p>
        </div>


        {/* cards */}
        <div>
            <Productcard data={Productdata}/>
        </div>
        
      
    </div>
  )
}

export default Products
