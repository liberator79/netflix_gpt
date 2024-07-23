import React from 'react'
import { Link } from 'react-router-dom'
import DefaultNavBar from '../components/DefaultNavBar'
import PATHS from '../router/routes'
const Home = () => {
  return (
    <div>
      <div className='absolute bg-gradient-to-b from-black'>
        <DefaultNavBar />
      </div>
      <div className='absolute text-white flex flex-wrap justify-center items-center w-[100%] h-[100vh] bg-gradient-to-t from-black'>

        <div>
          <ul className=' flex flex-wrap justify-center items-center flex-col gap-2 '>
            <li className='text-white font-extrabold text-6xl'>Unlimited movies, TV</li>
            <li className='text-white font-extrabold text-6xl'>shows and more</li>
            <li className='font-semibold p-2'>Starts at ₹149. Cancel anytime.</li>

            <li className=' pt-2'>Ready to watch? Enter your email to create or restart your membership.</li>
            <li className='pt-5'><Link to ={PATHS.SIGNIN}><button className='bg-[E50914] p-2 font-semibold px-3 rounded-sm'>Get Started</button></Link></li>
          </ul>
        </div>
      </div>
      <img
        className='-z-10 w-[100%] h-[100vh]'
        alt = "bg"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
      />

    </div>
  )
}

export default Home
