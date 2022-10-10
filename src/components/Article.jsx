import React from 'react';

import Img1 from '../assets/Rectangle 10.png';
import Img2 from '../assets/Rectangle 111.png';
import Img3 from '../assets/Rectangle 12.png';
import Img4 from '../assets/Rectangle 13.png';
import Img5 from '../assets/Rectangle 14.png';
import Img6 from '../assets/Rectangle 15.png';

const Article = () => {
  return (
    <div className='w-full h-full mt-10'>
      <div className='w-[90%] h-[1250px] m-auto flex flex-col items-center gap-4'>
        <div className='w-full h-[50px] flex items-center justify-center'>
          <p className='text-3xl font-bold'>Article</p>
        </div>
        <div className='grid grid-cols-3 w-full gap-10'>
          <div className='w-[100%] h-[550px]'>
            <div className='w-full h-[60%]'>
              <img src={Img1} alt='img' className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col w-full h-[40%] justify-between'>
              <p className='font-bold'>
                2nd and 3rd Place Design CompetitionPoster
                by SEKOLA | Jun 3, 2022 | Article
              </p>
              <p className='text-xs text-[#999]'>
                by SEKOLA | Jun 3, 2022 | Artikel 
              </p>
              <p className='text-sm'>
                HAPPY WINNER 2 AND 3 POSTER DESIGN COMPETITION. Alhamdulillah SEKOLA consistently won every poster competition. Contestants are...
              </p>
              <button className='bg-[#10287A] flex w-full h-[40px] items-center justify-center mt-[10px] text-[#FFD600]'> MORE</button>
            </div>
          </div>
          <div className='w-[100%] h-[550px]'>
          <div className='w-full h-[60%]'>
              <img src={Img2} alt='img' className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col w-full h-[40%] justify-between'>
              <p className='font-bold'>
                2nd and 3rd Place Design CompetitionPoster
                by SEKOLA | Jun 3, 2022 | Article
              </p>
              <p className='text-xs text-[#999]'>
                by SEKOLA | Jun 3, 2022 | Artikel 
              </p>
              <p className='text-sm'>
                HAPPY WINNER 2 AND 3 POSTER DESIGN COMPETITION. Alhamdulillah SEKOLA consistently won every poster competition. Contestants are...
              </p>
              <button className='bg-[#10287A] flex w-full h-[40px] items-center justify-center mt-[10px] text-[#FFD600]'> MORE</button>
            </div>
          </div>
          <div className='w-[100%] h-[550px]'>
          <div className='w-full h-[60%]'>
              <img src={Img3} alt='img' className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col w-full h-[40%] justify-between'>
              <p className='font-bold'>
                2nd and 3rd Place Design CompetitionPoster
                by SEKOLA | Jun 3, 2022 | Article
              </p>
              <p className='text-xs text-[#999]'>
                by SEKOLA | Jun 3, 2022 | Artikel 
              </p>
              <p className='text-sm'>
                HAPPY WINNER 2 AND 3 POSTER DESIGN COMPETITION. Alhamdulillah SEKOLA consistently won every poster competition. Contestants are...
              </p>
              <button className='bg-[#10287A] flex w-full h-[40px] items-center justify-center mt-[10px] text-[#FFD600]'> MORE</button>
            </div>
          </div>
          <div className='w-[100%] h-[550px]'>
            <div className='w-full h-[60%]'>
              <img src={Img4} alt='img' className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col w-full h-[40%] justify-between'>
              <p className='font-bold'>
                2nd and 3rd Place Design CompetitionPoster
                by SEKOLA | Jun 3, 2022 | Article
              </p>
              <p className='text-xs text-[#999]'>
                by SEKOLA | Jun 3, 2022 | Artikel 
              </p>
              <p className='text-sm'>
                HAPPY WINNER 2 AND 3 POSTER DESIGN COMPETITION. Alhamdulillah SEKOLA consistently won every poster competition. Contestants are...
              </p>
              <button className='bg-[#10287A] flex w-full h-[40px] items-center justify-center mt-[10px] text-[#FFD600]'> MORE</button>
            </div>
          </div>
          <div className='w-[100%] h-[550px]'>
            <div className='w-full h-[60%]'>
              <img src={Img5} alt='img' className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col w-full h-[40%] justify-between'>
              <p className='font-bold'>
                2nd and 3rd Place Design CompetitionPoster
                by SEKOLA | Jun 3, 2022 | Article
              </p>
              <p className='text-xs text-[#999]'>
                by SEKOLA | Jun 3, 2022 | Artikel 
              </p>
              <p className='text-sm'>
                HAPPY WINNER 2 AND 3 POSTER DESIGN COMPETITION. Alhamdulillah SEKOLA consistently won every poster competition. Contestants are...
              </p>
              <button className='bg-[#10287A] flex w-full h-[40px] items-center justify-center mt-[10px] text-[#FFD600]'> MORE</button>
            </div>
          </div>
          <div className='w-[100%] h-[550px]'>
            <div className='w-full h-[60%]'>
              <img src={Img6} alt='img' className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col w-full h-[40%] justify-between'>
              <p className='font-bold'>
                2nd and 3rd Place Design CompetitionPoster
                by SEKOLA | Jun 3, 2022 | Article
              </p>
              <p className='text-xs text-[#999]'>
                by SEKOLA | Jun 3, 2022 | Artikel 
              </p>
              <p className='text-sm'>
                HAPPY WINNER 2 AND 3 POSTER DESIGN COMPETITION. Alhamdulillah SEKOLA consistently won every poster competition. Contestants are...
              </p>
              <button className='bg-[#10287A] flex w-full h-[40px] items-center justify-center mt-[10px] text-[#FFD600]'> MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article