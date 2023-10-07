import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchAllProductsAsync,
  fetchBhksAsync, fetchLocationsAsync, fetchPriceRangesAsync, fetchSqftAsync,
  fetchProductsByFiltersAsync,
  selectAllProducts,
  selectBhk, selectLocations, selectPriceRanges, selectSqft
} from '../productSlice.js';

import { Link } from 'react-router-dom';

import { Property } from '../../assets/images/index.js';




export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts)
  const locations = useSelector(selectLocations)
  const priceranges = useSelector(selectPriceRanges)
  const bhk = useSelector(selectBhk)
  const sqft = useSelector(selectSqft)

  const [filter, setFilter] = useState({});

  const filters = [
    {
      id: 'locations',
      name: 'Locations',
      options: locations,
    },
    {
      id: 'priceranges',
      name: 'PriceRanges',
      options: priceranges
    },
    {
      id: 'bhk',
      name: 'BHK',
      options: bhk
    },
    {
      id: 'sqft',
      name:"SQFT",
      options: sqft
    }
  ]

  // useEffect(() => {
  //   dispatch(fetchAllProductsAsync())
  // }, [dispatch])

  useEffect(() => {    
    dispatch(fetchProductsByFiltersAsync(filter));
  }, [dispatch, filter]) //eslint-disable-line


  useEffect(()=>{
    dispatch(fetchLocationsAsync());
    dispatch(fetchPriceRangesAsync());
    dispatch(fetchBhksAsync());
    dispatch(fetchSqftAsync());
  },[]) //eslint-disable-line

  const handleFilter = async (e) => {
    let data = e.target.value;
    data = JSON.parse(data)
    console.log(data);
    
    const newFilter = { ...filter, [data.id]: data.value };
    setFilter(newFilter);
    console.log(filter)
    // console.log(newFilter)
    dispatch(fetchProductsByFiltersAsync(newFilter));
    // console.log(e.target.value);
    // console.log(section.id, option.value);
  };



  return (
    <>
    <section className='relative pb-10  w-100% h-[70vh] '>
        <img src={Property} alt="images" className='w-full h-full object-cover'/>           
    </section>
    <Filter handleFilter={handleFilter} filters={filters}/>
    <div className='flex flex-col  justify-center mt-20'>
      <h1 className='text-center font-sans text-3xl text-amber-950'>Homes For You</h1>
      <p className='text-center text-base font-sans font-light p-2'>Based on your preferences and budget</p>
    <ProductGrid products={products}></ProductGrid>
    </div>   
    </>
  );

  function ProductGrid({products} ) {
    return (
      <div className="lg:col-span-3 mb-10">
        {/* This is our product lit */}
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 md:max-w-4xl lg:max-w-7xl lg:px-8">


            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <Link to={`/product-detail/${product.id}`} key={product.id}>
                <div className="group relative  rounded-md p-3 shadow-lg shadow-neutral-200">
                  <div className=" min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60 ">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <div >
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.title}
                          <p className="text-sm  font-medium text-black">{product.location}</p>
                        </div>
                      </h3>

                    </div>
                    <div>
                      <p className="text-sm  font-medium text-gray-800">₹{product.price}</p>

                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>);
  }
  function Filter({handleFilter,filters}){
    return (
      <div className="md:max-w-[80%] w-full mx-auto relative -mt:10 md:-mt-20">
        <div className="flex-col gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row bg-white card card-shadow dark:shadow-none">
        {filters.map((section) => {
          return(
          <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
              <h1 className="font-bold">{section.name}</h1>
              <div className="flex-align-center gap-x-2">
                {/* <BiBuildings />          */}
               
                <select
                  name={`${section.name}[]`}
                  id={`${section.id}`}
                  className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
                  onChange={handleFilter}
                >
                   <option value={"choose"} >{filter[`${section.id}`]?`${filter[`${section.id}`]}`: 'choose'}</option>
                   {
                   section.options.map((option,optionIdx) => {
                    
                      if(option.label !== filter[`${section.id}`]){
                        return (
                          <option id={`filter-${section.id}-${optionIdx}`} value={JSON.stringify({value:option.value, id:section.id})}  name={`${section.id}[]`}>
                            {option.label}
                          </option>
                        )
                      } else return (<></>);
                   }
                  )}
                </select>
                
               
              </div>
             
            </div>
          </div>
  )})}
          
          
        </div>
      </div>
    );
 
  }
}


