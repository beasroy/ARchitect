import React from 'react'
import Navbar from '../components/Navbar'
import { Playstore } from '../assets/images'
import { Download } from '../assets/images'

const Model = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-col w-2/3 max-h-screen justify-center items-center  mx-auto mt-5 rounded-md'>
      {/* <h1 className='text-2xl text-center mt-10'>Architect Apk Drive Link:</h1>
      <div className='h-64'> */}
       <img className='w-[50vh] h-[70vh]'src={Download} />
       <a className='text-xl text-center mt-5 w-full' href='https://drive.google.com/drive/folders/1AiQGz9xkFX16s8WLJYuXsIkqzYvytD_Q?usp=sharing'>
       <button  className="rounded-lg w-1/3 h-12 mb-4 mx-auto bg-gradient-to-tr from-rose-500 to-[#3D0C11]  text-white text-xl hover:scale-105 hover:shadow-md hover:shadow-red-800/60">Download Now</button>
     </a>
      </div>
     
    </>
  )
}

export default Model