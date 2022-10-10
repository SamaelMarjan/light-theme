import React from 'react';

import {CgAdidas} from 'react-icons/cg';
import {FaFacebookF} from 'react-icons/fa';
import {BsMicrosoft} from 'react-icons/bs';

import Img1 from '../assets/Group 1.png';

const Hero = () => {
  return (
    <div className='bg-[#10287A] w-full h-[550px]'>

      <div className='w-[90%] h-full m-auto flex flex-col'>

        <div className='w-full h-[400px] flex'>

          <div className='w-[50%] h-[300px] flex flex-col mt-[80px] text-white gap-5'>

            <div className='flex flex-col gap-5'>
              <p className='text-5xl font-bold'>
                Quality Education,
                <span className='block'>Quality Student</span>
              </p>
              <p className='w-[450px]'>
                Di SEKOLA, anak Anda akan mendapatkan pendidikan yang berkualitas dan dikelilingi oleh lingkungan yang Ideal untuk Pertumbuhannya.
              </p>
            </div>
            
            <div className='mt-[40px] w-[150px] h-[40px] border border-[#FFD600] text-[#FFD600] font-bold flex items-center justify-center'>
              <button>Sign up now</button>
            </div>

          </div>

          <div className='w-[50%] h-[80%] flex justify-center mt-[50px]'>
            <img src={Img1} alt='img' />
          </div>

        </div>
        <div className='flex flex-col gap-4 text-white'>
          <div className='border border-[#6b7aad] w-[300px]' />
          <div>
            <p>
              supported by :
            </p>
            <div className='flex w-[300px] h-[90px] items-center gap-10'>
              <CgAdidas size={80} />
              <FaFacebookF size={50} />
              <BsMicrosoft size={50} />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Hero;