import React from 'react'
import Button from "../../component/shared/Button"

const LoginForm = () => {

  // const hellow=()=>{
  //     alert("login hogya")
  // }
  return (
    <div className='min-h-screen flex justify-center items-center gap-5  pt-20 '  >
      <div className=" shadow-2xl  h-screen w-[100vh] flex flex-col justify-center items-center  ">

        <h1 className='text-5xl text-red-500 font-semibold p-20   '>LOGIN</h1>

        <form className=' group p-2 '>
          <div className='flex gap-2  pb-5 '>
            <label className='text-2xl' >Username:- </label>
            <input className='text-lg font-semibold w-50  border-2 align-middle ' type="text" placeholder='' />
          </div>

          <div className='flex gap-2 items-center '>
            <label className='text-2xl' > Password :-   </label>
            <input className='text-lg font-semibold w-50  border-2 align-middle ' type="password" placeholder='' />
          </div>
          <div>
            <Button
              text={"Login"}
              className={"hover:text-red-600 text-3xl pt-10 pl-20 "}


            />

            <a href="#"
              className='cursor-pointer hover:scale-105 duration-200 py-2 px-8  relative z-10 hover:text-red-600 text-3xl pt-10 '>
              Sign up
            </a>
          </div>
        </form>
      </div>

    </div>
  )
}

export default LoginForm
