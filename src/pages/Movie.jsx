import React from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Movie = () => {
    const { id } = useParams(); // Destructure the id parameter from the URL
    const data = useSelector(store => store.movies.nowPlayingMovies);
    console.log('Data from Redux store:', data);

    const movieData = data.find(movie => {
        return movie.id === parseInt(id);
    });
    console.log(movieData)
    return (
        <div className='w-[100%] rounded-md h-[100vh] bg-gradient-to-b from-black via-gray-800 to-gray-900 relative'>
            <div className='relative'>
                <NavBar />
            </div>
            <div className='p-10'>
                <div className='mt-40 p-4 bg-gray-800 h-[50vh] flex items-start gap-4 rounded-lg shadow-lg'>
                    <img
                        className="object-cover h-full w-1/3 rounded-lg shadow-md"
                        src={`/movie_posters/${movieData.poster_path}`}
                        alt={movieData.title}
                    />
                    <div className='flex flex-col text-gray-200 gap-2 w-2/3'>
                        <div className='text-3xl font-bold mb-2'>{movieData.title}</div>
                        <div className='text-gray-300 mb-2'>{movieData.overview}</div>
                        <div className='text-sm mb-1'>
                            <span className='font-bold'>Language:</span> {movieData.original_language}
                        </div>
                        <div className='text-sm mb-1'>
                            <span className='font-semibold'>Release Date:</span> {movieData.release_date}
                        </div>
                        <div className='text-sm mb-1'>
                            <span className='font-semibold'>Rating:</span> {movieData.vote_average}
                        </div>
                        <div className='text-sm mb-1'>
                            <span className='font-semibold'>Voters:</span> {movieData.vote_count}
                        </div>
                        <div className='text-sm mb-2'>
                            <span className='font-semibold'>Popularity:</span> {movieData.popularity}
                        </div>
                        {movieData.adult && <div className='font-bold text-red-500'>Adult</div>}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Movie;
