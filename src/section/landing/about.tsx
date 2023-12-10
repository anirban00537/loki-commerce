import React from 'react';

const About = () => {
  return (
    <section className='bg-white dark:bg-gray-900 mt-36'>
      <div className='mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-12 lg:py-12 xl:gap-0'>
        <div className='mr-auto place-self-center lg:col-span-7 xl:col-span-8'>
          <h1 className='mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl'>
            Elevate Your Summer Experience
          </h1>
          <p className='mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl'>
            Dive into a world of summer delights with our premium products and
            brands. Experience the best of the season while enjoying exclusive
            e-commerce discounts that add a touch of sunshine to your shopping.
           
          </p>
          <form action='#'>
            <div className='mb-3 flex items-center'>
              <div className='relative mr-3 w-auto'>
                <label
                  htmlFor='member_email'
                  className='mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  Email address
                </label>
              </div>
            </div>
          </form>
        </div>
        <div className='hidden lg:col-span-5 lg:mt-0 lg:flex xl:col-span-4'>
          <img src='/images/fly-commerce.png' alt='phone illustration' />
        </div>
      </div>
    </section>
  );
};

export default About;
