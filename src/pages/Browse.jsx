import React from 'react'
import useGetMovies from '../hooks/useGetMovies'
import MovieSlider from '../components/MovieSlider'
import { useSelector } from 'react-redux'
import NavBar from '../components/NavBar'
import Player from '../components/Player'
const Browse = () => {
  useGetMovies("nowPlayingMovies");
  useGetMovies("TrendingMovies");
  useGetMovies("UpcomingMovies");
  useGetMovies("PopularMovies");
  useGetMovies("TopRatedMovies");
  const NowPlayingdata = useSelector(store => store.movies.nowPlayingMovies);
  const TrendingMoviesdata = useSelector(store => store.movies.TrendingMovies);
  const UpcomingMoviesdata = useSelector(store => store.movies.UpcomingMovies);
  const PopularMoviesdata = useSelector(store => store.movies.PopularMovies);
  const TopRatedMoviesdata = useSelector(store => store.movies.TopRatedMovies);
  return (

    <div className='bg-black flex flex-col'>
      <div className='absolute z-20'>
        <NavBar />
      </div>
      <div>
        {
          NowPlayingdata ? (
            <div className=''>
              <Player data = {NowPlayingdata[0]}/>
            </div>
          ) :<div><Player /></div>
        }
      </div>


      <div className='flex flex-col gap-2 -mt-[15%] z-20'>



        <div className='relative'>
          <MovieSlider slider_title={"Now Playing"} data={NowPlayingdata} /> 
        </div>
        <div>
          {
            TrendingMoviesdata ? <MovieSlider slider_title={"Trending Movies"} data={TrendingMoviesdata} /> : <div className='text-white'>Something</div>
          }
        </div>
        <div>{
          UpcomingMoviesdata ? <MovieSlider slider_title={"Upcoming Movies"} data={UpcomingMoviesdata} /> : <div className='text-white'>Something</div>
        }</div>
        <div>
          {
            PopularMoviesdata ? <MovieSlider slider_title={"Popular Movies"} data={PopularMoviesdata} /> : <div className='text-white'>Something</div>
          }
        </div>
        <div>
          {
            TopRatedMoviesdata ? <MovieSlider slider_title={"Top Rated Movies"} data={TopRatedMoviesdata} /> : <div className='text-white'>Something</div>
          }
        </div>
      </div>
    </div>
  )
}

export default Browse
