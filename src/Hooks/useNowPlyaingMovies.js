import { useDispatch } from "react-redux";
import { addNowPlaynigMovies } from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from "react";

const useNowPlyaingMovies = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS)
        const jason = await data.json();
        // console.log(jason.results)
        dispatch(addNowPlaynigMovies(jason.results))
    }

    useEffect(()=>{
        getNowPlayingMovies();
    },[])
};

export default useNowPlyaingMovies;