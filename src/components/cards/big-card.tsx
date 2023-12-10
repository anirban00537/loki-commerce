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
      className={`grid grid-cols-1 md:grid-cols-2 bg-${color}-50 flex transform cursor-pointer items-center justify-center overflow-hidden rounded-lg p-5 py-10 shadow duration-500 hover:-translate-y-2`}
    >
      <div className='mb-6 md:mb-0 md:pr-5'>
        <img
          src={url}
          alt=''
          className='h-64 w-full rounded-md object-cover md:h-full'
        />
      </div>
      <div className='flex flex-col'>
        <h1 className='my-2 text-xl font-bold '>{title}</h1>
        <p className='mb-4 text-sm text-gray-700'>{description}</p>
        <h2 className='mb-2 text-xl font-semibold text-black'>{price}</h2>
      </div>
    </section>
  );
};

export default BigCard;
