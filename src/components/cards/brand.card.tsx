import React from 'react';

type BrandCardProps = {
  image: string;
  BrandName: string;
  description: string;
};

export function BrandCard({ image, BrandName, description }: BrandCardProps) {
  return (
    <a href='#' className='group relative mr-2  block bg-black '>
      <img
        alt='Developer'
        src={image}
        className='absolute inset-0 h-72 w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
      />
      <div className='relative p-4 sm:p-6 lg:p-8'>
        <div className='mb-20 sm:mt-32 lg:mt-2'>
          <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
            <p className='text-sm text-white'>{description}</p>
          </div>
        </div>
        <p className='text-sm font-medium uppercase tracking-widest text-green-500'>
          Brand
        </p>
        <p className='text-xl font-bold text-white sm:text-2xl'>{BrandName}</p>
      </div>
    </a>
  );
}
