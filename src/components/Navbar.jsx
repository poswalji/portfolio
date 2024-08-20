import React, { useRef, useState } from 'react'
import logo from '../assets/BGlogo.png';
import theme_pattern from '../assets/theme_pattern.svg'
import menu_open from '../assets/menu_open.svg'
import menu_close from '../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const [menu,setMenu] =useState("home");
  const menuRef= useRef();
  const openMenu=()=>{
   
    menuRef.current.style.display="flex";
     
  }
  const closeMenu=()=>{
  
      menuRef.current.style.display="none"; 
      
    
       
  }
  return (
    <div className='flex   items-center justify-between md:mx-[170px]  my-5 mx-[50px]   '>
      <img className='h-20' src={logo} alt='' />
      <img onClick={openMenu} className='block fixed cursor-pointer right-[30px] md:hidden' src={menu_open} alt=''/>
      <ul ref={menuRef} className='fixed md:relative top-0 hidden md:flex md:flex-row md:items-center  list-none md:gap-[60px]  text-[25px]    items-start justify-start md:justify-center flex-col   gap-[30px] bg-[#1f0016]  z-[111116] h-[100%] md:z-0 w-[350px]  md:w-max transition-all ease-in-out  duration-500  cursor-pointer  md:bg-transparent right-0 '>
        <img onClick={closeMenu} className='block relative left-[290px] top-[30px] w-[30px] md:hidden'  src={menu_close} alt=''/>
         <li className='text-[30px]  md:pl-0 pl-100px mx-[70px] md:mx-0 flex-row cursor-pointer flex md:flex-col md:justify-center gap-5 md:gap-[5px] ' onClick={()=>setMenu("home")}><AnchorLink className='text-white flex md:flex-col flex-row items-center' href='#home'><p>Home</p>{menu==="home"?<img className='w-[60px] flex justify-center' src={theme_pattern}/>:<></>} </AnchorLink></li>
        <li   className='text-[30px]  md:pl-0 pl-100px mx-[70px] md:mx-0 flex-row cursor-pointer flex md:flex-col md:justify-center gap-5 md:gap-[5px] ' onClick={()=>setMenu("about")}><AnchorLink className='text-white flex md:flex-col flex-row items-center' offset={50} href='#about'><p>About me</p>{menu==="about"?<img className='w-[60px] flex justify-center' src={theme_pattern}/>:<></>} </AnchorLink></li>
      
        <li  className='text-[30px] md:pl-0 pl-100px mx-[70px] md:mx-0 flex-row cursor-pointer flex md:flex-col md:justify-center gap-5 md:gap-[5px] ' onClick={()=>setMenu("services")}><AnchorLink className='text-white flex md:flex-col flex-row items-center' offset={50} href='#services'><p>Services</p>{menu==="services"?<img className='w-[60px] flex justify-center' src={theme_pattern}/>:<></>}</AnchorLink></li>
        <li   className='text-[30px] md:pl-0 pl-100px mx-[70px] md:mx-0 flex-row cursor-pointer flex md:flex-col md:justify-center gap-5 md:gap-[5px] ' onClick={()=>setMenu("portfolio")}><AnchorLink className='text-white flex md:flex-col flex-row items-center' offset={50} href='#work'><p>Portfolio</p>{menu==="portfolio"?<img className='w-[60px] flex justify-center' src={theme_pattern}/>:<></>}</AnchorLink></li>
        <li   className='text-[30px] md:pl-0 pl-100px mx-[70px] md:mx-0 flex-row cursor-pointer flex md:flex-col md:justify-center gap-5 md:gap-[5px] ' onClick={()=>setMenu("contact")}><AnchorLink className='text-white flex md:flex-col flex-row items-center' offset={50} href='#contect'><p>Contect</p>{menu==="contact"?<img className='w-[60px] flex justify-center' src={theme_pattern}/>:<></>}</AnchorLink></li>
      </ul>
     <AnchorLink offset={50} href='#contect'> <div className='hidden md:flex py-5 px-10 rounded-[50px] bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#b923E1_102.06%)] text-[22px] cursor-pointer duration-500 transform hover:scale-[1.05]  '>Conect with me</div>
     </AnchorLink> 
    </div>
  )
}

export default Navbar
