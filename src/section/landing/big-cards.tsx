import SectionWrapper from '@/components/animations/section.animation';
import React from 'react';

const BigCards = () => {
  return (
    <SectionWrapper>
      <section>
        <div className='mx-auto mt-36 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <header className='text-start'>
            <h2 className='text-2xl font-semibold uppercase text-black md:text-3xl'>
              Retro Collections
            </h2>
          </header>
          <ul className='mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4'>
            <li>
              <a href='#' className='group relative block'>
                <img
                  src='/images/big-img1.jpg'
                  alt=''
                  className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                />
                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Casual Trainers
                  </h3>
                </div>
              </a>
            </li>
            <li>
              <a href='#' className='group relative block'>
                <img
                  src='/images/big-img2.jpg'
                  alt=''
                  className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                />
                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Winter Jumpers
                  </h3>
                </div>
              </a>
            </li>
            <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
              <a href='#' className='group relative block'>
                <img
                  src='/images/big-img5.jpg'
                  alt=''
                  className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                />
                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Skinny Jeans Blue
                  </h3>
                </div>
              </a>
            </li>
            <li>
              <a href='#' className='group relative block'>
                <img
                  src='/images/big-img4.jpg'
                  alt=''
                  className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                />
                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Casual Trainers
                  </h3>
                </div>
              </a>
            </li>
            <li>
              <a href='#' className='group relative block'>
                <img
                  src='/images/big-img3.jpg'
                  alt=''
                  className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                />
                <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Winter Jumpers
                  </h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default BigCards;
