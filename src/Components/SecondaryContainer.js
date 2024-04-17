import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector((store)=>store.movie);
    return (
        <div className='bg-black '>
            <div className='-mt-60 pl-12 relative z-20 '>
            <MovieList title={"Now Playing"} movie ={movies.nowPlayingMovies}/>
            <MovieList title={"Trending"} movie ={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movie ={movies.nowPlayingMovies}/>
            <MovieList title={"Horror"} movie ={movies.nowPlayingMovies}/>
            </div>
        </div>
    );
};

export default SecondaryContainer;