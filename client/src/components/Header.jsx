import React from 'react';
import Button from './Button';
import { Home1 } from '../assets/images';
import { Link } from 'react-router-dom';
function Header() {
    return (
      <section className="xl:padding-l wide:padding-r   ">
        <div
        id='home'
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10  mx-auto'
      >
        <div className='relative xl:w-2/5 flex flex-col justify-start items-start w-full max-lg:-w-8xl max-xl:padding-x pt-28 max-sm:pt-20 max-xl:pt-10'>
        <p className='text-xl font-montserrat text-[#3D0C11]'>
        Welcome to ARchitect,
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] z-10 font-bold text-[#3D0C11]'>
          <span className='xl:bg-white xl:whitespace-nowrap rounded-lg relative pr-10'>
          Your virtual dream 
          </span>
          <br />
          <span className='text-[#b3541e] inline-block mt-3'>House</span> planner!
        </h1>
        <p className='font-montserrat text-[#3D0C11] text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        plan and build your dream home with us
        </p>
        <Link to="/explore">
        <Button label='Explore Now' />
        </Link>
      </div>
      <div className='flex-1 flex justify-center items-start max-xl:hidden '>
        <img
          src={Home1}
          alt='home'
          className='  rounded-xl w-[100vh] h-[70vh] md:mt-20 max-sm:px-3 '
        />
        </div>
      </div>
      </section>

    );
}

export default Header;