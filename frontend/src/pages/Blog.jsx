import React from 'react'
import img from "../assets/blogs/blog-1.jpg"
import img2 from "../assets/blogs/blog-2.jpg"
import img3 from "../assets/blogs/blog-3.jpg"

const Blogdata = [

    {
        title: "How to chose smartwatch",
        subtitle: " Make sure the watch works with your phone(Android or iphone).Choose Battery life at least 2-3 days.",
        published: " jan 10,2024 by Uchiha Madhara",
        image: img
    },
    {
        title: "How to chose smartwatch",
        subtitle: " Make sure the watch works with your phone(Android or iphone).Choose Battery life at least 2-3 days.",
        published: " jan 10,2024 by Uchiha Madhara",
        image: img2
    },
    {
        title: "How to chose smartwatch",
        subtitle: " Make sure the watch works with your phone(Android or iphone).Choose Battery life at least 2-3 days.",
        published: " jan 10,2024 by Uchiha Madhara",
        image: img3
    },
]

const Blog = () => {
    return (
        <div className='px-13 my-30'>
            {/* title */}
            <div className='flex flex-col text-center mb-5'>
                <h1 className='text-3xl font-black'>Recent news</h1>
                <p className='text-md text-gray-500'>Explore our Blog</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 py-5 gap-5'>
            {Blogdata.map((i) => (
                <div key={i.title} className=''>

                     {/* image section */}

                     <div className='overflow-hidden rounded-2xl mb-2 '>
                        <img src={i.image} alt="blog error" 
                        className='w-full h-[202px] object-cover rounded-2xl hover:scale-105 duration-500 ' />
                     </div>

                    {/* body section */}

                    <div className='space-x-2'>
                        <p className='text-xs text-gray-500'>{i.published}</p>
                        <p className='font-bold line-clamp-1'>{i.title}</p>
                        <p className='line-clamp-2 text-sm text-gray-600'>{i.subtitle}</p>
                    </div>
                </div>
            ))}
            </div>

        </div>
    )
}

export default Blog
