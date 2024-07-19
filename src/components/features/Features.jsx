import React from 'react'
import Card from './Card'
import { IoGlobeOutline } from "react-icons/io5";
import { FaPenNib } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";






const Features = () => {
  return (
    <div className='w-[100%] h-auto' id='FEATURES' >
        <h1 className='text-6xl lg:text-8xl p-12 lg:pl-32 font-extrabold'>What I Do:</h1>
        <br />
            <div className="flex justify-center">
            <div className=' m-6 lg:m-20 grid justify-center lg:grid-cols-2 xl:grid-cols-3 gap-y-20'>

        <Card 
        
            Icon={<MdOutlineDeveloperMode />}
            Header={'Web Development'} 
            text={'Custom coding include react.js and django. Doing Web3.0 Front-end and WordPress'}
        />


        <Card 
            Icon={<FaPenNib />}
            Header={'UI/UX Design'} 
            text={'Custom coding include react.js and django. Doing Web3.0 Front-end and WordPress'}
        />

        <Card 
            Icon={<IoGlobeOutline />}
            Header={'Machine Learning'} 
            text={'Custom coding include react.js and django. Doing Web3.0 Front-end and WordPress'}
        />

        <Card 
            Icon={<FaCamera />}
            Header={'Photography'} 
            text={'Custom coding include react.js and django. Doing Web3.0 Front-end and WordPress'}
        />

        <Card 
            Icon={<FaLinux />}
            Header={'Linux'} 
            text={'Custom coding include react.js and django. Doing Web3.0 Front-end and WordPress'}
        />

        <Card 
            Icon={<FaChalkboardTeacher />}
            Header={'MentorShip'} 
            text={'Custom coding include react.js and django. Doing Web3.0 Front-end and WordPress'}
        />

    </div>  
      </div>
    </div>
  )
}

export default Features
