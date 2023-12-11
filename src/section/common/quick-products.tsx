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
      title: 'Elegant Red Evening Gown',
      description: 'An elegant red evening gown for special occasions.',
      price: '$499.99',
    },
    {
      url: '/images/bg-card-4.png',
      color: 'purple',
      title: 'Chic Purple Cocktail Dress',
      description: 'A chic purple cocktail dress perfect for parties.',
      price: '$199.99',
    },
    {
      url: '/images/bg-card-2.png',

      color: 'green',
      title: 'Modern Green Maxi Dress',
      description: 'A modern green maxi dress for a trendy look.',
      price: '$129.99',
    },
    {
      url: '/images/bg-card-3.png',
      color: 'yellow',
      title: 'Yellow Floral Summer Dress',
      description: 'A yellow floral summer dress for a vibrant style.',
      price: '$39.99',
    },
  ];

  return (
    <section className='container mx-auto mt-36 p-10 px-0 md:p-8 md:px-0 md:py-12'>
      <div className='mb-8 flex items-center justify-between '>
        <h2 className='text-3xl font-medium uppercase text-slate-800'>
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
