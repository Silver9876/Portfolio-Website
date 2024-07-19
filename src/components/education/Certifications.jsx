import React from 'react'
import Card from './CertiCards'
import img1 from '../../assets/images/Certifications/Standford.png'
import { MdOutlineDeveloperMode } from "react-icons/md";

const Certifications = () => {
  return (
<div className='w-[100%] h-auto m-20' >
        <h1 className=' text-5xl lg:text-6xl p-12 lg:pl-32 font-bold text-[#C4CFDE] '>Certifications:</h1>
            <div className="flex justify-center">
            <div className='w-[90%] lg:m-10 grid justify-center lg:grid-cols-2 xl:grid-cols-3 gap-y-20'>

        <Card 
        
            Icon={<MdOutlineDeveloperMode />}
            Header={'Web Development'} 
            text={'Custom coding include react.js and django. Doing Web3.0 Front-end and WordPress'}
            image={img1}
        />

    </div>  
      </div>
    </div>
  )
}

export default Certifications
