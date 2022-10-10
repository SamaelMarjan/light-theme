import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#10287A] w-full h-[300px] flex items-center text-white'>
      <div className='w-[90%] h-[75%] m-auto flex flex-col justify-between'>
        <div className='flex justify-between'>
          <div>
            <div>Logo</div>
            <div>
              Quality Education,
              Quality Student
            </div>
          </div>
          <div>
            <div>
              News Category
            </div>
            <div>
              <p>Article</p>
              <p>Extracurricular</p>
              <p>Student Information</p>
              <p>School Info</p>
            </div>
          </div>
          <div>
            <div>Link</div>
            <div>
              <p>Home page</p>
              <p>Profile</p>
              <p>Gallery</p>
              <p>PPDB</p>
            </div>
          </div>
          <div>
            <div>Address</div>
            <div>
              <p>loc</p>
              <p>phone</p>
              <p>mobile</p>
              <p>email</p>
            </div>
          </div>
        </div>
        <div className='border border-[#fff]' />
        <div className='flex justify-center items-center'>
          <p>Copyright © 2022 <span className='font-bold'><span className='text-[#FFD600]'>SAM</span>AEL</span>. All rigths reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;