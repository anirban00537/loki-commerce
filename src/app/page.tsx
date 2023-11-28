'use client';
import React from 'react';

import Brands from '@/section/landing/brands';
import CtaSection from '@/section/landing/cta';
import HeroSection from '@/section/landing/hero';
import Products from '@/section/landing/new-arrival-products';
import TrendingProducts from '@/section/landing/trending-products';
import About from '@/section/landing/about';
import SectionWrapper from '@/components/animations/section.animation';

const page = () => {
  return (
    <div className=''>
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>
      <SectionWrapper>
        <Brands />
      </SectionWrapper>

      <SectionWrapper>
        <TrendingProducts />
      </SectionWrapper>
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <section>
          <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8'>
            <header className='text-start'>
              <h2 className='text-3xl font-bold uppercase text-gray-900 sm:text-3xl'>
                Retro Collections
              </h2>
            </header>
            <ul className='mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3'>
              <li>
                <a href='#' className='group relative block'>
                  <img
                    src='https://images.unsplash.com/photo-1515511624704-b8916dcc30ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                    className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                  />
                  <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                    <h3 className='text-xl font-medium text-white'>
                      Casual Trainers
                    </h3>
                    <span className='mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                      Shop Now
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href='#' className='group relative block'>
                  <img
                    src='https://images.unsplash.com/photo-1574243296580-dc09b72bed8a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                    className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                  />
                  <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                    <h3 className='text-xl font-medium text-white'>
                      Winter Jumpers
                    </h3>
                    <span className='mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                      Shop Now
                    </span>
                  </div>
                </a>
              </li>
              <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
                <a href='#' className='group relative block'>
                  <img
                    src='https://images.unsplash.com/photo-1580849136902-690252483bc1?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    alt=''
                    className='aspect-square w-full object-cover transition duration-500 group-hover:opacity-90'
                  />
                  <div className='absolute inset-0 flex flex-col items-start justify-end p-6'>
                    <h3 className='text-xl font-medium text-white'>
                      Skinny Jeans Blue
                    </h3>
                    <span className='mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white'>
                      Shop Now
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </SectionWrapper>
      <SectionWrapper>
        <Products />
      </SectionWrapper>
      <SectionWrapper>
        <CtaSection />
      </SectionWrapper>
    </div>
  );
};

export default page;
