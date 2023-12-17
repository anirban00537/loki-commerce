'use client';
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Rating } from 'flowbite-react';

const TabDetails = () => {
  const tabItems = [
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-5 w-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14v-4m0 0v-4m0 4h4m-8 0H8'
          />
        </svg>
      ),
      name: 'Product Details',
    },
    {
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-5 w-5'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14v-4m0 0v-4m0 4h4m-8 0H8'
          />
        </svg>
      ),
      name: 'Product Review',
    },
  ];

  // Render the component
  return (
    <Tabs.Root
      className='mx-auto mt-10 max-w-screen-xl'
      defaultValue='Product Details'
    >
      <Tabs.List
        className='flex w-full items-center gap-x-3 overflow-x-auto border-b text-sm'
        aria-label='Product information and reviews'
      >
        {tabItems.map((item, idx) => (
          <Tabs.Trigger
            key={idx}
            className='group border-b-2 border-white py-1.5 text-gray-500 outline-none data-[state=active]:border-black data-[state=active]:text-black'
            value={item.name}
          >
            <div className='flex items-center gap-x-2 rounded-lg px-3 py-1.5 font-medium duration-150 group-hover:bg-gray-50 group-hover:text-black group-active:bg-gray-100'>
              {item.icon}
              {item.name}
            </div>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {tabItems.map((item, idx) => (
        <Tabs.Content key={idx} className='py-6' value={item.name}>
          {item.name === 'Product Details' && (
            <div>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <p className='mb-2 text-xl font-bold'>White t-shirt</p>
                  <p className='mb-4 text-sm text-gray-700'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam non justo at nunc bibendum tincidunt id a nisi.
                    Quisque commodo, nulla vitae varius vulputate, est tortor
                    blandit urna, ut sagittis nisl mi in turpis. Morbi bibendum
                    varius arcu, vel fermentum augue molestie id. Aliquam erat
                    volutpat. Vestibulum ac orci ex.
                  </p>
                  <div>
                    <ul className='list-inside list-disc'>
                      <li>High-quality materials for durability</li>
                      <li>Ergonomically designed for maximum comfort</li>
                      <li>Advanced technology integration</li>
                      <li>Multiple color options available</li>
                      <li>Compatible with various devices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          {item.name === 'Product Review' && (
            <div>
              <h2 className='mb-4 text-lg font-semibold'>Product Review</h2>
              <div className='grid grid-cols-1 gap-4'>
                <div className='rounded-md bg-white p-4 border-b'>
                  <div className='flex items-start'>
                    <img
                      src='https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='User Avatar'
                      className='mr-2 rounded-full h-8 w-8'
                    />
                    <div>
                      <p className='text-sm font-semibold'>Alex Johnson</p>
                      <p className='text-xs text-gray-500'>Verified Buyer</p>
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
                          4.95 out of 5
                        </p>
                      </Rating>
                      <p className='mb-2 text-gray-700 text-sm'>
                        "Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                    </div>
                  </div>
                </div>

                <div className='rounded-md bg-white p-4 border-b'>
                  <div className='flex items-start'>
                    <img
                      src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='User Avatar'
                      className='mr-2 rounded-full h-8 w-8'
                    />
                    <div>
                      <p className='text-sm font-semibold'>Alex Johnson</p>
                      <p className='text-xs text-gray-500'>Verified Buyer</p>
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
                          4.95 out of 5
                        </p>
                      </Rating>
                      <p className='mb-2 text-gray-700 text-sm'>
                        "Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                    </div>
                  </div>
                </div>
                <div className='rounded-md bg-white p-4 border-b'>
                  <div className='flex items-start'>
                    <img
                      src='https://images.unsplash.com/photo-1517988125222-aa07cf3ba98b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt='User Avatar'
                      className='mr-2 rounded-full h-8 w-8'
                    />
                    <div>
                      <p className='text-sm font-semibold'>Alex Johnson</p>
                      <p className='text-xs text-gray-500'>Verified Buyer</p>
                      <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
                          4.95 out of 5
                        </p>
                      </Rating>
                      <p className='mb-2 text-gray-700 text-sm'>
                        "Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default TabDetails;
