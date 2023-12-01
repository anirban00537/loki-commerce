'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';

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
        <motion.div
          initial={{ y: -900 }}
          animate={{ y: 0 }}
          className='mx-auto max-w-7xl px-6 py-10  lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-8 lg:py-16'
        >
          <motion.div className='mx-auto flex max-w-2xl flex-col items-start justify-start lg:mx-0'>
            <motion.h1 className='mt-2 max-w-xl text-left text-4xl font-bold tracking-tight text-gray-700  md:text-7xl'>
              Exclusive Collection for Everyone
            </motion.h1>
            <motion.p className='mt-6 text-left text-lg text-gray-600'>
              Discover the latest trends in fashion and explore our exclusive
              collection curated just for you. From timeless classics to the
              hottest styles of the season, we have something for every
              fashionista.
            </motion.p>
            <motion.div className='mt-10 flex items-center gap-x-6'>
              <motion.a
                href='#'
                className='bg-primary focus:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold  text-white shadow-sm  hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2'
              >
                Explore Now
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className='mt-16 flex items-start justify-center md:mt-0'>
            <motion.img src='/images/girl-model.png' alt='Fashion Model' />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: -900 }}
          animate={{ y: 0 }}
          className='mx-auto max-w-7xl px-6 py-10  lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-8 lg:py-16'
        >
          <motion.div className='mx-auto flex max-w-2xl flex-col items-start justify-start lg:mx-0'>
            <motion.h1 className='mt-2 max-w-xl text-left text-4xl font-bold tracking-tight text-gray-700  md:text-7xl'>
              Exclusive Collection for Everyone
            </motion.h1>
            <motion.p className='mt-6 text-left text-lg text-gray-600'>
              Discover the latest trends in fashion and explore our exclusive
              collection curated just for you. From timeless classics to the
              hottest styles of the season, we have something for every
              fashionista.
            </motion.p>
            <motion.div className='mt-10 flex items-center gap-x-6'>
              <motion.a
                href='#'
                className='bg-primary focus:outline-primary rounded-md px-3.5 py-2.5 text-sm font-semibold  text-white shadow-sm  hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2'
              >
                Explore Now
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className='mt-16 flex items-start justify-center md:mt-0'>
            <motion.img src='/images/girl-model.png' alt='Fashion Model' />
          </motion.div>
        </motion.div>
      </Carousel>
    </div>
  );
};

export default HeroSection;
