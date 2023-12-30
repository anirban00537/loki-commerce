'use client';
import React from 'react';
import { ProductCardWithSize } from '@/components/cards/product-with-size.card';
import Link from 'next/link';
import SectionWrapper from '@/components/animations/section.animation';
import SaleBanner from '@/section/common/sale-banner';
import { BrandCard } from '@/components/cards/brand.card';

const Categories = () => {
  const products = [
    {
      name: 'Gown',
      image: '/images/big-img1.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
    {
      name: 'Watch',
      image: '/images/big-img2.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
    {
      name: 'Fashion Cup',
      image: '/images/big-img3.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
    {
      name: 'Fashion Ball With curve',
      image: '/images/big-img4.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
    {
      name: 'Floral Maxi Dress',
      image: '/images/big-img5.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
    {
      name: 'Lace Midi Dress',
      image: '/images/big-img6.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
    {
      name: 'Velvet Evening Gown',
      image: '/images/big-img7.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
    {
      name: 'Striped Summer Dress',
      image: '/images/big-img8.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
    {
      name: 'Denim Jacket',
      image: '/images/big-img9.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
    {
      name: 'Leather Boots',
      image: '/images/big-img10.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
    {
      name: 'Straw Hat',
      image: '/images/big-img11.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
    {
      name: 'Suede Loafers',
      image: '/images/big-img12.jpg',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
    },
  ];

  return (
    <section className='w-full'>
      <div className='mx-auto max-w-7xl px-2 py-10 lg:px-0'>
        <div className='mb-10 border-b md:flex md:flex-row md:items-start md:justify-between'>
          <div className='mb-4'>
            <h1 className='text-4xl font-semibold'>Products Categories</h1>
          </div>
          <div className='mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0'></div>
        </div>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {products.map((product, index) => (
            <SectionWrapper
              key={index}
              delay={parseFloat(`0.${index}`)}
              visible={true}
            >
              <BrandCard
                BrandName={product.name}
                image={product.image}
                description={product.description}
              />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
