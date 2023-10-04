import React from 'react'


const UseCard = ({image , details }) => {


    return (
        <div className='min-h-80 w-full md:ml-4 md:w-[350px] lg:h-80'>
            <div className='bg-_gradient shadow-xl w-full rounded-lg '>
                <img src={image} alt="image" className='rounded-lg h-60 md:h-60 w-full' />

                <div className='p-3'>
                    <p className='text-black font-semibold'>{details}</p>

                </div>
            </div>
        </div>
    )
}

export default UseCard