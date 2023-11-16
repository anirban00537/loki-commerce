'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const HeroSection = () => {
  return (
    <div className='relative m-10 mt-24 overflow-hidden rounded-3xl bg-pink-50 bg-gradient-to-r'>
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
            <h1 className='mt-10 max-w-xl text-left text-4xl font-bold tracking-tight text-gray-700 sm:text-7xl'>
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
            <h1 className='mt-10 max-w-xl text-left text-4xl font-bold tracking-tight text-gray-700 sm:text-7xl'>
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
