'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
const products = [
  {
    id: 1,
    name: 'Red Dress with Belt and Shoes',
    href: '#',
    color: 'Red',
    price: '$99',
    originalPrice: '$900',
    discount: '5% Off',
    size: '8 UK',
    imageSrc: '/images/product17.jpeg',
  },
  {
    id: 2,
    name: 'Black Dress with Belt and Shoes',
    href: '#',
    price: '$1549',
    color: 'Black',
    originalPrice: '$2499',
    discount: '38% off',
    leadTime: '3-4 weeks',
    size: '8 UK',
    imageSrc: '/images/product18.jpeg',
  },

  {
    id: 3,
    name: 'Pink Dress with Belt and Shoes',
    href: '#',
    color: 'Pink',
    price: '$2219 ',
    originalPrice: '$999',
    discount: '78% off',
    size: '8 UK',
    imageSrc: '/images/product19.jpeg',
  },
];
const CartItem = ({ product }: any) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className='mb-5 mt-2 flex items-center justify-between space-x-5 rounded-lg border-b bg-white px-3 py-4 transition duration-300 ease-in-out hover:shadow-md'
    >
      <div className='flex items-start space-x-4'>
        <div className='h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg'>
          <img
            className='h-full w-full rounded-lg object-cover'
            src={product.imageSrc}
            alt={product.name}
          />
        </div>
        <div className='flex flex-col items-start '>
          <Link href='/details'>
            <p className='text-lg font-semibold text-gray-900 hover:underline'>
              {product.name}
            </p>
          </Link>
          <p className='text-sm text-gray-500'>{product.price}</p>
          <div className='mt-1 flex items-center'>
            <span className='text-sm text-gray-500'>
              Color: {product.color}
            </span>
            <span className='mx-2 text-sm text-gray-500'>|</span>
            <span className='text-sm text-gray-500'>Size: {product.size}</span>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div className='flex items-center'>
          <button
            className='rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-500 transition hover:bg-gray-500 hover:text-white'
            onClick={decreaseQuantity}
          >
            -
          </button>
          <div className='mx-4 font-bold text-gray-500'>{quantity}</div>
          <button
            className='rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-500 transition hover:bg-gray-500 hover:text-white'
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
        <button className='rounded-full border border-gray-200 w-full px-4 py-1 text-sm text-gray-500 transition hover:bg-gray-500 hover:text-white'>
          Remove
        </button>
      </div>
    </motion.li>
  );
};

const Checkout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className='container my-4 md:my-6 md:mt-20'
    >
      <div className='md:flex md:flex-row md:items-start md:justify-between'>
        <div className='mb-16'>
          <h1 className='text-4xl font-medium text-gray-900'>Your Cart</h1>
        </div>
        <div className='mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0'></div>
      </div>
      <div className='overflow-hidden rounded-xl border py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='bg-white px-5 py-6 md:px-8'>
            <div className='flow-root'>
              <ul className='-my-7 '>
                {products.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </ul>
            </div>
          </div>
          <div className='container px-5 py-6 text-gray-900 md:px-8'>
            <div className='flow-root'>
              <div className='-my-6 divide-y divide-gray-200'>
                <div className=''>
                  <p className='text-base font-bold text-gray-900'>Total</p>
                  <ul className='mt-6 space-y-3'>
                    <li className='flex items-center justify-between border-b py-5 text-gray-500'>
                      <p className='text-sm font-medium'>Subtotal</p>
                      <p className='text-sm font-bold text-gray-800'>$399</p>
                    </li>
                    <li className='flex items-center justify-between border-b py-5 text-gray-500 '>
                      <p className='text-sm font-medium '>Tax</p>
                      <p className='text-sm font-bold text-gray-800'>$114</p>
                    </li>
                    <li className='flex items-center justify-between  py-5 text-gray-500 '>
                      <p className='text-sm font-bold text-gray-950'>
                        Order Total
                      </p>
                      <p className='text-sm font-bold text-gray-950'>$514</p>
                    </li>
                    <button
                      type='button'
                      className='w-full rounded-2xl bg-black p-4 text-xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                    >
                      Checkout
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
