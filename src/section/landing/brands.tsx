import React from 'react';
import { BrandCard } from '@/components/cards/brand.card';
import SectionWrapper from '@/components/animations/section.animation';

const Brands = () => {
  return (
    <div className='container mx-auto mt-36'>
      <div className='mb-8 flex items-center justify-between'>
        <h2 className='text-2xl font-medium uppercase text-slate-800 md:text-3xl'>
          Shop By Top Brands
        </h2>
      </div>

      <div className='grid grid-cols-1 gap-4   md:grid-cols-3'>
        <SectionWrapper delay={0.1}>
          <BrandCard
            BrandName='Lipstick'
            image='https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <BrandCard
            BrandName='Tops'
            image='https://images.unsplash.com/photo-1589810635657-232948472d98?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </SectionWrapper>
        <SectionWrapper delay={0.3}>
          <BrandCard
            BrandName='Bags'
            image='https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Brands;
