'use client';
import React, { useState } from 'react';

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const hideBanner = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className='hidden bg-gray-200 sm:block'>
          <div className='mx-auto flex max-w-screen-xl items-start justify-between px-4  text-white sm:items-center md:px-8'>
            <div className='flex flex-1 items-start justify-center gap-x-4 sm:items-center'>
              <div className='flex flex-none items-center justify-center rounded-lg border border-gray-400 bg-gray-500 p-1 px-4 text-xs font-medium'>
                Buy Now
              </div>
              <p className='p-2 font-medium text-xs'>
                New Summer Products Are Available!{' '}
                <a
                  href='javascript:(0)'
                  className='inline-flex items-center gap-x-1 font-semibold underline duration-150 hover:text-indigo-100'
                >
                  Check here
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </p>
            </div>
            <button
              onClick={hideBanner}
              className='rounded-lg p-2 ring-offset-2 duration-150 hover:bg-white hover:text-black focus:ring'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='h-6 w-6'
              >
                <path d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TopBanner;
