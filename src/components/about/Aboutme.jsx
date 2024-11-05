import React from 'react'

const Aboutme = () => {
  return (
    <div className='my-14 lg:my-20' id='ABOUT'>
        <h1 className='text-6xl lg:text-8xl font-bold mx-12 lg:mx-32 my-12 lg:my-8 '>About Me :</h1>
        <div className="flex justify-center">
        <div className='w-[90%]'>
      <p className='shadow-xl shadow-black py-8 px-4  lg:py-14 lg:px-10 rounded-3xl text-2xl lg:text-3xl' style={{border:'2px solid white'}}> Aspiring Software Engineer <br />

I'm a passionate software engineer with a keen interest in crafting innovative web applications and delving into the fascinating world of machine learning. My expertise lies in leveraging technologies like React and Django to build dynamic and user-friendly web interfaces.
<br />
I'm constantly exploring new technologies and trends, particularly in the realm of cybersecurity. I believe that a strong foundation in security principles is essential for building robust and resilient software systems.
<br />
I'm excited to contribute my skills and knowledge to challenging projects and collaborate with talented individuals to create impactful solutions.
      </p>
    </div>
        </div>
    </div>
  )
}

export default Aboutme
