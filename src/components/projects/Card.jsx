import React from 'react'
import './Cards.css'

const Cards = ({image, text, link, title}) => {
  return (
    <div className='outer'>
      {/* min-w-[350px] sm:min-w-[400px] sm:max-w-[500px] sm:max-h-[500px] md:min-w-[500px] md:max-w-[700px] min-h-[400px] lg:max-w-[900px] */}
      <div className="container w-[90%] lg:w-[100%]">
    <div className="card">
      <div className="front bg-transparent flex justify-center items-center h-auto p-10">
        <img src={image}  alt="" className='lg:w-[100%]  rounded-2xl '/>
      </div>
      <div className="back bg-transparent h-auto p-10">
        <h1 className='text-white text-8xl text-center  '>{title}</h1>
        <p>{text}</p>
        <button type='submit' className='w-1/2 h-20 hover:bg-green-700 text-4xl font-bold hover:text-white text-center '><a href={link} className='px-36  hover:text-white text-center'>Website</a></button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Cards
