import React from 'react';

function Header({title , type}) {
    return (
        <div className='w-full h-[100vh]'>
                <video loop autoPlay muted className='video-background'>
                    <source src={require('../assets/video/bg-video.mp4')} type='video/mp4' />
                </video>
               <div className='flex flex-row justify-start items-center'> 
            <div className='absolute w-full h-full  top-0 z-8 flex flex-col items-center justify-center
             pt-40 2xl:pt-20 px-4'>
            <h1 className=' text-amber-600 text-4xl md:text-5xl font-bold text-center'>{title}</h1>
            {
          type && (
            <p className='text-sm mt-4 text-center text-white bg-[#00000090] px-6 py-4 rounded-full '>Welcome to ARchitect, your virtual dream house planner!
              <br className='hidden md:block' /> plan and build your dream home with us</p>
          )
        }
            </div>
        </div>
        
        </div>
    );
}

export default Header;