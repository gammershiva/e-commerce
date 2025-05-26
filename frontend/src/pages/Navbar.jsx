import React from 'react';
import { RiArrowDownSFill } from "react-icons/ri";

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
    <header className="bg-white shadow-2xl  ">
      <div className="p-4 sm:px-12 flex gap-7">
        <a className="text-red-600 text-2xl sm:text-3xl font-semibold uppercase" href="#">
          E-SHOP
        </a>
        <nav className='flex '>
          <ul className="flex gap-7">
            {Navbarlink.map((item) => (
              <li className="px-4 font-semibold text-gray-600 hover:text-black duration-200" key={item.id}>
                <a href={item.link} >
                  {item.name}
                </a>
              </li>
            ))}
          <li className="group">
            <a className="flex items-center font-semibold text-gray-600 hover:text-black duration-200 " href="#">Quick link
              <RiArrowDownSFill className="group-hover:rotate-180 duration-200 " />
            </a>
            <div className="hidden group-hover:block absolute  ">
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
    </header>
  );
};

export default Navbar;
