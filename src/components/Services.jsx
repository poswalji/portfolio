import React, { useState } from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import services_data from '../assets/services_data';
import arrow_icon from '../assets/arrow_icon.svg';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div id='services' className='flex flex-col items-start md:items-center justify-center gap-20 md:my-[80px] my-[50px] mx-[70px] md:mx-[170px]'>
      <div className='relative'>
        <h1 className='md:py-0 p-0 md:px-[30px] text-[50px] md:text-[80px] font-semibold'> Services</h1>
        <img className=' w-[120px] md:w-max  absolute bottom-0 right-0 z-[-1]' src={theme_pattern} alt=''/>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-10 gap-[30px] mb-20">
        {services_data.map((service, index) => (
          <div key={index} className='flex flex-col justify-center gap-5 md:p-[60px] p-[32px] rounded-[10px] border-[2px] border-solid border-white duration-300 cursor-pointer hover:border-[#ff00ff] hover:scale-[1.05] hover:bg-[linear-gradient(45deg,#3f0028,black)]'>
            <h3 className='text-[28px] font-semibold'>{service.s_no}</h3>
            <h2 className='md:text-[38px] text-[28px] font-extrabold text-gradient bg-gradient-to-r from-[#DA7C25] to-[#b923E1] text-transparent bg-clip-text'>{service.s_name}</h2>
            <p className='text-[18px] leading-[32px] max-w-[300px]'>
              {expandedService === index ? service.s_desc : `${service.s_desc.slice(0, 40)}...`}
            </p>
            <div className="flex gap-5 items-center mt-5">
              <p 
                className='text-[#d4d4d4] md:text-[24px] text-[18px] max-w-[300px] cursor-pointer'
                onClick={() => toggleReadMore(index)}
              >
                {expandedService === index ? 'Show Less' : 'Read More'}
              </p> 
              <img className='w-5' src={arrow_icon} alt="arrow icon" /> 
            </div> 
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services;
