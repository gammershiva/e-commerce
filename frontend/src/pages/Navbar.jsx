import React from 'react';
import { RiArrowDownSFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";

const Navbarlink = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Shop", link: "#" },
  { id: 3, name: "About", link: "#" },
  { id: 4, name: "Blog", link: "#" }
];

let Dropdown =[
  {id: 1,name:"trending product",link:"#"},
   {id: 2,name:"best selling",link:"#"},
    {id: 3,name:"top rated",link:"#"},
];


const Navbar = () => {
  return (
    <header className="bg-white shadow-2xl flex justify-between pr-11 ">
      <div className="p-4 sm:px-12 flex items-center gap-7">
        <div className="flex ">
        <a className="text-red-600 text-2xl sm:text-3xl font-semibold uppercase" href="#">
          E-SHOP
        </a>
        <nav className=' items-center  hidden lg:block '>
          <ul className="flex gap-7">
            {Navbarlink.map((item) => (
              <li className="px-4 font-semibold text-gray-400 hover:text-black duration-200" key={item.id}>
                <a href={item.link} >
                  {item.name}
                </a>
              </li>
            ))}
          <li className="group ">
            <a className="flex items-center font-semibold text-gray-400 hover:text-black duration-200 " href="#">Quick link
              <RiArrowDownSFill className="group-hover:rotate-180 duration-200 " />
            </a>
            <div className="hidden group-hover:block absolute shadow-md p-2 rounded-b-md ">
              {Dropdown.map((i)=>(
                <ul>
                  <li key={i.id} >
                    <a className="duration-200 shadow-2x1 hover:bg-red-200 p-2 inline-block w-full rounded-2xl" href={i.link}>{i.name}</a>
                  </li>
                </ul>
              ))}
            </div>
            
          </li>
          </ul>
          </nav>
          </div>
          </div>

          {/* right side */}
      <div className="flex items-center group relative gap-7 ">
        <div className="">
            <input className="w-0 group-hover:w-[300px] group-hover:border group-hover:border-gray-100 duration-300 rounded-full px-4 py-1 "
             placeholder='enter for scr'  type="search" />
             <CiSearch className=" mr-15 group-hover:text-red-500 text-x1 text-gray-600 absolute top-1/2 -translate-y-1/2 right-3 duration-300" />
        </div>
        <div className='relative p-3'>
          <FaOpencart />
          <span className='text-white bg-red-700 rounded-full absolute top-0 right-0 flex items-center justify-center text-xs w-4 h-4'>4</span>
        </div>
          </div>
         
    </header>
  );
};

export default Navbar;
