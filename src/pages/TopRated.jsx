import NavBar from "../components/NavBar";
import MovieSlider from "../components/MovieSlider";
import { useSelector } from "react-redux";
const TopRated = () => {
    const data = useSelector(store => store.movies.nowPlayingMovies);
    console.log(data)
    return (
        <div>

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
