import {  BiBuildings } from "react-icons/bi";
import { fetchBhksAsync, fetchLocationsAsync, fetchPriceRangesAsync, fetchSqftAsync, selectBhk, selectLocations, selectPriceRanges, selectSqft } from "./productSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Filters = () => {

const dispatch = useDispatch();
 const locations = useSelector(selectLocations)
 const priceranges = useSelector(selectPriceRanges)
 const bhk = useSelector(selectBhk)
 const sqft = useSelector(selectSqft)

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
  useEffect(()=>{
    dispatch(fetchLocationsAsync());
    dispatch(fetchPriceRangesAsync());
    dispatch(fetchBhksAsync());
    dispatch(fetchSqftAsync());
  },[dispatch])
  return (
    <div className="md:max-w-[80%] w-full mx-auto relative -mt:10 md:-mt-20">
      <div className="flex-col gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row bg-white card card-shadow dark:shadow-none">
      {filters.map((section) => (
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">{section.name}</h1>
            <div className="flex-align-center gap-x-2">
              <BiBuildings />
              {section.options.map((option, optionIdx) => (
              <select
                name={`${section.id}[]`}
                id={`filter-${section.id}-${optionIdx}`}
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70"
              >
                <option defaultValue={option.value}>{option.label}</option>
        
              </select>
               ))}
            </div>
          </div>
        </div>
        ))}
        
        
      </div>
    </div>
  );
};

export default Filters;