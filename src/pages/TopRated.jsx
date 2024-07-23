import NavBar from "../components/NavBar";
import MovieSlider from "../components/MovieSlider";
import { useSelector } from "react-redux";
import { bg_image_url } from "../static/files/constants"    
const TopRated = () => {
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
                <MovieSlider data={data} slider_title="Top Rated" />
            }

        </div>
    )
}

export default TopRated
