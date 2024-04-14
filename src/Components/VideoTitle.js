import React from 'react';

const VideoTitle = ({ title, overview }) => {
    return (
        <>
            <div className='w-screen aspect-video px-24 pt-[20%] absolute text-white bg-gradient-to-r from-black'>
                <h1 className='text-6xl font-bold'>{title}</h1>
                <p className='py-6 text-lg w-1/4'>{overview}</p>
                <div className=''>
                    <button className='bg-white p-4 px-16 text-black  rounded-lg text-lg font-bold mx-2 hover:opacity-80'>Play</button>
                    <button className='bg-gray-400 p-4 px-12 text-white opacity-80 rounded-lg text-lg font-bold hover:opacity-40 '>More Info</button>
                </div>
            </div>

        </>
    );
};

export default VideoTitle;