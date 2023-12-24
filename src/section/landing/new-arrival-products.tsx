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
    <div className='container mx-auto mt-36'>
      <div className='mb-8 flex items-center justify-between '>
        <h2 className='text-2xl font-semibold uppercase text-gray-500  md:text-4xl'>
          New Arrivals
        </h2>
        <Link
          href='/collections'
          className='flex items-center justify-center rounded-md border px-2 py-1 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-700'
        >
          Show All
        </Link>
      </div>
      <Slider {...settings}>
        <div className=''>
          <ProductCard
            name='Fashion Bag'
            image='/images/product1.jpg'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className=''>
          <ProductCard
            name='Fashion Bag'
            image='/images/product7.jpg'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className=''>
          <ProductCard
            name='Fashion Cup'
            image='/images/product6.jpg'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className=''>
          <ProductCard
            name='Fashion Ball With curve'
            image='/images/product3.jpg'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className=''>
          <ProductCard
            name='Fashion Airpod'
            image='/images/product4.jpg'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className=''>
          <ProductCard
            name='Fashion Chair'
            image='/images/product5.jpg'
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
