'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import TabDetails from '@/section/details/tab-details';
import { Rating } from 'flowbite-react';

const SizeOption = ({ size, isSelected, onSelect }: any) => (
  <div
    onClick={onSelect}
    className={cn(
      ' flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-6 py-2 text-lg',
      isSelected ? `bg-black text-white` : ''
    )}
  >
    {size}
  </div>
);
const ColorOption = ({ color, isSelected, onSelect }: any) => (
  <div
    onClick={onSelect}
    className={cn(
      'mr-2 h-8 w-8 cursor-pointer rounded-full border border-gray-300',
      isSelected ? `border-2 border-blue-500` : ''
    )}
    style={{ backgroundColor: color }}
  ></div>
);
const colorOptions = ['#fbc531', '#00a8ff', '#ffbe76', '#ff7979'];

const Details = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };
  const sizeOptions = ['S', 'M', 'XL', '2XL', '3XL'];
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const productInfoVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='bg-white'
    >
      <div className='pt-6'>
        <div className='mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
          <div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
            <img
              src='/images/t-shirt-1.jpg'
              alt='Two each of gray, white, and black shirts laying flat.'
              className='h-full w-full object-cover object-center'
            />
          </div>
          <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
            <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
              <img
                src='/images/t-shirt-2.jpg'
                alt='Model wearing plain black basic tee.'
                className='h-full w-full object-cover object-center'
              />
            </div>
            <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
              <img
                src='/images/t-shirt-4.jpg'
                alt='Model wearing plain gray basic tee.'
                className='h-full w-full object-cover object-center'
              />
            </div>
          </div>
          <div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg'>
            <img
              src='/images/t-shirt-3.jpg'
              alt='Model wearing plain white basic tee.'
              className='h-full w-full object-cover object-center'
            />
          </div>
        </div>
        <motion.div
          variants={productInfoVariants}
          initial='hidden'
          animate='visible'
          className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'
        >
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
             Pure White Cotton t-shirt
            </h1>
          </div>

          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-3xl tracking-tight text-gray-900'>$192</p>
            <div className='mt-6'>
              <h3 className='sr-only'>Reviews</h3>
              <div className='flex items-center'>
                <p className='sr-only'>4 out of 5 stars</p>
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
                <a
                  href='#'
                  className='ml-3 text-sm font-medium text-black hover:text-black'
                >
                  117 reviews
                </a>
              </div>
            </div>
            <form className='mt-10'>
              <div>
                <h3 className='text-sm font-medium text-gray-900'>Color</h3>
                <fieldset className='mt-4'>
                  <legend className='sr-only'>Choose a color</legend>
                  <div className='flex items-center space-x-3'>
                    {colorOptions.map((color: any, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                      >
                        <ColorOption
                          color={color}
                          isSelected={selectedColor === color}
                          onSelect={() => setSelectedColor(color)}
                        />
                      </motion.div>
                    ))}
                  </div>
                </fieldset>
              </div>
              {/* Sizes */}
              <div className='mt-10'>
                <div className='flex items-center justify-between'>
                  <h3 className='text-sm font-medium text-gray-900'>Size</h3>
                  <a
                    href='#'
                    className='text-sm font-medium text-black hover:text-black'
                  >
                    Size guide
                  </a>
                </div>
                <fieldset className='mt-4'>
                  <legend className='sr-only'>Choose a size</legend>
                  <div className='grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4'>
                    {sizeOptions.map((size: any, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                      >
                        <SizeOption
                          size={size}
                          isSelected={selectedSize === size}
                          onSelect={() => setSelectedSize(size)}
                        />
                      </motion.div>
                    ))}
                  </div>
                </fieldset>
              </div>
              <button
                type='submit'
                className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
              >
                Add to bag
              </button>
            </form>
          </div>
          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
            <div>
              <h3 className='sr-only'>Description</h3>
              <div className='space-y-6'>
                <p className='text-base text-gray-900'>
                  The Pure White Cotton T-shirt allows you to fully express your vibrant
                  personality with three grayscale options. Feeling adventurous?
                  Put on a heather gray tee. Want to be a trendsetter? Try our
                  exclusive colorway: "Black". Need to add an extra pop of color
                  to your outfit? Our white tee has you covered.
                </p>
              </div>
            </div>
            <div className='mt-10'>
              <h3 className='text-sm font-medium text-gray-900'>Highlights</h3>
              <div className='mt-4'>
                <ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
                  <li className='text-gray-400'>
                    <span className='text-gray-600'>
                      Hand cut and sewn locally
                    </span>
                  </li>
                  <li className='text-gray-400'>
                    <span className='text-gray-600'>
                      Dyed with our proprietary colors
                    </span>
                  </li>
                  <li className='text-gray-400'>
                    <span className='text-gray-600'>
                      Pre-washed &amp; pre-shrunk
                    </span>
                  </li>
                  <li className='text-gray-400'>
                    <span className='text-gray-600'>
                      Ultra-soft 100% cotton
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='mt-10'>
              <h2 className='text-sm font-medium text-gray-900'>Details</h2>
              <div className='mt-4 space-y-6'>
                <p className='text-sm text-gray-600'>
                  The 6-Pack includes two black, two white, and two heather gray
                  Basic Tees. Sign up for our subscription service and be the
                  first to get new, exciting colors, like our upcoming "Charcoal
                  Gray" limited release.
                </p>
                {/* Add description for the white T-shirt here */}
                <p className='text-sm text-gray-600'>
                  The white T-shirt is a versatile classic, perfect for any
                  occasion. Its clean and crisp design makes it an essential
                  wardrobe staple. Crafted from ultra-soft 100% cotton, it
                  offers both comfort and style.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <TabDetails />
      </div>
    </motion.div>
  );
};
export default Details;
