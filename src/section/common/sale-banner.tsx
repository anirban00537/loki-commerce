import { Countdown } from '@/components/animations/timer.animation';
import React, { useState, useEffect } from 'react';

const getEndTime = () => {
  const now = new Date();
  const endTime = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days later
  return endTime;
};
const SaleBanner = ({ text = 'Black Friday Sale Get 50% Discount' }) => {
  const endTime = getEndTime();

  return (
    <section className='relative z-10  overflow-hidden bg-black px-8 py-16'>
      <div className='container'>
        <div className='-mx-4 flex flex-wrap items-center'>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='text-center lg:text-left '>
              <div className='mb-10 lg:mb-0 '>
                <h1 className='mb-3 mt-0 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight '>
                  {text}
                </h1>
                <p className='w-full text-base font-medium leading-relaxed text-white sm:text-lg sm:leading-relaxed'></p>
                <Countdown endTime={endTime} />
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='text-center lg:text-right'>
              <a
                className='mx-auto inline-flex items-center justify-center rounded-lg bg-white px-9 py-4 font-semibold hover:bg-opacity-90'
                href='#'
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <span className='absolute right-0 top-0 -z-10'>
        <svg
          width={388}
          height={250}
          viewBox='0 0 388 220'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.05'
            d='M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z'
            fill='url(#paint0_linear_971_6910)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_971_6910'
              x1='60.5'
              y1={111}
              x2={287}
              y2={111}
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0.520507' stopColor='white' />
              <stop offset={1} stopColor='white' stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className='absolute right-0 top-0 -z-10'>
        <svg
          width={324}
          height={250}
          viewBox='0 0 324 220'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            opacity='0.05'
            d='M203 -28.5L4.87819e-05 250.5L881.5 250.5L881.5 -28.5002L203 -28.5Z'
            fill='url(#paint0_linear_971_6911)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_971_6911'
              x1='60.5'
              y1={111}
              x2={287}
              y2={111}
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0.520507' stopColor='white' />
              <stop offset={1} stopColor='white' stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </span>
      <span className='absolute left-4 top-4 -z-10'>
        <svg
          width={43}
          height={56}
          viewBox='0 0 43 56'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g opacity='0.5'>
            <circle
              cx='40.9984'
              cy='1.49626'
              r='1.49626'
              transform='rotate(90 40.9984 1.49626)'
              fill='white'
            />
            <circle
              cx='27.8304'
              cy='1.49626'
              r='1.49626'
              transform='rotate(90 27.8304 1.49626)'
              fill='white'
            />
            <circle
              cx='14.6644'
              cy='1.49626'
              r='1.49626'
              transform='rotate(90 14.6644 1.49626)'
              fill='white'
            />
            <circle
              cx='1.49642'
              cy='1.49626'
              r='1.49626'
              transform='rotate(90 1.49642 1.49626)'
              fill='white'
            />
            <circle
              cx='40.9984'
              cy='14.6642'
              r='1.49626'
              transform='rotate(90 40.9984 14.6642)'
              fill='white'
            />
            <circle
              cx='27.8304'
              cy='14.6642'
              r='1.49626'
              transform='rotate(90 27.8304 14.6642)'
              fill='white'
            />
            <circle
              cx='14.6644'
              cy='14.6642'
              r='1.49626'
              transform='rotate(90 14.6644 14.6642)'
              fill='white'
            />
            <circle
              cx='1.49642'
              cy='14.6642'
              r='1.49626'
              transform='rotate(90 1.49642 14.6642)'
              fill='white'
            />
            <circle
              cx='40.9984'
              cy='27.8302'
              r='1.49626'
              transform='rotate(90 40.9984 27.8302)'
              fill='white'
            />
            <circle
              cx='27.8304'
              cy='27.8302'
              r='1.49626'
              transform='rotate(90 27.8304 27.8302)'
              fill='white'
            />
            <circle
              cx='14.6644'
              cy='27.8302'
              r='1.49626'
              transform='rotate(90 14.6644 27.8302)'
              fill='white'
            />
            <circle
              cx='1.49642'
              cy='27.8302'
              r='1.49626'
              transform='rotate(90 1.49642 27.8302)'
              fill='white'
            />
            <circle
              cx='40.9984'
              cy='40.9982'
              r='1.49626'
              transform='rotate(90 40.9984 40.9982)'
              fill='white'
            />
            <circle
              cx='27.8304'
              cy='40.9963'
              r='1.49626'
              transform='rotate(90 27.8304 40.9963)'
              fill='white'
            />
            <circle
              cx='14.6644'
              cy='40.9982'
              r='1.49626'
              transform='rotate(90 14.6644 40.9982)'
              fill='white'
            />
            <circle
              cx='1.49642'
              cy='40.9963'
              r='1.49626'
              transform='rotate(90 1.49642 40.9963)'
              fill='white'
            />
            <circle
              cx='40.9984'
              cy='54.1642'
              r='1.49626'
              transform='rotate(90 40.9984 54.1642)'
              fill='white'
            />
            <circle
              cx='27.8304'
              cy='54.1642'
              r='1.49626'
              transform='rotate(90 27.8304 54.1642)'
              fill='white'
            />
            <circle
              cx='14.6644'
              cy='54.1642'
              r='1.49626'
              transform='rotate(90 14.6644 54.1642)'
              fill='white'
            />
            <circle
              cx='1.49642'
              cy='54.1642'
              r='1.49626'
              transform='rotate(90 1.49642 54.1642)'
              fill='white'
            />
          </g>
        </svg>
      </span>
    </section>
  );
};

export default SaleBanner;
