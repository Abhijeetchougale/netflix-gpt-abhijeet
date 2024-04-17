// import React from 'react';
// import Header from './Header';
// import useNowPlyaingMovies from '../Hooks/useNowPlyaingMovies';
// import MainContainer from './MainContainer';
// import SecondaryContainer from './SecondaryContainer';
// import GptSearch from './GptSearch';
// import { useSelector } from 'react-redux';
// const Browse = () => {
//     const showGptSearch  = useSelector((store) => store.gpt.showGptSearch)
//     useNowPlyaingMovies();
//     return (
//         <div>
//             <Header />
//             {
//                 showGptSearch ? (<GptSearch />): <>
//                 (<MainContainer />
//                 <SecondaryContainer />)
//             </>

//             }


//         </div>
//     );
// };

// export default Browse;
import React from 'react';
import Header from './Header';
import useNowPlyaingMovies from '../Hooks/useNowPlyaingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    console.log(showGptSearch)
    useNowPlyaingMovies();

    return (
        <div>
            <Header />
            {
                showGptSearch ? (<GptSearch />) : (<><MainContainer />
                    <SecondaryContainer /></>)

            }


        </div>
    );
};

export default Browse;
