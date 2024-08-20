import React, { useState } from 'react';
import theme_pattern from '../assets/theme_pattern.svg';
import mail_icon from '../assets/mail_icon.svg';
import location_icon from '../assets/location_icon.svg';
import call_icon from '../assets/call_icon.svg';

const Contect = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "64847ffd-330d-42f6-a687-7cdb8fdf3e82");

    setIsSubmitting(true);
    setResult("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      alert("Thank you for your message. We'll get back to you soon!");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult("There was an error submitting the form. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      id='contect'
      className='flex flex-col items-start md:items-center justify-center gap-20 md:my-[80px] my-[50px] mx-[70px] md:mx-[170px]'
    >
      <div className='relative'>
        <h1 className='md:py-0 p-0 md:px-[30px] text-[50px] md:text-[80px] font-semibold'>Get in touch</h1>
        <img className='w-[120px] md:w-max absolute bottom-0 right-0 z-[-1]' src={theme_pattern} alt='' />
      </div>
      <div className='flex flex-col md:flex-row gap-[150px]'>
        <div className='flex flex-col gap-[30px]'>
          <h1 className='md:text-[80px] text-[54px] font-bold text-gradient bg-[linear-gradient(270deg,_#df8908_80%,_#bf15ff_90%)] text-transparent bg-clip-text'>
            Let's talk
          </h1>
          <p className='max-w-[550px] text-[#d8d8d8] md:text-[20px] text-[18px] leading-9'>
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want to work on. You can contact anytime.
          </p>
          <div className='flex flex-col md:gap-[30px] gap-5 text-[#d8d8d8] text-[22px]'>
            <div className='flex w-[25px] md:w-max items-center gap-5'>
              <img src={mail_icon} alt='' />
              <p>maluramgurjar64@gmail.com</p>
            </div>
            <div className='flex w-[25px] md:w-max items-center gap-5'>
              <img src={call_icon} alt='' />
              <p>+91 9358992352</p>
            </div>
            <div className='flex w-[25px] md:w-max items-center gap-5'>
              <img src={location_icon} alt='' />
              <p>
                Talamod, near by Amity University, Jaipur, Pin code - 303002
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='flex flex-col items-start gap-[30px]'>
          <label className='text-[#d8d8d8] text-[20px] md:text-[22px] font-medium'>Enter Name</label>
          <input
            className='border-none w-[100%] md:w-[700px] h-[78px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] text-[20px]'
            type='text'
            placeholder='Type here'
            name='name'
            required
          />
          <label className='text-[#d8d8d8] text-[20px] md:text-[22px] font-medium'>Enter Email</label>
          <input
            className='border-none w-[100%] md:w-[700px] h-[78px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] text-[20px]'
            type='email'
            placeholder='Type here'
            name='email'
            required
          />
          <label className='text-[#d8d8d8] text-[20px] md:text-[22px] font-medium'>
            Write your message here
          </label>
          <textarea
            className='w-[95%] md:w-[700px] pl-[20px] rounded-[4px] bg-[#32323c] text-[#a0a0a0] text-[20px]'
            name='message'
            rows='8'
            placeholder='Enter your message'
            required
          ></textarea>
          <button
            type='submit'
            className={`border-none md:py-5 md:px-[60px] py-[15px] px-[40px] rounded-[50px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#b923E1_102.06%)] md:text-[22px] text-[20px] cursor-pointer mb-[50px] duration-300 hover:scale-[1.05] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit now'}
          </button>
        </form>
         
      </div>
     {result && <p className='text-[#d8d8d8] mt-[-20px'>{result}</p>}
    </div>
  );
};

export default Contect;
