import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from '../../assets/svg/italy-icon.svg';

const pages = [
    { name: 'Coniugazioni', url: '/coniugazioni' }
]

const Navbar = (): JSX.Element => {
    return (
        <nav className="bg-black text-white text-lg flex justify-center">
            <div className="flex items-center space-x-3 py-3 mx-6 max-w-custom w-full">
                <Link to={'/'} className="mr-4" >
                    <Icon className='hover:opacity-80' />
                </Link>
                {pages.map(p =>
                    <Link to={p.url} key={p.name} className='hover:text-neutral-300'>{p.name}</Link>
                )}
            </div>
        </nav>
    );
}

export { Navbar };