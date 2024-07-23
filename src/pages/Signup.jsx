import React from 'react'
import DefaultNavBar from '../components/DefaultNavBar'
import SignupForm from '../components/SignupForm'
import {bg_image_url} from "../static/files/constants"
const Signin = () => {
  return (
    <div>
      <div className='absolute w-[100%] h-[100vh]'>
        <img

          alt="bg"
          className='h-[100vh] w-[100%]'
          src={bg_image_url}
        />
      </div>
      <div className='relative'>
        <DefaultNavBar/>
      </div>
      <div className='relative flex justify-center items-center'>
        <div className='bg-black bg-opacity-80'>
          <SignupForm />
        </div>
      </div>
    </div>

  )
}

export default Signin
