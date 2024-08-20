import React from 'react'
 import theme_pattern from '../assets/theme_pattern.svg'
import Profile_image from '../assets/cut.jpg'
const About = () => {
  return (
    <div id='about' className='flex flex-col items-start    md:items-center justify-center gap-20 md:my-[80px] my-[50px] mx-[70px] md:mx-[170px]'>
      <div className='relative'>
        <h1 className='md:py-0 p-0 md:px-[30px] text-[50px] md:text-[80px] font-semibold'>About me</h1>
        <img className=' w-[120px] md:w-max  absolute bottom-0 right-0 z-[-1]' src={theme_pattern} />
      </div>
      <div className='flex md:flex-row  flex-col gap-20'>
        <div className='hidden md:flex'>
      <img className=' h-full w-full' src={Profile_image}  />
      </div>
      <div className='flex flex-col gap-[80px]'>
        <div className='flex flex-col gap-5 text-[18px] md:text-[24px] font-medium leading-[32px]'>
            <p>I am Malu Ram Gurjar, a passionate front-end developer in my 4th year of Computer Science Engineering.  </p>
            <p>My experience includes developing diverse projects such as a Tic-Tac-Toe game, a music streaming app named 'Melodify'. </p>
            <div className='flex flex-col gap-5 '>
                <div className='flex md:gap-[50px]  gap-5 items-center duration-300 hover:scale-[1.05]'>
                    <p className='min-w-[150px] md:text-[24px] text-[20px] font-semibold'>HTML</p>
                    <hr className='outline-none border-none w-[60%] md:h-2 h-[6px] rounded-[50px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#b923E1_102.06%)] '/>
                </div>
                  <div className='flex md:gap-[50px]  gap-5 items-center duration-300 hover:scale-[1.05]'>
                    <p className='min-w-[150px] md:text-[24px] text-[20px] font-semibold'>CSS</p>
                    <hr className='outline-none border-none w-[50%] md:h-2 h-[6px] rounded-[50px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#b923E1_102.06%)] '/>
                </div>
                  <div className='flex md:gap-[50px]  gap-5 items-center duration-300 hover:scale-[1.05]'>
                     <p className='min-w-[150px] md:text-[24px] text-[20px] font-semibold'>JavaScript</p>
                    <hr className='outline-none border-none w-[55%] md:h-2 h-[6px] rounded-[50px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#b923E1_102.06%)]  '/>
                </div>
                  <div className='flex md:gap-[50px]  gap-5 items-center duration-300 hover:scale-[1.05]'>
                    <p className='min-w-[150px] md:text-[24px] text-[20px] font-semibold'>React JS</p>
                    <hr className='outline-none border-none w-[50%] md:h-2 h-[6px] rounded-[50px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#b923E1_102.06%)]  '/>
                </div>
            </div>
        </div>

      </div>
      </div>
      <div className='flex w-[100%] md:justify-around justify-between mb-[80px]'>
        <div className='flex flex-col items-center gap-[10px] duration-500 hover:scale-[1.12]'>
            <h1 className='md:text-[60px] text-[34px] font-semibold bg text-[60px]text-gradient bg-gradient-to-r from-[#DA7C25] to-[#b923E1] text-transparent bg-clip-text '>2+</h1>
            <p className='text-center md:text-[22px] text-[16px]  font-medium'> INTERNSHIP EXPERIENCE</p>
            
        </div>
       <div className='md:h-[150px] h-[120px]  md:border-l-4 border-l-[3px] border-white'></div>
            <div className='flex flex-col items-center gap-[10px] duration-500 hover:scale-[1.12]'>
                <h1 className='md:text-[60px] text-[34px] font-semibold bg text-[60px]text-gradient bg-gradient-to-r from-[#DA7C25] to-[#b923E1] text-transparent bg-clip-text '>20+</h1>
               <p className='text-center md:text-[22px] text-[16px]  font-medium'>PROJECTS WITH CERTIFICATE</p>

            </div>
          <div className='md:h-[150px] h-[120px]  md:border-l-4 border-l-[3px] border-white'></div>
            <div className='flex flex-col items-center gap-[10px] duration-500 hover:scale-[1.12]'>
             <h1 className='md:text-[60px] text-[34px] font-semibold bg text-[60px]text-gradient bg-gradient-to-r from-[#DA7C25] to-[#b923E1] text-transparent bg-clip-text '>400+ </h1>
              <p className='text-center md:text-[22px] text-[16px]  font-medium'>PROBLEM SOLVED  </p>
            </div>
        

      </div>
    </div>
  )
}

export default About
