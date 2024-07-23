import React from 'react'
import Card from './Card'
import Bussiness from '../../assets/images/Bussiness.jpg'
import Fest from '../../assets/images/fest.jpg'
import Search from '../../assets/images/Search.jpg'
import Expense from '../../assets/images/Expense.avif'




const Features = () => {
  return (
    <div className='w-[100%] h-auto ' id='PROJECTS'>
        <h1 className='text-8xl pt-20 lg:pl-32 font-extrabold text-center lg:text-start'>Projects :</h1>
        <br />
        <br />
            <div className="flex justify-center h-auto">
            <div className='w-[95%] grid justify-around grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 lg:gap-40'>
            <Card image={Bussiness} text="Internship Project" link="https://silver9876.github.io/task3" title="Bussiness portfolio" />
            <Card image={Fest} text={'Fest Project'} link="https://silver9876.github.io/matrix-website/" title={'Fest Website'}/>
            <Card image={Search} text={'Personal Project'} link="https://silver9876.github.io/image_search_app/" title={'Image Search App'}/>
            <Card image={Expense} text={'Open Source Project'} link="https://shrey141102.github.io/Javascript-projects/expense%20tracker/index.html" title={'Expense Tracker'}/>

    </div>  
      </div>
    </div>
  )
}

export default Features
