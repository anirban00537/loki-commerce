import React from 'react';
import SectionWrapper from '@/components/animations/section.animation';

const Brands = () => {
  return (
    <SectionWrapper>
      <div className='container mx-auto mt-16 md:mt-36'>
        <div className='mb-8 flex items-center justify-between'>
          <h2 className='text-2xl font-semibold uppercase text-black md:text-3xl'>
            Brand Deal&apos;s
          </h2>
        </div>

        <main className='my-8'>
          <div className='container mx-auto px-2'>
            {/* Hoodie Banner Section */}
            <div
              className='h-[320px] overflow-hidden rounded-md bg-cover bg-center md:h-[480px]'
              style={{
                backgroundImage: 'url("/images/banner-1.png")',
              }}
            >
              <div className='flex h-full items-center'>
                <div className='max-w-xl px-4 text-black md:px-10'>
                  <h2 className='mb-4 text-2xl font-semibold md:text-4xl'>
                    Discover Cozy Hoodies
                  </h2>
                  <p className='mb-4 text-sm md:text-lg'>
                    Embrace comfort and style with our collection of warm and
                    trendy hoodies. Perfect for a cozy day out or lounging at
                    home.
                  </p>
                  <button className='flex items-center rounded bg-black px-3 py-1 text-xs font-medium uppercase text-white hover:bg-gray-800 focus:outline-none md:px-4 md:text-sm'>
                    <span>Shop Now</span>
                    <svg
                      className='mx-2 h-4 w-4 md:h-5 md:w-5'
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

            {/* Additional Sections */}
            <div className='mt-8 md:-mx-2 md:flex'>
              <div
                className='h-64 overflow-hidden rounded-md bg-cover bg-center md:mx-2 md:w-1/2'
                style={{
                  backgroundImage: 'url("/images/banner-2.png")',
                }}
              >
                <div className='flex h-full items-center'>
                  <div className='max-w-xl px-4 text-black md:px-10'>
                    <h2 className='mb-4 text-base font-semibold md:text-xl'>
                      Elegant Ash-Color Dress
                    </h2>
                    <p className='mb-4 max-w-xs text-xs md:text-sm'>
                      Elevate your wardrobe with our stunning ash-color dress,
                    </p>
                    <button className='flex items-center rounded bg-black px-3 py-1 text-xs font-medium uppercase text-white hover:bg-gray-800 focus:outline-none md:px-4 md:text-sm'>
                      <span>Shop Now</span>
                      <svg
                        className='mx-2 h-4 w-4 md:h-5 md:w-5'
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
                className='h-64 overflow-hidden rounded-md bg-cover bg-center md:mx-2 md:w-1/2'
                style={{
                  backgroundImage: 'url("/images/banner-3.png")',
                }}
              >
                <div className='flex h-full items-center'>
                  <div className='max-w-xl px-4 text-black md:px-10'>
                    <h2 className='mb-4 text-base font-semibold md:text-xl'>
                      Exclusive Denim Collection
                    </h2>
                    <p className='mb-4 max-w-xs text-xs md:text-sm'>
                      Dive into style with our exclusive denim collection,
                      featuring the latest trends in denim fashion.
                    </p>
                    <button className='flex items-center rounded bg-black px-3 py-1 text-xs font-medium uppercase text-white hover:bg-gray-800 focus:outline-none md:px-4 md:text-sm'>
                      <span>Shop Now</span>
                      <svg
                        className='mx-2 h-4 w-4 md:h-5 md:w-5'
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
