import React from 'react'

const LoginForm = () => {

    const hellow=()=>{
        alert("login hogya")
    }
  return (
    <div className='min-h-screen flex justify-center items-center gap-5'>
      login forms
      <div>
      <button onClick={hellow}>Click here</button>
      </div>
    </div>
  )
}

export default LoginForm
