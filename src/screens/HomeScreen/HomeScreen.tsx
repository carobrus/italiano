import React from "react";
import MainImage from '../../assets/images/cinque-terre.jpg';

const HomeScreen = (): JSX.Element => {
    return (
        <div className="relative flex flex-col place-content-center m-auto w-full">
            <img src={MainImage} className='absolute object-cover h-screen -z-10' />
            <div className="max-h-screen h-full flex items-center justify-center">
                <h1 className="uppercase font-semibold text-5xl">Benvenuto</h1>
            </div>
            <div className='h-52 bg-secondary-green z-10'></div>
            <div className='h-60 z-10'></div>
            <div className='h-52 bg-secondary-red z-10'></div>
        </div>
    );
}

export { HomeScreen };