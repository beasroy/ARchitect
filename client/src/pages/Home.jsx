import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

function Home() {
    return (
        <main className='w-full flex flex-col'>
            <Navbar />
           <Header title={
            <p>Build your Dream home with
               <br />ARchitect ! </p>
           } type='home'/>

            {/* <section id="recipes" className='md:max-w-[1440px] mx-auto px-4 md:px-20'>
                <Recipes />
            </section> */}
        </main>
    );
}

export default Home;