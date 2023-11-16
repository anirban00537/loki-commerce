import { CornerUpRight } from 'lucide-react';
import Link from 'next/link';
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
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>Top Brand's</h2>
        <Link
          href='/all-Brands'
          className='flex items-center justify-center rounded-md px-2 py-1 text-xs text-gray-400 hover:bg-gray-200 hover:text-gray-700'
        >
          <CornerUpRight size={15} className='mr-2' />
          Show All
        </Link>
      </div>
      <Slider {...settings}>
        <div className='mr-3'>
          <BrandCard
            BrandName='Nike'
            image='https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </div>
        <div className='mr-3'>
          <BrandCard
            BrandName='Addidas'
            image='https://images.unsplash.com/photo-1645846123684-f6f33a2eb3ec?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </div>
        <div className='mr-3'>
          <BrandCard
            BrandName='Prada'
            image='https://images.unsplash.com/photo-1589782051446-a24efcec7ffc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </div>
        <div className='mr-3'>
          <BrandCard
            BrandName='luis vuitton'
            image='https://images.unsplash.com/photo-1583623733237-4d5764a9dc82?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </div>
        <div className='mr-3'>
          <BrandCard
            BrandName='Chanel'
            image='https://images.unsplash.com/photo-1647642891405-fc8a70cab67f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            description='loream ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab'
          />
        </div>
      </Slider>
    </div>
  );
};

export default Brands;
