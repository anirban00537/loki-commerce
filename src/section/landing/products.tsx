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
    <div className='container mx-auto mt-28'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>New Arrivals</h2>
        <Link
          href='/all-products'
          className='flex items-center justify-center rounded-md px-2 py-1 text-xs text-gray-400 hover:bg-gray-200 hover:text-gray-700'
        >
          <CornerUpRight size={15} className='mr-2' />
          Show All
        </Link>
      </div>
      <Slider {...settings}>
        <div className='mr-3'>
          <ProductCard
            name='Fashion Bag'
            image='https://images.unsplash.com/photo-1587131782738-de30ea91a542?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className='mr-3'>
          <ProductCard
            name='Fashion Bag'
            image='https://images.unsplash.com/photo-1667237346955-7b6cbb0815e4?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className='mr-3'>
          <ProductCard
            name='Fashion Cup'
            image='https://images.unsplash.com/photo-1536238202089-6ce355328a96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className='mr-3'>
          <ProductCard
            name='Fashion Ball With curve'
            image='https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className='mr-3'>
          <ProductCard
            name='Fashion Airpod'
            image='https://images.unsplash.com/photo-1606746448655-6d7d999ebf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            price='33'
            rating={5}
            reviews={25}
          />
        </div>
        <div className='mr-3'>
          <ProductCard
            name='Fashion Chair'
            image='https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
