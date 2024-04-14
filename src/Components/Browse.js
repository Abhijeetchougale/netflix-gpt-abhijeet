import React from 'react';
import Header from './Header';
import useNowPlyaingMovies from '../Hooks/useNowPlyaingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
   useNowPlyaingMovies();
    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    );
};

export default Browse;