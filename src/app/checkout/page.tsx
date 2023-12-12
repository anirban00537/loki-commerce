'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';
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
    <li className='flex items-center justify-between space-x-5 border-b border-gray-300 py-4'>
      <div className='flex items-start space-x-4'>
        <div className='h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg'>
          <img
            className='h-full w-full object-cover'
            src={product.imageSrc}
            alt={product.name}
          />
        </div>
        <div className=''>
          <p className='text-base font-bold text-gray-900'>{product.name}</p>
          <p className='text-sm text-gray-500'>{product.color}</p>
          <p className='text-xl font-bold text-gray-500'>{product.price}</p>
        </div>
      </div>
      <div className='flex items-center'>
        <div className='flex items-center'>
          <button
            className='rounded-lg border px-4 py-2 text-sm'
            onClick={decreaseQuantity}
          >
            -
          </button>
          <div className='mx-5'>{quantity}</div>
          <button
            className=' rounded-lg border px-4 py-2 text-sm'
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
        <button className='ml-4 rounded-lg border  px-4 py-2 text-xs'>
          Remove
        </button>
      </div>
    </li>
  );
};

const products = [
  {
    id: 1,
    name: 'Nike Air Force 1 07 LV8',
    href: '#',
    price: '$99',
    originalPrice: '$900',
    discount: '5% Off',
    color: 'Orange',
    size: '8 UK',
    imageSrc:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
  },
  {
    id: 2,
    name: 'Nike Blazer Low 77 SE',
    href: '#',
    price: '$1549',
    originalPrice: '$2499',
    discount: '38% off',
    color: 'White',
    leadTime: '3-4 weeks',
    size: '8 UK',
    imageSrc:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png',
  },
  {
    id: 3,
    name: 'Nike Air Max 90',
    href: '#',
    price: '$2219 ',
    originalPrice: '$999',
    discount: '78% off',
    color: 'Black',
    imageSrc:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
  },
];
const Checkout = () => {
  return (
    <div className='container my-4  md:my-6 md:mt-20 '>
      <div className='mb-10 border-b md:flex md:flex-row md:items-start md:justify-between'>
        <div className='mb-16'>
          <h1 className='text-4xl font-semibold'>Your Cart</h1>
        </div>
        <div className='mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0'></div>
      </div>
      <div className='overflow-hidden  rounded-xl shadow'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='bg-white  px-5 py-6 md:px-8'>
            <div className='flow-root'>
              <ul className='-my-7 divide-y divide-gray-200'>
                {products.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </ul>
            </div>
            <hr className='mt-6 border-gray-200' />
          </div>
          <div className='container px-5 py-6 text-gray-900 md:px-8'>
            <div className='flow-root'>
              <div className='-my-6 divide-y divide-gray-200'>
                <div className='  '>
                  <p className='text-base font-bold text-gray-900'>Total</p>

                  <ul className='mt-6 space-y-3'>
                    <li className='flex items-center justify-between border-b py-5 text-gray-400'>
                      <p className='text-sm font-medium'>Sub total</p>
                      <p className='text-sm font-bold text-gray-800  '>$399</p>
                    </li>
                    <li className='flex items-center justify-between border-b py-5 text-gray-400 '>
                      <p className='text-sm font-medium '>Tax</p>
                      <p className='text-sm font-bold text-gray-800'>$114</p>
                    </li>
                    <li className='flex items-center justify-between  py-5 text-gray-400 '>
                      <p className='text-sm font-bold text-gray-950  '>
                        Order Total
                      </p>
                      <p className='text-sm font-bold text-gray-950'>$514</p>
                    </li>
                    <button
                      type='button'
                      className='w-full rounded-2xl  bg-black p-4 text-xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
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
    </div>
  );
};

export default Checkout;
