import React from 'react'
import DefaultNavBar from '../components/DefaultNavBar'
import SignupForm from '../components/SignupForm'
const Signin = () => {
  return (
    <div>
      <div className='relative'>
        <DefaultNavBar />
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
