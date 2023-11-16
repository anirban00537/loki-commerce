'use client';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeroSection = () => {
  return (
    <div className='relative m-5 mt-20 overflow-hidden rounded-3xl bg-gradient-to-r from-green-100 to-pink-100'>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showArrows={false}
        
      >
        <div className='mx-auto max-w-7xl px-6 py-24 sm:py-10 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-8 lg:py-16'>
          <div className='mx-auto flex max-w-2xl flex-col items-start justify-start lg:mx-0'>
            <div className='flex'>
              <div className='relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                <a href='#' className='flex items-center gap-x-1'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  See open positions
                </a>
              </div>
            </div>
            <h1 className='mt-10 max-w-xl text-left text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl'>
              Exclusive Collection for Everyone
            </h1>
            <p className='mt-6 text-left text-lg text-gray-600'>
              Discover the latest trends in fashion and explore our exclusive
              collection curated just for you. From timeless classics to the
              hottest styles of the season, we have something for every
              fashionista.
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='#'
                className='bg-primary focus:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-teal-50 text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2'
              >
                Explore Now
              </a>
            </div>
          </div>
          <div className='flex items-start justify-center'>
            <img src='/images/girl-model.png' alt='Fashion Model' />
          </div>
        </div>

        <div className='mx-auto max-w-7xl px-6 py-24 sm:py-10 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-8 lg:py-16'>
          <div className='mx-auto flex max-w-2xl flex-col items-start justify-start lg:mx-0'>
            <div className='flex'>
              <div className='relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
                <a href='#' className='flex items-center gap-x-1'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  See open positions
                </a>
              </div>
            </div>
            <h1 className='mt-10 max-w-xl text-left text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl'>
              Exclusive Collection for Everyone
            </h1>
            <p className='mt-6 text-left text-lg text-gray-600'>
              Discover the latest trends in fashion and explore our exclusive
              collection curated just for you. From timeless classics to the
              hottest styles of the season, we have something for every
              fashionista.
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='#'
                className='bg-primary focus:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold text-teal-50 text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2'
              >
                Explore Now
              </a>
            </div>
          </div>
          <div className='flex items-start justify-center'>
            <img src='/images/girl-model.png' alt='Fashion Model' />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
