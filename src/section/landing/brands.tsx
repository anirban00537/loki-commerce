import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BrandCard } from '@/components/cards/brand.card';
import SectionWrapper from '@/components/animations/section.animation';

const Brands = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set autoplay speed in milliseconds (3 seconds in this case)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='container mx-auto mt-16'>
      <div className='mb-8 flex items-center justify-between '>
        <h2 className='text-3xl font-bold uppercase text-slate-800'>
          Shop By Top Brand's
        </h2>
      </div>

      <div className='flex'>
        <SectionWrapper delay={0.1}>
          <BrandCard
            BrandName='Nike'
            image='https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <BrandCard
            BrandName='Prada'
            image='https://images.unsplash.com/photo-1456379771252-03388b5adf1a?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </SectionWrapper>
        <SectionWrapper delay={0.3}>
          <BrandCard
            BrandName='Prada'
            image='https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </SectionWrapper>
      </div>
    </div>
  );
};

export default Brands;
