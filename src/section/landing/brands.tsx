import React from 'react';
import { BrandCard } from '@/components/cards/brand.card';
import SectionWrapper from '@/components/animations/section.animation';

const Brands = () => {
  return (
    <div className='container mx-auto mt-16'>
      <div className='mb-8 flex items-center justify-between'>
        <h2 className='text-2xl font-bold uppercase text-slate-800 md:text-3xl'>
          Shop By Top Brands
        </h2>
      </div>

      <div className='grid grid-cols-1 gap-4   md:grid-cols-3'>
        <SectionWrapper delay={0.1}>
          <BrandCard
            BrandName='Nike'
            image='https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <BrandCard
            BrandName='Prada1'
            image='https://images.unsplash.com/photo-1456379771252-03388b5adf1a?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </SectionWrapper>
        <SectionWrapper delay={0.3}>
          <BrandCard
            BrandName='Prada2'
            image='https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Brands;
