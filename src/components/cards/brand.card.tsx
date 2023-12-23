import React from 'react';

type BrandCardProps = {
  image: string;
  BrandName: string;
  description: string;
};

export function BrandCard({ image, BrandName, description }: BrandCardProps) {
  return (
    <a
      href='#'
      className='group relative mx-1 block h-full overflow-hidden bg-gray-700'
      style={{ borderRadius: '8px' }}
    >
      <img
        alt='Developer'
        src={image}
        className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
        style={{ borderRadius: '8px', transition: 'opacity 0.3s ease-in-out' }}
      />
      <div className='relative h-full p-4 sm:p-6 lg:p-8'>
        <div className='flex h-full flex-col justify-between'>
          <div className='mb-4'>
            <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
              <p className='text-sm text-white'>{description}</p>
            </div>
          </div>
          <div>
            <p className='text-sm font-medium uppercase tracking-widest text-pink-400'>
              Brand
            </p>
            <p className='text-xl font-bold text-white sm:text-2xl'>
              {BrandName}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
