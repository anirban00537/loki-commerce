'use client';
import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Rating } from 'flowbite-react';
import { classNames } from '@/lib/helper';
import { StarIcon } from 'lucide-react';

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
  const reviews = [
    {
      id: 1,
      rating: 5,
      content: `
        <p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
      `,
      date: 'July 16, 2021',
      datetime: '2021-07-16',
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
      `,
      date: 'July 12, 2021',
      datetime: '2021-07-12',
      author: 'Hector Gibbons',
      avatarSrc:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
  ];
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
              <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
                {/* Description and details */}
                <div>
                  <h3 className='sr-only'>Description</h3>
                  <div className='space-y-6'>
                    <p className='text-base text-gray-900'>
                      The Basic Tee 6-Pack allows you to fully express your
                      vibrant personality with three grayscale options. Feeling
                      adventurous? Put on a heather gray tee. Want to be a
                      trendsetter? Try our exclusive colorway: "Black". Need to
                      add an extra pop of color to your outfit? Our white tee
                      has you covered.
                    </p>
                  </div>
                </div>
                <div className='mt-10'>
                  <h3 className='text-sm font-medium text-gray-900'>
                    Highlights
                  </h3>
                  <div className='mt-4'>
                    <ul
                      role='list'
                      className='list-disc space-y-2 pl-4 text-sm'
                    >
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
                      The 6-Pack includes two black, two white, and two heather
                      gray Basic Tees. Sign up for our subscription service and
                      be the first to get new, exciting colors, like our
                      upcoming "Charcoal Gray" limited release.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {item.name === 'Product Review' && (
            <div>
              <h2 className='mb-4 text-lg font-semibold'>Product Review</h2>
              <div className='grid grid-cols-1 gap-4'>
                {reviews.map((review: any, reviewIdx: any) => (
                  <div
                    key={review.id}
                    className='flex space-x-4 text-sm text-gray-500'
                  >
                    <div className='flex-none py-10'>
                      <img
                        src={review.avatarSrc}
                        alt=''
                        className='h-10 w-10 rounded-full bg-gray-100'
                      />
                    </div>
                    <div
                      className={classNames(
                        reviewIdx === 0 ? '' : 'border-t border-gray-200',
                        'py-10'
                      )}
                    >
                      <h3 className='font-medium text-gray-900'>
                        {review.author}
                      </h3>
                      <p>
                        <time dateTime={review.datetime}>{review.date}</time>
                      </p>

                      <div className='mt-4 flex items-center'>
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating
                                ? 'text-yellow-400'
                                : 'text-gray-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden='true'
                          />
                        ))}
                      </div>
                      <p className='sr-only'>{review.rating} out of 5 stars</p>

                      <div
                        className='prose prose-sm mt-4 max-w-none text-gray-500'
                        dangerouslySetInnerHTML={{ __html: review.content }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
};

export default TabDetails;
