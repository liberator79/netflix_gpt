import React, { useEffect } from 'react'
import LOGO from '../static/images/Netflix_Logo_RGB.png'
import { Link } from 'react-router-dom'

const DefaultNavBar = () => {
  
  return (
    <div className='w-[100%] h-[10vh]'>
      <Link to= "/"><img src={LOGO} alt="logo" className='w-[20%]' /></Link>
    </div>
  )
}

export default DefaultNavBar
