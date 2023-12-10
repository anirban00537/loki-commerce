import React from 'react';
import BigCard from '@/components/cards/big-card';
import Link from 'next/link';

interface Product {
  url: string;
  color: string;
  title: string;
  description: string;
  price: string;
}

const QuickProducts = () => {
  const products: Product[] = [
    {
      url: '/images/bg-card-1.png',
      color: 'red',
      title: 'Blue Velvet Sofa',
      description: 'A comfortable sofa with a stylish blue velvet finish.',
      price: '$499.99',
    },
    {
      url: '/images/bg-card-2.png',
      color: 'purple',
      title: 'Green Accent Chair',
      description: 'A cozy accent chair with a vibrant green color.',
      price: '$199.99',
    },
    {
      url: '/images/bg-card-3.png',
      color: 'green',
      title: 'Modern Coffee Table',
      description: 'A sleek and modern coffee table for your living room.',
      price: '$129.99',
    },
    {
      url: '/images/bg-card-4.png',
      color: 'yellow',
      title: 'Plush Pink Pillow Set',
      description: 'A set of soft and plush pink pillows for added comfort.',
      price: '$39.99',
    },
  ];

  return (
    <section className='container mx-auto p-10 px-0 md:p-8 md:px-0 md:py-12'>
      <div className='mb-8 flex items-center justify-between '>
        <h2 className='text-3xl font-bold uppercase text-slate-800'>
          Premium products
        </h2>
        <Link
          href='/collections'
          className='flex items-center justify-center rounded-md border px-2 py-1 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-700'
        >
          Show All
        </Link>
      </div>
      <section className='grid grid-cols-1 items-start gap-10 p-5 sm:grid-cols-1 md:grid-cols-2 md:p-0 xl:grid-cols-3 2xl:grid-cols-4 '>
        {products.map((product, index) => (
          <BigCard key={index} {...product} />
        ))}
      </section>
    </section>
  );
};

export default QuickProducts;
