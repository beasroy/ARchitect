import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import UseCard from '../components/UseCard';
import { arhome, customizeAR,cost } from '../assets/images';
import Footer from '../components/Footer';

function Home() {
    return (
        <main className='w-full flex flex-col'>
            <Navbar />
           <Header />

             <section id="about-us" className='  rounded-xl bg-amber-100 md:mx-20  px-4 mb-20 pb-5  md:px-20 max-xl:mt-20  '>
              <div className='flex flex-col items-center justify-center mb-5 '>
                <h1 className=' font-semibold font-montserrat text-amber-900 text-3xl md:text-4xl py-5 mt-2 text-center'>For The Buyer of New Homes</h1>
                <p className='px-4 font-montserrat font-light text-base text-orange-900 text-center max-xl:text-justify'>Elevate your new home experience with ARchitect's 
                immersive 3D visualization, ensuring informed decisions and personalized design. Stay on budget and enhance your interior 
                with AR-powered decor recommendations while enjoying seamless collaboration for a transparent 
                and stress-free home-building journey. </p>
              </div>
              <div className='flex flex-row  max-md:flex-wrap items-start justify-between mt-5 py-2 mb-5 max-xl:gap-5 '>
                <UseCard image={arhome} details=" step into your dream home before it's built with immersive 3D virtual tours."/>
                <UseCard image={customizeAR} details="Experiment with colors and furniture for real-time custom design changes."/>
                <UseCard image={cost} details="ARchitect assures budget confidence, offering affordable home models" />
              </div>
            </section> 
            <section className="bg-[#3D0C11] padding-x  ">
              <Footer />
            </section>
        </main>
    );
}

export default Home;