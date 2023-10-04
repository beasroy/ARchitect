import React from 'react'

import Navbar from '../components/Navbar';
import { Property } from '../assets/images';
import Filters from '../product-list/Filters';
import ProductList from '../product-list/component/ProductList';


function HouseModels() {

  return (
    <main >
    <Navbar />
    <section className='relative py-10  w-100% h-[70vh] '>
        <img src={Property} alt="image" className='w-full h-full object-cover'/>           
    </section>
    <Filters />
    <div className='flex flex-col  justify-center mt-20'>
      
      <h1 className='text-center font-sans text-3xl text-amber-950'>Homes For You</h1>
      <p className='text-center text-base font-sans font-light p-2'>Based on your preferences and budget</p>
      <ProductList />
    </div>
    </main>
  )
}


export default HouseModels;





