import React from 'react'
import './CertiCards.css'
import img1 from '../../assets/images/Certifications/Standford.png'

const Card = ({Icon, Header, text, image}) => {
  return (
    <div
        class="glass w-[100%] h-[400px] lg:h-[500px] lg:w-[90%] pb-20 group relative cursor-pointer overflow-hidden px-6 pt-10 shadow-xl ring-1 ring-gray-900/5 hover:shadow-2xl rounded-[10%] sm:px-10">
        <div class="relative z-10">
            <span class="grid h-28 w-[20%] place-items-center rounded-full text-6xl lg:text-8xl text-green-500 ease-in-out bg-black transition-all duration-300 delay-100 group-hover:bg-transparent group-hover:text-white">
                {Icon}
            </span>
        <div className='my-10'>
            {/* <div className="hidden hover:block">
            <h1 className='text-5xl md:text-6xl font-bold'>{Header}</h1>
            <br />
            <p className='text-3xl w-[90%]'>{text}</p>
            </div>

            <div className="block hover:hidden">
            <img src={img1} alt="" srcset="" />
            </div> */}
            <div class="group relative  h-auto"> 
                 <div className="w-full h-full object-cover group-hover:hidden shadow-md rounded-3xl">
                 <img src={image} alt="" srcset="" class="w-full h-full object-cover group-hover:hidden rounded-[6%]" /> 
                 </div>
                 <div class="w-full h-full text-container absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-100 transition duration-300  text-center text-white">  
                    <h1 class="text-5xl md:text-6xl font-bold">{Header}</h1>
                    <br />
                    <p class="text-3xl w-[90%]">{text}</p>
                    <br />
                    <button type="button" className='p-[4%] rounded-full text-4xl hover:bg-green-500 font-bold'>
                        <a href="" className='p-[4%]'>Link</a>
                    </button>
            </div>
        </div>

        </div>

        </div>
    </div>
// </div>
  )
}

export default Card
