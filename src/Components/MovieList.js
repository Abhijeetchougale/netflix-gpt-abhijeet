import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({title, movie}) => {
    // console.log(movie)
    if(!movie) return
    return (
        <div className='px-6 '>
            <h1 className='text-3xl py-4 text-white'>{title}</h1>
            <div className='flex  overflow-x-scroll scroll-container'>
                
                <div className='flex'>
                    {
                        movie.map((mov)=>{
                            return(
                                <MovieCard key={mov.id} poster_path={mov.poster_path}/>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default MovieList;