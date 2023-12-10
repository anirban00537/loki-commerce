'use client';
import React from 'react';
import { ChevronDown, Home } from 'lucide-react';
import { ProductCardWithSize } from '@/components/cards/product-with-size.card';
import RightPagination from '@/components/pagination/right-pagination';
import { Dropdown } from 'flowbite-react';

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
const products = [
  {
    name: 'Long Legs Pants',
    image:
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '33',
    rating: 5,
    reviews: 25,
  },
  {
    name: 'Trendy Dress',
    image:
      'https://images.unsplash.com/photo-1520024146169-3240400354ae?q=80&w=2126&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '521',
    rating: 2.6,
    reviews: 215,
  },
  {
    name: 'Fashion Cup',
    image:
      'https://images.unsplash.com/photo-1536238202089-6ce355328a96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '58',
    rating: 4.6,
    reviews: 26,
  },
  {
    name: 'Fashion Ball With curve',
    image:
      'https://images.unsplash.com/photo-1510172951991-856a654063f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '40',
    rating: 4.6,
    reviews: 89,
  },
  {
    name: 'Floral Maxi Dress',
    image:
      'https://images.unsplash.com/photo-1509087859087-a384654eca4d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '65',
    rating: 4.4,
    reviews: 32,
    category: 'Dresses',
    color: 'Blue',
    size: 'S',
  },
  {
    name: 'Lace Midi Dress',
    image:
      'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '80',
    rating: 4.6,
    reviews: 40,
    category: 'Dresses',
    color: 'White',
    size: 'M',
  },
  {
    name: 'Velvet Evening Gown',
    image:
      'https://images.unsplash.com/photo-1460402642842-fa689e470581?q=80&w=1732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ',
    price: '120',
    rating: 4.8,
    reviews: 55,
    category: 'Evening Wear',
    color: 'Black',
    size: 'L',
  },
  {
    name: 'Striped Summer Dress',
    image:
      'https://images.unsplash.com/photo-1502163140606-888448ae8cfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '45',
    rating: 4.2,
    reviews: 28,
    category: 'Summer Dresses',
    color: 'Striped',
    size: 'XL',
  },
];
const Collections = () => {
  return (
    <section className='w-full'>
      <div className='mx-auto mt-5 max-w-7xl px-2 py-10 lg:px-0'>
        <div className='mx-3 mb-10 border-b md:flex md:flex-row md:items-start md:justify-between'>
          <div className='mb-4'>
            <h1 className='text-4xl font-semibold'>Products</h1>
          </div>
          <div className='mb-5 mt-6 flex items-center gap-3 pt-2 md:mb-0 md:mt-0 md:space-x-4 md:pt-0 lg:hidden'>
            {filters.map((filter, i) => (
              <Dropdown key={i} label={filter.name} inline>
                {filter.options.map((option, index) => (
                  <Dropdown.Item key={index}>{option.value}</Dropdown.Item>
                ))}
              </Dropdown>
            ))}
          </div>
        </div>
        <div className='lg:grid lg:grid-cols-12 lg:gap-x-6'>
          {/* Sidebar */}
          <div className='hidden space-y-6 divide-y border-r lg:col-span-3 lg:block'>
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
                          className='h-4 w-4 rounded border-gray-300 text-gray-400 focus:ring-black'
                        />
                        <label
                          htmlFor={`${filter.id}-${option.value}`}
                          className='ml-3 text-xs font-medium text-gray-500'
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
          {/* Main Content */}
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-9 lg:h-full xl:grid-cols-3'>
            {products.map((product, index) => (
              <ProductCardWithSize
                key={index}
                name={product.name}
                image={product.image}
                price={product.price}
                rating={product.rating}
                reviews={product.reviews}
              />
            ))}
          </div>
        </div>
        <RightPagination />
      </div>
    </section>
  );
};

export default Collections;
