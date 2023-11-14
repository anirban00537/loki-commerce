'use client';
import React from 'react';

import CtaSection from '@/section/landing/cta';
import HeroSection from '@/section/landing/hero';
import Products from '@/section/landing/products';

const page = () => {
  return (
    <div className=''>
      <HeroSection />
      <Products />
      <CtaSection />
    </div>
  );
};

export default page;
