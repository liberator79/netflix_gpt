import { useSelector } from "react-redux"
import NavBar from "../components/NavBar"
import { bg_image_url } from "../static/files/constants"
import MovieSlider from "../components/MovieSlider"
const Popular = () => {
    const data = useSelector(store => store.movies.nowPlayingMovies);
    console.log(data)
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

export default Popular
