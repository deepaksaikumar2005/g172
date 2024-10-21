import React, { useState } from 'react';
import {Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.webp'; // Correct logo import
import search from '../assets/search.jpg';
import profile from '../assets/profile.jpg';
import photo from '../assets/photo.png';
import menu from '../assets/menu.png';
import arrow from '../assets/arrow.png';
const Navbar = () => {
    const [visible,setVisible] = useState(false);
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <img src={logo} className="w-10" alt="logo" />
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to="/" className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to="/about" className='flex flex-col items-center gap-1 '>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to="/contact" className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to="/login" className='flex flex-col items-center gap-1'>
                <p>Login</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img src={search} alt="" className='w-6 cursor-pointer'/>
            <div className='group relative'>
                <Link to='/login'> <img src={profile} alt="" className='w-6 cursor-pointer'/></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My profile</p>
                        <p className='cursor-pointer hover:text-black'>log out</p>
                        {/* <p className='cursor-pointer hover:text-black'></p> */}
                    </div>
                </div>
            </div>
            <Link to="/" className='relative'>
            <img src={photo} alt="" className='w-6 cursor-pointer'/>
            <p className='absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded texr-[8px]'></p>
            </Link>
            <img onClick={()=>setVisible(true)} src={menu} alt="" className='w-6 cursor-pointer'/>
        </div>
        {/*sidebar menu for small screen*/}
        <div className={`absolute top-0 right-0 bottom-0 onerflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)}  className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img src={arrow} alt="" className='h-4 rotate-90'/>
                    <p>Back</p>
                </div>
                <NavLink to='/' className='py-2 pl-6 border'>Home</NavLink>
                <NavLink to='/about' className='py-2 pl-6 border'>About</NavLink>
               <NavLink to='/contact' className='py-2 pl-6 border'>Contact</NavLink>
               <NavLink to='/login' className='py-2 pl-6 border'>login</NavLink>
            </div>
           
        </div>
    </div>
  );
};

export default Navbar;
