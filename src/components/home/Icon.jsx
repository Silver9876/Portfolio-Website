import React from 'react'

const Icon = ({icon, link}) => {
  return (
    <div>
        <div className='hover:text-green-500 w-auto h-auto shadow-md shadow-black flex justify-center items-center p-5 text-5xl transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:duration-500 ... rounded-2xl'>
            <a href={link}>{icon}</a>
        </div>
      
    </div>
  )
}

export default Icon
