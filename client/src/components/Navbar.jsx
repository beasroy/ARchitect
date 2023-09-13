import React from 'react';
import { logo } from '../assets/images';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Button from './Button';
import { Link } from 'react-router-dom';



function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className='relative w-full  z-10 bg-white shadow-sm shadow-gray-400'>
            <nav className='flex w-full  px-4 md:px-20 items-center justify-between'>
            <Link to="/" className='flex items-center justify-center cursor-pointer'>
                    <img src={logo} alt="Logo" className='hidden md:block w-20 h-20 lg:w-50 lg:h-50' />
                    <h1 className='text-2xl text-amber-700 font-bold'>ARchitect</h1>
            </Link>
            <ul className='hidden md:flex text-amber-600  text-lf font-semibold gap-8'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/model">Explore</Link>
                    </li>
                    <li>
                        <Link to="/budget">Budget</Link>
                    </li>
                    
                    
            </ul>
            <Button
                    label='Sign in'
                    
                />

                <button className='block md:hidden text-white text-xl'
                    onClick={() => setOpen(prev => !prev)}>
                    {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
                </button>
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
                <a href="/">Home</a>

                <a href="/">Budget</a>
            </div>
        </header>
    );
}

export default Navbar;