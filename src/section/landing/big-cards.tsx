import SectionWrapper from '@/components/animations/section.animation';
import React from 'react';

const BigCards = () => {
  return (
    <SectionWrapper>
      <section>
        <div className='mx-auto mt-36 max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
          <header className='text-start'>
            <h2 className='text-3xl font-medium uppercase text-slate-800'>
              Retro Collections
            </h2>
          </header>
          <ul className='mt-8 grid grid-cols-1 gap-4 lg:grid-cols-4'>
            <li>
              <a href='#' className='group relative block'>
                <img
                  src='https://images.unsplash.com/photo-1503104834685-7205e8607eb9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                  src='https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                  src='https://images.unsplash.com/photo-1620818480520-c4c6c9020195?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                  src='https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
                  src='https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
