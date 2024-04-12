import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm]= useState(true)
    const toggleSignInForm =()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo" />
      </div>
      <form className='w-3/12 p-12 absolute bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80' >
        <h1 className='font-bold text-3xl'>{isSignInForm? "Sign In":"Sign Up"}</h1>
        {
            !isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-600' />
        }
        
        <input type="text" placeholder='Email Adress' className='p-4 my-4 w-full bg-gray-600' />
        
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-600' />
       
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>
            {isSignInForm? "Sign In": "Sign Up"}
        </button>
        <p className='text-xl py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign Up Now": "Alreddy refgister Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login
