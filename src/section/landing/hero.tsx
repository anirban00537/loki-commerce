'use client';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const HeroSection = () => {
  return (
    <div
      style={{
        backgroundColor: '#e0ffea',
      }}
    >
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div
          className='lg:py-26 mx-auto max-w-7xl px-6 py-24 sm:py-10 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-8'
          style={{
            minHeight: '700px',
          }}
        >
          <div className='mx-auto flex max-w-2xl flex-col items-start justify-center lg:mx-0'>
            <div className='flex'>
              <div className='relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                <a href='#' className='flex items-center gap-x-1'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  See open positions
                </a>
              </div>
            </div>
            <h1 className='mt-10 max-w-xl text-left text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl'>
              Exclusive collection for everyone
            </h1>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='#'
                className='bg-primary focus-visible:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-teal-50 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
              >
                Explore Now
              </a>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <img src='/images/girl-model.png' alt='' />
          </div>
        </div>
        <div
          className='lg:py-26 mx-auto max-w-7xl px-6 py-24 sm:py-10 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-8'
          style={{
            minHeight: '700px',
          }}
        >
          <div className='mx-auto flex max-w-2xl flex-col items-start justify-center lg:mx-0'>
            <div className='flex'>
              <div className='relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                <a href='#' className='flex items-center gap-x-1'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  See open positions
                </a>
              </div>
            </div>
            <h1 className='mt-10 max-w-xl text-left text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl'>
              Exclusive collection for everyone
            </h1>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='#'
                className='bg-primary focus-visible:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
              >
                Explore Now
              </a>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <img src='/images/girl-model.png' alt='' />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
