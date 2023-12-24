import React from 'react';
import { BrandCard } from '@/components/cards/brand.card';
import SectionWrapper from '@/components/animations/section.animation';
const products = [
  {
    name: 'Gown',
    image: '/images/cat1.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
  },
  {
    name: 'Watch',
    image: '/images/cat2.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
  },

  {
    name: 'Fashion Ball With curve',
    image: '/images/cat4.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
  },
  {
    name: 'Floral Maxi Dress',
    image: '/images/cat5.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam excepturi harum quae aspernatur ratione quod officiis necessitatibus dolorum optio? Placeat, delectus. Nobis pariatur enim doloribus cumque doloremque magni repellat blanditiis!',
  },
];

const Brands = () => {
  return (
    <SectionWrapper>
      <div className='container mx-auto mt-36'>
        <div className='mb-8 flex items-center justify-between'>
          <h2 className='text-2xl font-semibold uppercase text-gray-500  md:text-4xl'>
            Shop By Top Categorie&apos;s
          </h2>
        </div>

        <div className='grid grid-cols-1 gap-2 md:grid-cols-4  lg:gap-0'>
          {products.map((product, index) => (
            <SectionWrapper
              key={index}
              delay={parseFloat(`0.${index}`)}
              visible={true}
            >
              <BrandCard
                BrandName={product.name}
                image={product.image}
                description={product.description}
              />
            </SectionWrapper>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Brands;
