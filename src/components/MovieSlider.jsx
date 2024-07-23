import React from 'react'
import MovieCard from './MovieCard'
const MovieSlider = ({ data, slider_title }) => {
  if (data === null) return;
  return (
    <div className=''>
      <div className='p-2'><span className='text-white text-2xl font-semibold'>{slider_title}</span></div>
      <div className='p-2'>
        {
          <swiper-container slides-per-view="6" navigation="false" speed="600" css-mode="true" grid-rows="1" mousewheel-force-to-axis="true">

            {
              data.map((movie) => {
                return (
                  <swiper-slide key={movie.id}>
                    <MovieCard poster_path={movie.poster_path} movie_name={movie.title} />
                  </swiper-slide>

                )
              })
            }
          </swiper-container>
        }

      </div>
    </div>
  )
}
export default MovieSlider
