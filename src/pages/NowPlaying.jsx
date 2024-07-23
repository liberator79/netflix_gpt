import { useSelector } from "react-redux"
import NavBar from "../components/NavBar"
import { bg_image_url } from "../static/files/constants"
import MovieSlider from "../components/MovieSlider"
const NowPlaying = () => {
    const data = useSelector(store => store.movies.nowPlayingMovies);
    console.log(data)
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
                <NavBar />
            </div>
                {
                    data &&
                    <MovieSlider data = {data} slider_title="Playing Now"/>
                }

        </div>
    )
}

export default NowPlaying
