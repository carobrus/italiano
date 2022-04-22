import React from "react";
import { Link } from "react-router-dom";
import { ItalyIcon } from "../../assets/svg";

const pages = [
    { name: 'Coniugazioni', url: '/coniugazioni' },
    { name: 'Articoli', url: '/articoli' }
]

const Navbar = (): JSX.Element => {
    return (
        <nav className="bg-black text-white text-lg flex justify-center">
            <div className="flex items-center space-x-8 py-3 max-w-custom w-full">
                <Link to={'/'}>
                    <ItalyIcon className='ml-6 hover:opacity-80' />
                </Link>
                {pages.map(p =>
                    <Link to={p.url} key={p.name} className='hover:text-neutral-300'>{p.name}</Link>
                )}
            </div>
        </nav>
    );
}

export { Navbar };