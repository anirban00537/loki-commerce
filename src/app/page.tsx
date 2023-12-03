'use client';
import React from 'react';

import Brands from '@/section/landing/brands';
import CtaSection from '@/section/landing/cta';
import HeroSection from '@/section/landing/hero';
import Products from '@/section/landing/new-arrival-products';
import TrendingProducts from '@/section/landing/trending-products';
import About from '@/section/landing/about';
import SectionWrapper from '@/components/animations/section.animation';
import BigCards from '@/section/landing/big-cards';
import SaleBanner from '@/section/common/sale-banner';
import QuickProducts from '@/section/common/quick-products';
const page = () => {
  return (
    <div className=''>
      <SectionWrapper visible={true}>
        <HeroSection />
      </SectionWrapper>
      <Brands />
      <SectionWrapper>
        <TrendingProducts />
      </SectionWrapper>
      <div className='mt-8'>
        <SectionWrapper>
          <SaleBanner />
        </SectionWrapper>
      </div>

      <SectionWrapper>
        <QuickProducts />
      </SectionWrapper>
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <BigCards />
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
