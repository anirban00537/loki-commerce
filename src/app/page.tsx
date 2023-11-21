'use client';
import React from 'react';

import Brands from '@/section/landing/brands';
import CtaSection from '@/section/landing/cta';
import HeroSection from '@/section/landing/hero';
import Products from '@/section/landing/new-arrival-products';
import TrendingProducts from '@/section/landing/trending-products';
import About from '@/section/landing/about';

const page = () => {
  return (
    <div className=''>
      <HeroSection />
      <Brands />
      <TrendingProducts />
      <About />
      <Products />
      <CtaSection />
    </div>
  );
};

export default page;
