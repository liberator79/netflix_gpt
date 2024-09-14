import React from 'react'
import { Link , useLocation } from 'react-router-dom'
import LOGO from '../static/images/Netflix_Logo_RGB.png'
import PATHS from "../router/routes"
const NavBar = () => {
    const location = useLocation();
    return (
        <div className='w-[100%] grid grid-cols-12 gap-1 h-[10vh] items-center justify-start text-white font-semibold cursor-pointer bg-gradient-to-b from-black'>
            <div className='grid col-span-2'>
                <Link to={PATHS.BROWSE}><img src={LOGO} alt="logo" className='w-[100%]' /></Link>
            </div>
            <div className=''>
                <Link to = {PATHS.POPULAR} className={location.pathname === PATHS.POPULAR ? 'border-b-4 pb-1 border-white' : ''} >Popular</Link>
            </div>
            <div className=''>
                <Link to = {PATHS.TOPRATED} className={location.pathname === PATHS.TOPRATED ? 'border-b-4 pb-1 border-white' : ''} >Top Rated</Link>
            </div>
            <div>
                <Link to = {PATHS.PLAYING_NOW} className={location.pathname === PATHS.PLAYING_NOW ? 'border-b-4 pb-1 border-white' : ''} >Playing Now</Link>
            </div>
            <div className='grid col-span-7 justify-end pr-2'>
                <Link to = {PATHS.GPTSEARCH} className={location.pathname === PATHS.GPTSEARCH ? 'border-b-4 pb-1 border-white' : ''} >GPTSearch</Link>
            </div>
        </div>
    )
}

export default NavBar
