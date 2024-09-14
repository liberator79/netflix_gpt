import { useSelector } from "react-redux"
import NavBar from "../components/NavBar"
import { bg_image_url } from "../static/files/constants"
import MovieSlider from "../components/MovieSlider"
const NowPlaying = () => {
    const data = useSelector(store => store.movies.nowPlayingMovies);
    return (
        <div>


            <div className='relative'>
                <NavBar />
            </div>
            {
                data &&
                <MovieSlider data={data} slider_title="Playing Now" />
            }

        </div>
    )
}

export default NowPlaying
