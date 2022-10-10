import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='bg-[#10287A] flex w-[100%] h-[55px] text-[#fff] font-semibold'>
        <div className='flex w-[90%] h-full m-auto items-center justify-between'>
            <div>Logo</div>
            <div>
                <ul className='flex gap-10 items-center'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/about'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/about'>Projects</Link>
                    </li>
                    <li className='ml-10 w-[90px] h-[30px] flex items-center justify-center border border-[#FFD600] font-bold text-xl text-[#FFD600]'>
                        <Link to='/about'>List</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    </>
  );
}

export default Navbar;