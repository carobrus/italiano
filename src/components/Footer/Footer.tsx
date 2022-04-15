import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as HeartIcon } from '../../assets/svg/heart.svg';

const pages = [
    { name: 'Coniugazioni', url: '/coniugazioni' }
]

const Footer = (): JSX.Element => {
    return (
        <div className="text-lg flex items-center text-black h-12">
            <div className="flex-grow bg-primary-green w-full h-full" />
            <div className="flex-grow bg-white w-full text-xs h-full font-semibold">
                <div className="flex items-center justify-center text-center h-full">
                    Made with
                    <HeartIcon className="ml-1 text-red-600 w-5 h-5" />
                </div>
            </div>
            <div className="flex-grow bg-primary-red w-full h-full" />
        </div>
    );
}

export { Footer };