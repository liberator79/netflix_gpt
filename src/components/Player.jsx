
import VideoBg from './VideoBg'
import { VscUnmute } from "react-icons/vsc";
import { setApp } from '../store/appSlice';
import { FaVolumeMute } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
const Player = ({ data }) => {
  const dispatch= useDispatch();
  const isMuted = useSelector(store => store.app.isMuted);
  const muteTogler = () => {
    dispatch(setApp({appState : "isMuted", appData : !isMuted}))
  }
  return (
    <div>
      <div className='absolute z-10 w-[30%] bg-gradient-to-r from-black h-[100vh] p-10 flex flex-col justify-center'>
        <div className='text-3xl font-bold text-gray-100 pt-5'> {data?.title} </div>
        <div className='pt-5'><p className='text-sm text-gray-100'>{data?.overview}</p></div>
        <div className='flex flex-row pt-3 gap-3'>
          <div>
            <button className='rounded-md bg-gray-100 px-3 p-2 w-[100%] justify-center items-center'>
              Play Now
            </button>
          </div>
          <div>
            <button className='rounded-md p-2 px-3 bg-gray-300 bg-opacity-30 text-white font-semibold'>
              More Info
            </button>
          </div>
          <div className='text-2xl text-white p-2' onClick = {muteTogler}>
            {isMuted?<FaVolumeMute />:<VscUnmute/>}
          </div>
        </div>
      </div>
      <div className=''>
        <div className="relative  -mt-[6%]">
          <VideoBg />
        </div>
      </div>

    </div>
  )
}



export default Player
