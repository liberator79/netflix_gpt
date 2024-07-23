import React from 'react'
import { useSelector } from 'react-redux'

const VideoBg = () => {
    const isMuted = useSelector((store) => store.app.isMuted)
    return (

        <div className="w-full aspect-video hidden xl:block">
           <iframe className="w-full object-cover aspect-video"
                src={`https://www.youtube.com/embed/LEjhY15eCx0?autoplay=1&mute=${isMuted}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&loop=1`}
                title="YouTube video player"
            >
            </iframe>
        </div>
    )
}

export default VideoBg
