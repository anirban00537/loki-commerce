'use client';
import React from 'react';
import { ProductCardWithSize } from '@/components/cards/product-with-size.card';
import Link from 'next/link';
import SectionWrapper from '@/components/animations/section.animation';
import SaleBanner from '@/section/common/sale-banner';
import RightPagination from '@/components/pagination/right-pagination';

const HotDeals = () => {
  const products = [
    {
      name: 'Long Legs Pants',
      image: '/images/product1.jpeg',
      price: '33',
      rating: 5,
      reviews: 25,
    },
    {
      name: 'Trendy Dress',

      image: '/images/product2.jpeg',

      price: '521',
      rating: 2.6,
      reviews: 215,
    },
    {
      name: 'Fashion Cup',
      image: '/images/product3.jpeg',

      price: '58',
      rating: 4.6,
      reviews: 26,
    },
    {
      name: 'Fashion Ball With curve',
      image: '/images/product4.jpeg',

      price: '40',
      rating: 4.6,
      reviews: 89,
    },
    {
      name: 'Floral Maxi Dress',
      image: '/images/product5.jpeg',

      price: '65',
      rating: 4.4,
      reviews: 32,
      category: 'Dresses',
      color: 'Blue',
      size: 'S',
    },
    {
      name: 'Lace Midi Dress',
      image: '/images/product6.jpeg',

      price: '80',
      rating: 4.6,
      reviews: 40,
      category: 'Dresses',
      color: 'White',
      size: 'M',
    },
    {
      name: 'Velvet Evening Gown',
      image: '/images/product7.jpeg',

      price: '120',
      rating: 4.8,
      reviews: 55,
      category: 'Evening Wear',
      color: 'Black',
      size: 'L',
    },
    {
      name: 'Striped Summer Dress',
      image: '/images/product8.jpeg',

      price: '45',
      rating: 4.2,
      reviews: 28,
      category: 'Summer Dresses',
      color: 'Striped',
      size: 'XL',
    },
  ];

  return (
    <section className='w-full'>
      <div className='mt-12'></div>
      <SectionWrapper visible={true}>
        <SaleBanner text='Limited Time Sale Offer! Hurry up Stock is limited!' />
      </SectionWrapper>
      <div className='mx-auto max-w-7xl px-2 py-10 lg:px-0'>
        <div className='mb-10 border-b md:flex md:flex-row md:items-start md:justify-between'>
          <SectionWrapper visible={true}>
            <div className='mb-4'>
              <h1 className='text-4xl font-semibold'>Hot Deals</h1>
            </div>
          </SectionWrapper>
          <div className='mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0'></div>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((product, index) => (
            <SectionWrapper
              key={index}
              delay={parseFloat(`0.${index}`)}
              visible={true}
            >
              <ProductCardWithSize
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
              />
            </SectionWrapper>
          ))}
        </div>
        <RightPagination />
      </div>
    </section>
  );
};

export default HotDeals;
