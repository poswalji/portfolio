import React, { useState } from 'react';
import logo from '../assets/BGlogo.png';
import user_icon from '../assets/user_icon.svg';

const Footer = () => {
  // State to manage the email input
  const [email, setEmail] = useState('');

  // Function to handle subscription
  const handleSubscribe = () => {
    if (email) {
      alert(`Thanks for subscribing with the email: ${email}`);
      // You can add code here to send the email to a backend service
      setEmail(''); // Clear the input field after subscribing
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className='flex flex-col gap-[30px] mb-[30px] md:my-20 my-[50px] md:mx-[170px] mx-[70px]'>
      <div className='flex flex-col md:flex-row justify-between gap-[50px]'>
        <div className='flex flex-col md:w-[50%] w-[100%]'>
          <img className='w-[100px] h-20' src={logo} alt='' />
          <p className='md:text-[25px] text-[20px] max-w-[400px]'>
            I am Malu Ram Gurjar, a passionate front-end developer in my 4th year of Computer Science Engineering.
          </p>
        </div>
        <div className='flex flex-col justify-center items-start md:items-center gap-[15px]'>
          <div className='flex items-center gap-[30px] px-[30px] p-5 rounded-[50px] bg-[#32323b]'>
            <img src={user_icon} alt='' />
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-none pl-[20px] text-[#a0a0a0] bg-[#32323b] md:text-[25px] text-[20px]'
              placeholder='Enter your email'
            />
          </div>
          <button
            onClick={handleSubscribe}
            type='submit'
            className='py-5 px-20 rounded-[50px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#b923E1_102.06%)] md:text-[25px] text-[20px] cursor-pointer duration-500 transform hover:scale-[1.05]'
          >
            Subscribe
          </button>
        </div>
      </div>
      <hr className='bg-white font-normal' />
      <div className='flex w-[100%] justify-center mb-5'>
        <div className='w-[50%]'>
          <p>&copy; 2024 Malu Ram Gurjar. All rights reserved.</p>
        </div>
        <div className='w-[50%] md:flex justify-between gap-5 hidden'>
          <a href='#'>Terms & Conditions</a>
          <a href='#'>Privacy Policy</a>
          <a href='#contect'>Connect with me</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
