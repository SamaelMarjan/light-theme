import React from 'react';

import Img1 from '../assets/Group 1.png';

const Hero = () => {
  return (
    <div className='bg-[#10287A] w-full h-[500px]'>
      <div className='w-[90%] h-full m-auto flex flex-col'>
        <div className='w-full h-[400px] flex'>
          <div className='w-[50%] h-[80%] flex flex-col justify-center text-white'>
            <p>
              Quality Education,
              <span className='block'>Quality Student</span>
            </p>
            <p>
              Di SEKOLA, anak Anda akan mendapatkan pendidikan yang berkualitas dan dikelilingi oleh lingkungan yang Ideal untuk Pertumbuhannya.
            </p>
          </div>
          <div className='w-[50%] h-[80%] flex justify-center mt-[50px]'>
            <img src={Img1} alt='img' />
          </div>
        </div>
        <div>2</div>
      </div>
    </div>
  );
}

export default Hero;