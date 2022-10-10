import React from 'react';

import {FaQuran} from 'react-icons/fa';
import {BsGlobe} from 'react-icons/bs';
import {CgBowl, CgGym} from 'react-icons/cg';

import Img from '../assets/unsplash 1.png';

const Section = () => {
  return (
    <div className='w-full h-[900px] flex items-center justify-center'>

      <div className='w-[90%] h-full flex flex-col gap-4'>

        <div className='flex flex-col gap-7'>

          <div className='w-full h-[130px] flex flex-col justify-between'>

            <div className='flex flex-col items-center justify-center w-full h-[99%] gap-2'>
              <p className='text-3xl font-bold'>
                Good education for a good future
              </p>
              <p className='font-medium'>
                We help Students connect to the greatest opportunities of their future.
              </p>
            </div>

            <div className='border border-[#6b7aad]' />

          </div>

          <div className='flex justify-between w-full h-[300px]'>
            <div className='hover:bg-[#10287A] hover:text-white w-[25%] flex items-center justify-center'>
              <div className='flex flex-col gap-4'>
                <FaQuran size={40} />
                <p className='text-2xl font-bold'>   
                  Al-Qur'an and
                  <span className='block'>Gifts</span>
                </p>
                <p className='w-[270px]'>
                  Be guided and have a noble character in accordance with the teachings of the Prophet Muhammad SAW
                </p>
              </div>
            </div>
            <div className='hover:bg-[#10287A] hover:text-white w-[25%]  flex items-center justify-center'>
              <div className='flex flex-col gap-4'>
                <BsGlobe size={40} />
                <p className='text-2xl font-bold'>   
                  Computer and
                  <span className='block'>Technology</span>
                </p>
                <p className='w-[270px]'>
                  Keeping up with the technology of the times to make it easier for students
                </p>
              </div>
            </div>
            <div className='hover:bg-[#10287A] hover:text-white w-[25%]  flex items-center justify-center'>
              <div className='flex flex-col gap-4'>
                <CgGym size={40} />
                <p className='text-2xl font-bold'>   
                  Sports and
                  <span className='block'>Martial Arts</span>
                </p>
                <p className='w-[270px]'>
                  Maintaining health and equipping students with self-defense
                </p>
              </div>
            </div>
            <div className='hover:bg-[#10287A] hover:text-white w-[25%]  flex items-center justify-center'>
              <div className='flex flex-col gap-4'>
                <CgBowl size={40} />
                <p className='text-2xl font-bold'>   
                  Food & 
                  <span className='block'>Drink</span>
                </p>
                <p className='w-[270px]'>
                  Good nutrition for growing children
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className='w-full flex flex-col gap-7 relative'>

          <div className='flex flex-col gap-4'>
            <p className='text-3xl font-bold'>
              Learning Experience
              <span className='block'>unique and fun</span>
            </p>
            <p className='w-[500px]'>
              Berikan anak Anda pengalaman belajar terbaik, yang dirancang untuk menginspirasi minat mereka untuk menjadi pembelajar yang kreatif dan mandiri.
            </p>
          </div>

          <div className='bg-[#10287A] w-full h-[200px] flex text-white'>
            <div className='w-[25%] flex flex-col items-center justify-center'>
              <p className='text-3xl font-bold'>20+</p>
              <p>Professional Teacher</p>
            </div>
            <div className='w-[25%] flex flex-col items-center justify-center'>
              <p className='text-3xl font-bold'>360+</p>
              <p>Professional Teacher</p>
            </div>
          </div>

        <div className='w-[550px] h-[200px] absolute top-0 right-0'>
          <img src={Img} alt='img' className='object-contain' />
        </div>

        </div>


      </div>

    </div>
  )
}

export default Section