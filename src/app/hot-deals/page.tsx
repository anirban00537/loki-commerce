'use client';
import React from 'react';
import { ProductCardWithSize } from '@/components/cards/product-with-size.card';
import Link from 'next/link';

const HotDeals = () => {
  const products = [
    {
      name: 'Long Legs Pants',
      image:
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '33',
      rating: 5,
      reviews: 25,
    },
    {
      name: 'Trendy Dress',
      image:
        'https://images.unsplash.com/photo-1520024146169-3240400354ae?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '521',
      rating: 2.6,
      reviews: 215,
    },
    {
      name: 'Fashion Cup',
      image:
        'https://images.unsplash.com/photo-1536238202089-6ce355328a96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '58',
      rating: 4.6,
      reviews: 26,
    },
    {
      name: 'Fashion Ball With curve',
      image:
        'https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '40',
      rating: 4.6,
      reviews: 89,
    },
    {
      name: 'Floral Maxi Dress',
      image:
        'https://images.unsplash.com/photo-1509087859087-a384654eca4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '65',
      rating: 4.4,
      reviews: 32,
      category: 'Dresses',
      color: 'Blue',
      size: 'S',
    },
    {
      name: 'Lace Midi Dress',
      image:
        'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      price: '80',
      rating: 4.6,
      reviews: 40,
      category: 'Dresses',
      color: 'White',
      size: 'M',
    },
    {
      name: 'Velvet Evening Gown',
      image:
        'https://images.unsplash.com/photo-1460402642842-fa689e470581?q=80&w=1732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
      price: '120',
      rating: 4.8,
      reviews: 55,
      category: 'Evening Wear',
      color: 'Black',
      size: 'L',
    },
    {
      name: 'Striped Summer Dress',
      image:
        'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
      <div className='mx-auto mt-5 max-w-7xl px-2 py-10 lg:px-0'>
        <div className='mb-10 border-b md:flex md:flex-row md:items-start md:justify-between'>
          <div className='mb-4'>
            <h1 className='text-4xl font-semibold'>Hot Deals</h1>
          </div>
          <div className='mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0'></div>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((product, index) => (
            <ProductCardWithSize
              key={index}
              name={product.name}
              image={product.image}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
