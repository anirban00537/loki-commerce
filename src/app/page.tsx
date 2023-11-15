'use client';
import React from 'react';

import Brands from '@/section/landing/brands';
import CtaSection from '@/section/landing/cta';
import HeroSection from '@/section/landing/hero';
import Products from '@/section/landing/products';

const page = () => {
  return (
    <div className=''>
      <HeroSection />
      <Brands />
      <Products />
      <CtaSection />
    </div>
  );
};

export default page;
