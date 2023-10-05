import React from 'react'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductList from '../product-list/component/ProductList';


function HouseModels() {

  return (
    <main >
    <Navbar />
    <ProductList />
    <section className="bg-[#3D0C11] padding-x  ">
              <Footer />
            </section>
    </main>
  )
}


export default HouseModels;





