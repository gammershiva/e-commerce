import React from 'react'
import Button from '../../component/shared/Button'
import { BsCursorFill } from "react-icons/bs";
import { FaMobileRetro } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
const footerlink = [
    {
        id: 1,
        title: "Home",
        link: "/#"
    },
    {
        id: 2,
        title: "About",
        link: "/#"
    },
    {
        id: 3,
        title: "Contact",
        link: "/#"
    },
    {
        id: 4,
        title: "Blog",
        link: "/#"
    },
]

const Footer = () => {
    return (
        <div className='p-10 mt-13  shadow-2xl shadow-gray-500 bg-gray-400 w-full'>
            {/* main div for grid  */}
            <div className='grid grid-cols-4 gap-3'>
                {/* company info */}
                <div>
                    <div>
                        <h1 className='text-4xl text-red-600 font-semibold'>E-Shop</h1>

                    </div>
                    <div className='p-3'>
                        <p>Develop by Shiava Bhattarai</p>
                        <p>Made with love with coding journey</p>
                    </div>
                    <div>
                        <Button
                            text={"Visit our page"}
                            className={"bg-red-500 text-white items-center flex justify-center"}

                        />
                    </div>

                </div>
                {/* important link */}
                <div>
                    <div>
                        <h1 className='text-3xl font-semibold'>Important links</h1>
                    </div>
                    {footerlink.map((i) => (
                        <div className='p-1 px-2'>
                            <a href={i.link} className='text-md text-gray-500 hover:text-black duration-200'>{i.title}</a>

                        </div>
                    ))}
                </div>
                {/* ouick links */}
                <div>
                    <div>
                        <h1 className='text-3xl font-semibold'>Ouick links</h1>
                    </div>
                    {footerlink.map((i) => (
                        <div className='p-1 px-2'>
                            <a href={i.link} className='text-md text-gray-500  hover:text-black duration-200'>
                                {i.title}</a>

                        </div>
                    ))}
                </div>
                {/* company addresh */}
                <div >
                    <div className='py-1'>
                        <h1 className='font-semibold text-3xl'>Addresh</h1>
                    </div>
                    <div className='p-2'>
                        <div className='flex items-center'>
                            <BsCursorFill className=' ' />
                            <p className='text-semibold '>kohalpur-11, Banke</p>
                        </div>
                        <div className='flex items-center '>
                            <FaMobileRetro />
                            <p>9763951850</p>

                        </div>
                        <div className='flex gap-4 py-3'>
                            <div>
                                
                                <a target='_blank' className='text-4xl hover:text-red-500' href="https://www.facebook.com/">
                                 <IoLogoFacebook /></a>
                            </div>
                            <div>
                                
                                <a target='_blank' className='text-4xl hover:text-red-500' href="https://www.instagram.com/">
                                <FaInstagramSquare  />
                                 </a>
                            </div>
                            <div >
                            <a target='_blank' className='text-4xl hover:text-red-500' href="https://www.tiktok.com/"><IoLogoTiktok  />
    

                            </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer

