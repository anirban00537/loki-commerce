import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import React from 'react';
import { Trash, Heart, ShoppingBagIcon, ShoppingBasket } from 'lucide-react';

import { RiShoppingCart2Line } from 'react-icons/ri';
import { Button } from '@/components/ui/button';
const products = [
  {
    id: 1,
    name: 'Nike Air Force 1 07 LV8',
    href: '#',
    price: '$85',
    originalPrice: '₹48,900',
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
    price: '$45',
    originalPrice: '₹2,499',
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
    price: '$55 ',
    originalPrice: '₹999',
    discount: '78% off',
    color: 'Black',
    imageSrc:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
  },
];
const CartSheet = ({ addToCart, cartCount }: any) => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className='relative ml-3'>
          <RiShoppingCart2Line className='h-6 w-6 cursor-pointer text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500' />
          <div className='text-white-background absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-400 text-xs text-white'>
            {cartCount}
          </div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <div className='mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2'>
          <h2 className='text-3xl font-bold'>Your cart</h2>

          <ul className='flex flex-col divide-y divide-gray-200'>
            {products.map((product) => (
              <li
                key={product.id}
                className='flex flex-col py-6 sm:flex-row sm:justify-between'
              >
                <div className='flex w-full space-x-2 sm:space-x-4'>
                  <img
                    className=' h-6 w-6 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-16 sm:w-16'
                    src={product.imageSrc}
                    alt={product.name}
                  />
                  <div className='flex w-full flex-col justify-between pb-4'>
                    <div className='flex w-full justify-between space-x-2 pb-2'>
                      <div className='space-y-1'>
                        <h3 className='text-lg font-semibold leading-snug sm:pr-8'>
                          {product.name}
                        </h3>
                        <p className='text-sm'>{product.color}</p>
                      </div>
                      <div className='text-right'>
                        <p className='text-lg font-semibold'>{product.price}</p>
                      </div>
                    </div>
                    <div className='flex divide-x text-sm'>
                      <button
                        type='button'
                        className='flex items-center space-x-2 px-2 py-1 pl-0'
                      >
                        <Trash size={16} />
                        <span>Remove</span>
                      </button>
                      <button
                        type='button'
                        className='flex items-center space-x-2 px-2 py-1 text-xs'
                      >
                        <Heart size={16} />
                        <span>Add to favorites</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className='space-y-1 text-right'>
            <p>
              Total amount:
              <span className='font-semibold'> $407</span>
            </p>
          </div>
          <div className='flex justify-end space-x-4'>
            <Button className='w-1/2 border-2 border-black bg-white text-black'>
              <ShoppingBasket className='mr-2' size={15} />
              Continue
            </Button>

            <Button className='w-1/2'>
              <ShoppingBagIcon className='mr-2' size={15} />
              Check out
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
