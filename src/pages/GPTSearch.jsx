import React from 'react'
import NavBar from '../components/NavBar'
import { bg_image_url } from "../static/files/constants"
import GPTSearchBar from '../components/GPTSearchBar'
const GPTSearch = () => {
  return (
    <div>
      <div className='absolute w-[100%] h-[100vh]'>
        <img

          alt="bg"
          className='h-[100vh] w-[100%]'
          src={ bg_image_url}
        />
      </div>

      <div className='relative'>
        <NavBar />
      </div>
      <div className='relative flex justify-center pt-[8%] h-[25vh]'>
        <GPTSearchBar />
      </div>

    </div>
  )
}

export default GPTSearch
