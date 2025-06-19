import React, { useEffect, useState } from 'react'
import Button from '../../component/shared/Button';

const Trendingproducts = () => {

  const [products, setproducts] = useState([]);
  console.log(products);
  
  useEffect(() => {

    const getproduct = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        if (!res.ok) {
          console.log("error getting data");
        }
        const data = await res.json();
        setproducts(data.products)


      } catch (error) {
        console.log("error");

      }
    }
    getproduct()



  }, []);



  return (
    <div className='px-4 py-8'>
      <h1 className='text-2xl font-bold text-center mb-8'>Trending products</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

        {
          products.map((i) => (
            <div className='bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300'>
            <div className='relative aspect-square'>
              <img src={i.thumbnail} 
              alt={i.title}
              className='w-full h-full object-cover' />

              <div className='absolute top-2 right-2 bg-white/80 rounded-full px-2 py-1 text-xs font-medium '>
              {i.rating}⭐
              </div>
            </div>

            <div className='p-4'>
              <div className='flex justify-between items-start mb-2'>
                <h3 className='font-medium text-gray-900 line-clamp-1'>{i.title}</h3>
                <span className='font-bold text-blue-600'>{i.price}

                </span>
              </div>

              <p className='text-xs text-gray-500 mb-2'>{i.brand}</p>
              <p className='text-sm text-gray-600 line-clamp-2 mb-3'> {i.description}</p>

              <Button 
              text={"Add to cart"}
              className={"bg-red-600 text-2xl text-white "}
              
              />

            </div>
            </div>
          ))}


      </div>

    </div>
  )
}

export default Trendingproducts
