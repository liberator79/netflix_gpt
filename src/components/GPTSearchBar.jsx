import React, { useState, useRef } from 'react'
const GPTSearchBar = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(null);
  const serchText = useRef(null);
  const handleSearch = async () => {
    setLoading(true);
    console.log("loading");
    if (serchText.current.value) {
      setData("OpenAi apis are not yet integrated");
    }
    setLoading(false)

  }
  return (
    <div className='flex flex-col gap-2 justify-center items-center w-[100%]'>
      <div className='flex gap-2 justify-center items-center'>
        <div>
          <input
            ref={serchText}
            type="text"
            placeholder="Search your mood"
            className={`px-8 py-4 w-full bg-gray-900 font-semibold text-white border-b-2 rounded-[10px] focus:bg-gray-800 focus-visible:outline-none text-sm bg-opacity-90 `}

          />
        </div>
        <div>
          <button className='bg-[E50914] rounded-[8px] p-2 py-3 text-white w-[100%]' disabled={loading ? true : false} onClick={handleSearch}>
            {loading ? <div className='flex justify-center items-center w-[100%] h-[100%]'>
              <div className='w-5 h-5 border-4 m-[2px] border-white border-dotted rounded-full animate-spin '></div>
            </div> : "Search"}
          </button>
        </div>
      </div>
      {
        data &&
        <div className='bg-black opacity-80 text-white p-2 rounded-md mr-20'>{data}</div>
      }
    </div>
  )
}

export default GPTSearchBar
