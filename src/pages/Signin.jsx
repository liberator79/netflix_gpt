import React from 'react'
import SigninForm from '../components/SigninForm'
import DefaultNavBar from '../components/DefaultNavBar'
import {bg_image_url} from "../static/files/constants"
const Signin = () => {
  return (
    <div>
      
      <div className='absolute w-[100%] h-[100vh]'>
        <img
          className='h-[100vh] w-[100%]'
          alt="bg"
          src={bg_image_url}
        />
      </div>
      <div className='relative bg-gradient-to-b from-black'>
        <DefaultNavBar/>
      </div>
      <div className='relative flex justify-center items-center'>
        <div className='bg-black bg-opacity-80'>
          <SigninForm />
        </div>
      </div>
    </div>

  )
}

export default Signin
