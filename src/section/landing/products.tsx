import { CornerDownRight, CornerUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { ProductCard } from '@/components/cards/product.card';

const Products = () => {
  return (
    <div className='container mx-auto'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-2xl font-bold'>New Arrivals</h2>
        <Link
          href='/all-products'
          className='flex items-center justify-center rounded-md   px-2 py-1 text-xs text-gray-400 hover:bg-gray-200 hover:text-gray-700'
        >
          <CornerUpRight size={15} className='mr-2' />
          Show All
        </Link>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Products;
