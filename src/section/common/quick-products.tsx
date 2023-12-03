import BigCard from '@/components/cards/big-card';
import React from 'react';

const QuickProducts = () => {
  return (
    <section className='container mx-auto p-10 px-0 md:p-8 md:px-0 md:py-12'>
      <section className='grid grid-cols-1 items-start gap-10 p-5 sm:grid-cols-1 md:grid-cols-2 md:p-0 xl:grid-cols-3 2xl:grid-cols-4 '>
        <BigCard color='blue' />
        <BigCard color='yellow' />
        <BigCard color='green' />
        <BigCard color='blue' />
      </section>
    </section>
  );
};

export default QuickProducts;
