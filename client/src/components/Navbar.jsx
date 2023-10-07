import React from 'react';
import { logo } from '../assets/images';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import ButtonNav from './ButtonNav';
import { Link } from 'react-router-dom';



function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className='w-full z-10  bg-[#3D0C11] shadow-lg shadow-zinc-400 max-sm:p-3'>
            <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between'>
            <Link to="/" className='flex items-center justify-center text-white text-lg cursor-pointer'>
                    <img src={logo} alt="Logo" className='hidden md:block w-8 h-8 lg:w-14 lg:h-14' />
                    ARchitect
            </Link>
            <ul className='hidden md:flex text-white text-lf font-semibold gap-8'>
            <li>
                         <Link to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="/explore">Explore</Link>
                     </li>
                     <li>
                         <a href="/#features">Features</a>
                     </li>
            </ul>
            <ButtonNav
                    title='Sign in'
                    conteinerStyle='hidden md:block bg-transparent border border-white text-white hover:bg-white hover:text-slate-700 rounded-full min-w-[130px]'
                />

                <button className='block md:hidden text-white text-xl'
                    onClick={() => setOpen(prev => !prev)}>
                    {open ? <AiOutlineClose /> : <HiMenuAlt3 />}
                </button>
            </nav>
            <div className={`${open ? "flex" : "hidden"} bg-black flex-col w-full px-4 pt-16 pb-10 text-white gap-6 text-[14px]`}>
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <a href="/#features">Features</a>
            </div>
        </header>
    );
}

export default Navbar;