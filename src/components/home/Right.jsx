    import React from 'react'
    import slay from '../../assets/images/3d/Saly-13.png';
    import '../../App.css'

    const Right = () => {
    return (
        
        <div className='w-[100%] lg:w-1/2 lg:h-96 flex justify-center lg:flex-col lg:justify-start'>
            <div className="flex lg:justify-center xl:mt-72">
                <div className="xl:shadow-2xl xl:shadow-black xl:w-[600px] lg:flex lg:justify-center xl:h-[300px] lg:items-end rounded-[30px]">
                    <div className="w-[100%] flex justify-center  xl:w-3/4 xl:p-10 ">
                        <img src={slay} alt="Personal Portfolio Images" className='lg:w-full lg:shadow-xl lg:shadow-black transition ease-in-out hover:-translate-y-1 hover:scale-105  duration-300 ... rounded-[20%]' />
                    </div>
                </div>    
            </div>
        </div>

    )
    }

    export default Right
