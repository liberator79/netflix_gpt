
import { useState } from 'react'
const MovieCard = ({ poster_path, movie_name }) => {
  const [show, setShow] = useState(false);
  const handlePopUp = () => {
    setShow(true)
  }
  const handlePopDown = () => {
    setShow(false)
  }
  return (
    <div className="w-[100%]" onMouseOver={handlePopUp} onMouseLeave={handlePopDown}>
      <img className="w-48" src={"/movie_posters/" + poster_path} />
      {
        show &&
        <div className="absolute bg-black w-[87%] rounded-t-lg -translate-y-28 opacity-80">
          <div className="text-white font-bold p-2">
            {movie_name}
          </div>
          <div className='flex flex-row pt-3 gap-3 w-[100%] h-[10%]'>
            <div className="w-[87%] p-2">
              <button className='rounded-md bg-gray-100 px-3 p-2 w-[100%] justify-center items-center'>
                Play Now
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default MovieCard
