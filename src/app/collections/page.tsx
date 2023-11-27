'use client';
import React from 'react';
import { ChevronDown, Home } from 'lucide-react';
import { ProductCardWithSize } from '@/components/cards/product-with-size.card';

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White' },
      { value: 'beige', label: 'Beige' },
      { value: 'blue', label: 'Blue' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
      { value: 'purple', label: 'Purple' },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals' },
      { value: 'tees', label: 'Tees' },
      { value: 'crewnecks', label: 'Crewnecks' },
      { value: 'sweatshirts', label: 'Sweatshirts' },
      { value: 'pants-shorts', label: 'Pants & Shorts' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
  },
];

const Collections = () => {
  return (
    <section className='w-full'>
      <div className='mx-auto mt-20 max-w-7xl px-2 py-10 lg:px-0'>
        <div className='md:flex md:flex-row md:items-start md:justify-between'>
          <div className='mb-10'>
            <h1 className='text-4xl font-bold'>Products</h1>
          </div>
          <div className='mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0'>
            <button
              type='button'
              className='inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden'
            >
              Category <ChevronDown className='ml-2 h-4 w-4' />
            </button>
            <button
              type='button'
              className='inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden'
            >
              Color <ChevronDown className='ml-2 h-4 w-4' />
            </button>
            <button
              type='button'
              className='inline-flex items-center rounded-md px-3 py-2 text-lg font-semibold text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black lg:hidden'
            >
              Size <ChevronDown className='ml-2 h-4 w-4' />
            </button>
          </div>
        </div>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-6'>
          <div className='hidden space-y-6 divide-y lg:col-span-3 lg:block'>
            {filters.map((filter) => (
              <div key={filter.id} className='pt-6'>
                <h3 className='text-lg font-semibold text-gray-900'>
                  {filter.name}
                </h3>
                <ul className='mt-2'>
                  {filter.options.map((option) => (
                    <li
                      key={option.value}
                      className='flex items-center justify-between py-2'
                    >
                      <div className='flex items-center'>
                        <input
                          id={`${filter.id}-${option.value}`}
                          name={`${filter.id}[]`}
                          defaultValue={option.value}
                          type='checkbox'
                          className='h-4 w-4 rounded border-gray-300 text-black focus:ring-black'
                        />
                        <label
                          htmlFor={`${filter.id}-${option.value}`}
                          className='ml-3 text-sm font-medium text-gray-900'
                        >
                          {option.label}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-9 lg:h-full xl:grid-cols-3'>
            <ProductCardWithSize
              name='Fashion Bag'
              image='https://images.unsplash.com/photo-1587131782738-de30ea91a542?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              price='33'
              rating={5}
              reviews={25}
            />
            <ProductCardWithSize
              name='Fashion Bag'
              image='https://images.unsplash.com/photo-1667237346955-7b6cbb0815e4?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              price='33'
              rating={5}
              reviews={25}
            />
            <ProductCardWithSize
              name='Fashion Cup'
              image='https://images.unsplash.com/photo-1536238202089-6ce355328a96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              price='33'
              rating={5}
              reviews={25}
            />
            <ProductCardWithSize
              name='Fashion Ball With curve'
              image='https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              price='33'
              rating={5}
              reviews={25}
            />
            <ProductCardWithSize
              name='Fashion Airpod'
              image='https://images.unsplash.com/photo-1606746448655-6d7d999ebf31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              price='33'
              rating={5}
              reviews={25}
            />
            <ProductCardWithSize
              name='Fashion Chair'
              image='https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              price='33'
              rating={5}
              reviews={25}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
