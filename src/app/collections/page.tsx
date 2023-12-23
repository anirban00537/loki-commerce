'use client';
import React from 'react';
import { ChevronDown, Home } from 'lucide-react';
import { ProductCardWithSize } from '@/components/cards/product-with-size.card';
import RightPagination from '@/components/pagination/right-pagination';
import { Dropdown } from 'flowbite-react';
import SectionWrapper from '@/components/animations/section.animation';
const colors = [
  { bg: 'bg-[#2563EB]', ring: 'ring-[#2563EB]' },
  { bg: 'bg-[#8B5CF6]', ring: 'ring-[#8B5CF6]' },
  { bg: 'bg-[#DB2777]', ring: 'ring-[#DB2777]' },
  { bg: 'bg-[#475569]', ring: 'ring-[#475569]' },
  { bg: 'bg-[#EA580C]', ring: 'ring-[#EA580C]' },
];

const filters = [
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
    image: '/images/product1.jpg',
    price: '33',
    rating: 5,
    reviews: 25,
  },
  {
    name: 'Trendy Dress',
    image: '/images/product19.jpg',

    price: '521',
    rating: 2.6,
    reviews: 215,
  },
  {
    name: 'Fashion Cup',
    image: '/images/product3.jpg',

    price: '58',
    rating: 4.6,
    reviews: 26,
  },
  {
    name: 'Fashion Ball With curve',
    image: '/images/product4.jpg',

    price: '40',
    rating: 4.6,
    reviews: 89,
  },
  {
    name: 'Floral Maxi Dress',
    image: '/images/product5.jpg',

    price: '65',
    rating: 4.4,
    reviews: 32,
    category: 'Dresses',
    color: 'Blue',
    size: 'S',
  },
  {
    name: 'Lace Midi Dress',
    image: '/images/product6.jpg',

    price: '80',
    rating: 4.6,
    reviews: 40,
    category: 'Dresses',
    color: 'White',
    size: 'M',
  },
  {
    name: 'Velvet Evening Gown',
    image: '/images/product7.jpg',

    price: '120',
    rating: 4.8,
    reviews: 55,
    category: 'Evening Wear',
    color: 'Black',
    size: 'L',
  },
  {
    name: 'Striped Summer Dress',
    image: '/images/product8.jpeg',
    price: '45',
    rating: 4.2,
    reviews: 28,
    category: 'Summer Dresses',
    color: 'Striped',
    size: 'XL',
  },
  {
    name: 'Striped Summer Dress',
    image: '/images/product18.jpeg',
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
        <div className=' mb-10 border-b md:flex md:flex-row md:items-start md:justify-between'>
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
          <div className='hidden space-y-6 divide-y border-r lg:col-span-3 lg:block'>
            <SectionWrapper visible={true}>
              <div>
                <div className='mx-auto max-w-md '>
                  <h2 className='text-lg font-semibold text-gray-900'>
                    Colors
                  </h2>
                  <ul className='mt-4 flex flex-wrap items-start gap-4'>
                    {colors.map((item, idx) => (
                      <li key={idx} className='flex-none'>
                        <label
                          htmlFor={item.bg}
                          className='relative block h-8 w-8'
                        >
                          <input
                            id={item.bg}
                            type='radio'
                            defaultChecked={idx == 1 ? true : false}
                            name='color'
                            className='peer sr-only'
                          />
                          <span
                            className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full ring-offset-2 duration-150 peer-checked:ring ${item.bg} ${item.ring}`}
                          ></span>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke-width='1.5'
                            stroke='currentColor'
                            className='pointer-events-none absolute inset-0 z-0 m-auto hidden h-5 w-5 text-white duration-150 peer-checked:block'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M4.5 12.75l6 6 9-13.5'
                            />
                          </svg>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
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
                              className='ml-3 text-base font-medium text-gray-500'
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
            </SectionWrapper>
          </div>

          {/* Main Content */}
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-9 lg:h-full xl:grid-cols-3'>
            {products.map((product, index) => (
              <SectionWrapper
                key={index}
                delay={parseFloat(`0.${index}`)}
                visible={true}
              >
                <ProductCardWithSize
                  key={index}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  reviews={product.reviews}
                />
              </SectionWrapper>
            ))}
          </div>
        </div>
        <RightPagination />
      </div>
    </section>
  );
};

export default Collections;
