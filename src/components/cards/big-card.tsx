import React from 'react';

interface BigCardProps {
  url: string;
  color: string;
  title: string;
  description: string;
  price: string;
}

const BigCard: React.FC<BigCardProps> = ({
  url,
  color,
  title,
  description,
  price,
}) => {
  return (
    <section
      className={`bg-${color}-50 transform cursor-pointer p-5 py-10 text-center duration-500 hover:-translate-y-2 shadow-lg rounded-lg`}
    >
      <img src={url} alt='' className='mx-auto h-auto max-w-full' />
      <div className='mt-10 flex justify-center space-x-1'>
        <svg
          className='text-yellow -600 mx-px h-4 w-4 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 14 14'
        >
          <path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
        </svg>
        <svg
          className='text-yellow -600 mx-px h-4 w-4 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 14 14'
        >
          <path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
        </svg>
        <svg
          className='text-yellow -600 mx-px h-4 w-4 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 14 14'
        >
          <path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
        </svg>
        <svg
          className='text-yellow -600 mx-px h-4 w-4 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 14 14'
        >
          <path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
        </svg>
        <svg
          className='mx-px h-4 w-4 fill-current text-gray-300'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 14 14'
        >
          <path d='M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z'></path>
        </svg>
      </div>
      <h1 className='my-5 text-xl font-semibold'>{title}</h1>
      <p className='mb-5'>{description}</p>
      <h2 className='mb-5 font-semibold'>{price}</h2>
      <button className='rounded-md bg-black p-2 px-6 text-white hover:bg-black '>
        Add To Cart
      </button>
    </section>
  );
};

export default BigCard;
