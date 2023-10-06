import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByIdAsync, selectProductById } from '../productSlice.js';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar.jsx';
import Footer from '../../components/Footer.jsx';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';




export default function ProductDetails() {

  const product = useSelector(selectProductById);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductByIdAsync(id))
  }, []); //eslint-disable-line

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Check the screen size when the component mounts and on window resize
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the breakpoint as needed
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 


  return (
    <div className="bg-white">
      <Navbar />
      {product!=null && <div className="pt-6">
      <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
    {isSmallScreen ? (
      // Display a carousel for small screens
      <div className="lg:hidden">
        <Carousel>
          {product.images.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    ) : (
      // Display individual images for large screens
      <>
      <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-full w-full object-cover object-center"
      />
    </div>
    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
      <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
        <img
          src={product.images[1]}
          alt={product.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg lg:block">
        <img
          src={product.images[2]}
          alt={product.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden ">
      <img
        src={product.images[3]}
        alt={product.title}
        className="h-full w-full object-cover object-center"
      />
    </div>
    </>
    )}
  </div>


        {/* Product info */ }
  <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
      <h1 className="text-2xl font-bold tracking-tight text-[#3D0C11] sm:text-3xl">{product.title}</h1>
    </div>

    {/* Options */}
    <div className="mt-4 lg:row-span-3 lg:mt-0">
      <h2 className="sr-only">Product information</h2>
      <p className="text-3xl tracking-tight text-gray-900">Rs. {product.price}</p>
      <h2 className="text-xl font-medium text-[#3D0C11] mt-5">Details</h2>
      <div className='flex flex-col mt-5'>
        <p className='text-base py-2'>📍 {product.location}</p>
        <p className='text-base py-2'>🏠 {product.bhk} BHK</p>
        <p className='text-base py-2'>📐 {product.sqft} sqft</p>
      </div>
  



      <button
        type="submit"
       
         className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium  bg-gradient-to-tr from-rose-500 to-[#3D0C11]  text-white border-[#f9d959]">
        View in AR
      </button>

    </div>

    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
      {/* Description and details */}
      <div>
        <h3 className="sr-only">Description</h3>

        <div className="space-y-6">
          <p className="text-base text-gray-900">{product.description}</p>
        </div>
      </div>


      <div className="mt-10">
        <h2 className="text-xl font-medium text-[#3D0C11]">Home Highlights</h2>
        <p className="text-sm text-gray-600 py-5">Select from a range of home highlights to personalize and enhance your pre-built model.</p>
        <div className="mt-4 space-y-6">
        <div className='text-black flex gap-2 mt-4 flex-wrap' key={product.id}>
        <p className="bg-[#b2202018] px-4 py-1 rounded-full"> 🚘 Parking</p>
        <p className="bg-[#b2202018] px-4 py-1 rounded-full"> ♻️ Solar Panel</p>
        <p className="bg-[#b2202018] px-4 py-1 rounded-full"> 🌡️ Centralised AC</p>
        <p className="bg-[#b2202018] px-4 py-1 rounded-full"> 🧯 Fire extinguisher</p>
        <p className="bg-[#b2202018] px-4 py-1 rounded-full"> 🔶 Floor Type</p>
        <p className="bg-[#b2202018] px-4 py-1 rounded-full"> 🏞️ Garden</p>
        </div>
        </div>
      </div>
    </div>
  </div>
      </div >}
      <section className="bg-[#3D0C11] padding-x  ">
    <Footer />
  </section>
    </div >
    
)
}
