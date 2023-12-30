import React from 'react';
import SectionWrapper from '@/components/animations/section.animation';

const Brands = () => {
  return (
    <SectionWrapper>
      <div className='container mx-auto mt-36'>
        <div className='mb-8 flex items-center justify-between'>
          <h2 className='text-2xl font-semibold uppercase text-black md:text-3xl'>
            Brand Deal&apos;s
          </h2>
        </div>

        <main className='my-8'>
          <div className='container mx-auto px-2'>
            <div
              className='h-96 overflow-hidden rounded-md bg-cover bg-center'
              style={{
                backgroundImage:
                  'url("https://www.aloyoga.com/cdn/shop/files/100823_CoreBACKUP_TheBestSellerList_DesktopNOcta_1944x.progressive.jpg?v=1703180826")',
              }}
            ></div>
            <div className='mt-8 md:-mx-4 md:flex'>
              <div
                className='h-64 w-full overflow-hidden rounded-md bg-cover bg-center md:mx-4 md:w-1/2'
                style={{
                  backgroundImage:
                    'url("https://www.aloyoga.com/cdn/shop/files/08.31.23_NewToAlo_HP_Desktop_copy_1_1944x.progressive.jpg?v=1694819376")',
                }}
              >
                <div className='flex h-full items-center '>
                  <div className='max-w-xl px-10'>
                    <h2 className='text-2xl font-semibold text-white'>
                      Back Pack
                    </h2>

                    <button className='mt-4 flex items-center rounded text-sm font-medium uppercase text-white hover:underline focus:outline-none'>
                      <span>Shop Now</span>
                      <svg
                        className='mx-2 h-5 w-5'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path d='M17 8l4 4m0 0l-4 4m4-4H3' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className='mt-8 h-64 w-full overflow-hidden rounded-md bg-cover bg-center md:mx-4 md:mt-0 md:w-1/2'
                style={{
                  backgroundImage:
                    'url("https://media.boohoo.com/i/boohooamplience/231226_Desktop_Half_Bridal_ROW")',
                }}
              >
                <div className='flex h-full items-center '>
                  <div className='max-w-xl px-10'>
                    <h2 className='text-2xl font-semibold text-white'>Games</h2>

                    <button className='mt-4 flex items-center rounded text-sm font-medium uppercase text-white hover:underline focus:outline-none'>
                      <span>Shop Now</span>
                      <svg
                        className='mx-2 h-5 w-5'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path d='M17 8l4 4m0 0l-4 4m4-4H3' />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SectionWrapper>
  );
};

export default Brands;
