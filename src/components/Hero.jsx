import React from 'react'
import Profile_image from '../assets/cut.jpg'
import resume from '../assets/Malu Ram Gurjar (3).pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {
  return (
    <div  id='home' className='flex items-center flex-col gap-[35px]'>
    <img className=' mt-[120px]    rounded-full md:w-[300px] w-[260px] ' src={Profile_image} alt=''/>
      <p className='text-center md:mt-0 mt-[50px] w-[90%] md:w-[70%] text-[50px] md:text-[90px] font-semibold'><span className='text-gradient bg-gradient-to-r from-[#DA7C25] to-[#b923E1] text-transparent bg-clip-text'> I'm Malu Ram </span>,A frontend web developer</p>
      <p className='w-[60%] md:w-[50%] text-center md:text-[24px] text-[18px] md:leading-[40px] leading-[32px] md:mx-0 my-0 mx-[10px] '> I am a frontend developer from jaipur,INDIA </p>
      <div className='flex items-center gap-[16px] md:gap-[25px] text-[18px] md:text-[24px] font-medium mb-[50px]'>
        <AnchorLink offset={50} href='#contect'><div className='py-[20px] md:py-[22px] md:px-[75px] px-[30px] md:rounded-[50px] rounded-[40px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#b923E1_102.06%)] text-[22px] cursor-pointer  border-2 border-transparent hover:border-white '>Connect with me</div>
        </AnchorLink>
      <div className='py-[20px] md:py-[22px] md:px-[75px] px-[50px] md:rounded-[50px] rounded-[40px] border-2 border-white cursor-pointer  hover:border-purple-500'><a href={resume}>My resume</a> </div>
      </div>
    
    </div>
  )
}

export default Hero
