import { CornerUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { ProductCard } from '@/components/cards/product.card';

const Products = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
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
          New Arrivals
        </h2>
        <Link
          href='/collections'
          className='flex items-center justify-center rounded-md px-2 py-1 text-xs text-gray-400 hover:bg-gray-200 hover:text-gray-700'
        >
          <CornerUpRight size={15} className='mr-2' />
          Show All
        </Link>
      </div>
      <Slider {...settings}>
        <div className=''>
          <ProductCard
            name='Fashion Bag'
            image='https://images.unsplash.com/photo-1625064703163-075e503d3793?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D '
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className=''>
          <ProductCard
            name='Fashion Bag'
            image='https://images.unsplash.com/photo-1583496702414-c3372525c6ce?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className=''>
          <ProductCard
            name='Fashion Cup'
            image='https://images.unsplash.com/photo-1590588503756-08a4b2be5eb9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className=''>
          <ProductCard
            name='Fashion Ball With curve'
            image='https://images.unsplash.com/photo-1587754568293-1d042d43fff5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className=''>
          <ProductCard
            name='Fashion Airpod'
            image='https://images.unsplash.com/photo-1588189408846-30ad110a0f4c?q=80&w=2105&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className=''>
          <ProductCard
            name='Fashion Chair'
            image='https://images.unsplash.com/photo-1608234807905-4466023792f5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Products;
