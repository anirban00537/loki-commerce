'use client';
import React from 'react';

import Brands from '@/section/landing/brands';
import CtaSection from '@/section/landing/cta';
import HeroSection from '@/section/landing/hero';
import Products from '@/section/landing/new-arrival-products';
import TrendingProducts from '@/section/landing/trending-products';

const page = () => {
  return (
    <div className=''>
      <HeroSection />
      <TrendingProducts />
      <Brands />
      <Products />
      <CtaSection />
      <section className='bg-white dark:bg-gray-900'>
        <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-16 xl:gap-0'>
          <div className='mr-auto place-self-center lg:col-span-7 xl:col-span-8'>
            <h1 className='mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl'>
              Building digital products &amp; brands.
            </h1>
            <p className='mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl'>
              Here at flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
            <form action='#'>
              <div className='mb-3 flex items-center'>
                <div className='relative mr-3 w-auto'>
                  <label
                    htmlFor='member_email'
                    className='mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Email address
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className='hidden lg:col-span-5 lg:mt-0 lg:flex xl:col-span-4'>
            <img src='/images/fly-commerce.png' alt='phone illustration' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
