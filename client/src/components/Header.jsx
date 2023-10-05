import React from 'react';
import Button from './Button';
import { Home1 } from '../assets/images';

function Header() {
    return (
      <section className="xl:padding-l wide:padding-r   ">
        <div
        id='home'
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container mx-auto'
      >
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
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

        <Button label='Explore Now' />

      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40'>
        <img
          src={Home1}
          alt='home'
          className=' relative rounded-xl w-[100vh] h-[70vh] md:mt-20 '
        />
        </div>
      </div>
      </section>













        // <div className='w-full h-[90vh]'>
        //     <img src={Home1} alt='bg-image' className='w-full h-full pt-20'/>
        //         {/* <video loop autoPlay muted className='video-background'>
        //             <source src={require('../assets/video/bg-video.mp4')} type='video/mp4' />
        //         </video> */}
        //        <div className='flex flex-row justify-start items-center'> 
        //     <div className='absolute w-full h-full  top-0 z-8 flex flex-col items-center justify-center
        //      pt-40 2xl:pt-20 px-4'>
        //     <h1 className=' text-amber-600 text-4xl md:text-5xl font-bold text-center'>{title}</h1>
        //     {
        //   type && (
        //     <p className='text-sm mt-4 text-center text-white bg-[#00000090] px-6 py-4 rounded-full '>Welcome to ARchitect, your virtual dream house planner!
        //       <br className='hidden md:block' /> plan and build your dream home with us</p>
        //   )
        // }
        //     </div>
        // </div>
        
        // </div>
    );
}

export default Header;