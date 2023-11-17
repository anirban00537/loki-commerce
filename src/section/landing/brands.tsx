import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BrandCard } from '@/components/cards/brand.card';

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
    <div className='container mx-auto mt-24'>
      <div className='mb-8 flex items-center justify-between '>
        <h2 className='text-4xl font-bold'>Top Brand's</h2>
      </div>
      <Slider {...settings}>
        <div className='mr-3'>
          <BrandCard
            BrandName='Nike'
            image='https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </div>
        <div className='mr-3'>
          <BrandCard
            BrandName='Addidas'
            image='https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </div>
        <div className='mr-3'>
          <BrandCard
            BrandName='Prada'
            image='https://images.unsplash.com/photo-1612810806563-4cb8265db55f?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </div>
        <div className='mr-3'>
          <BrandCard
            BrandName='luis vuitton'
            image='https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </div>
        <div className='mr-3'>
          <BrandCard
            BrandName='Chanel'
            image='https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </div>
      </Slider>
    </div>
  );
};

export default Brands;
