import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[#10287A] w-full h-[300px] flex items-center text-white'>
      <div className='w-[90%] h-[90%] m-auto'>
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
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default Footer;