import React from 'react';
import BigCard from '@/components/cards/big-card';
import Link from 'next/link';
import SectionWrapper from '@/components/animations/section.animation';

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
      url: '/images/product25.jpeg',
      color: '',
      title: 'Elegant Red Gown',
      description: 'An elegant red evening gown for special occasions.',
      price: '$499.99',
    },
    {
      url: '/images/product26.jpeg',
      color: '',
      title: 'Chic Purple Dress',
      description: 'A chic purple cocktail dress perfect for parties.',
      price: '$199.99',
    },
    {
      url: '/images/product27.jpeg',

      color: '',
      title: 'Modern Green Maxi Dress',
      description: 'A modern green maxi dress for a trendy look.',
      price: '$129.99',
    },
    {
      url: '/images/product28.jpeg',
      color: '',
      title: 'Yellow Floral Dress',
      description: 'A yellow floral summer dress for a vibrant style.',
      price: '$39.99',
    },
  ];

  return (
    <div className='container mx-auto mt-36'>
      <div className='mb-8 flex items-center justify-between '>
        <h2 className='text-2xl font-semibold uppercase text-black md:text-3xl'>
          Premium product&apos;s
        </h2>
        <Link
          href='/collections'
          className='flex items-center justify-center rounded-md border px-2 py-1 text-sm text-gray-600 hover:bg-gray-200 hover:text-gray-700'
        >
          Show All
        </Link>
      </div>
      <section className='grid grid-cols-1 items-start gap-10 rounded-3xl p-5 sm:grid-cols-1 md:grid-cols-2 md:p-0 xl:grid-cols-3 2xl:grid-cols-4'>
        {products.map((product, index) => (
          <SectionWrapper visible={true} key={index} delay={index * 0.2}>
            <BigCard key={index} {...product} />
          </SectionWrapper>
        ))}
      </section>
    </div>
  );
};

export default QuickProducts;
