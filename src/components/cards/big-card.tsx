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
      className={`bg-${color}-50 transform cursor-pointer overflow-hidden rounded-lg p-5 py-10 text-center shadow-lg duration-500 hover:-translate-y-2`}
    >
      <img src={url} alt='' className='mb-6  w-full rounded-md object-cover' />

      <h1 className='my-2 text-2xl font-bold'>{title}</h1>
      <p className='mb-4 text-gray-700'>{description}</p>
      <h2 className='mb-2 text-xl font-semibold text-black'>{price}</h2>
      <button className='rounded-md bg-black p-2 px-6 text-white transition duration-300 hover:bg-green-600'>
        Add To Cart
      </button>
    </section>
  );
};

export default BigCard;
