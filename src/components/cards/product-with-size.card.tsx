import { Heart, ShoppingCart, Star, View } from 'lucide-react';
import React, { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ProductDetailsModal from '@/components/modals/product-detail.modal';
import Link from 'next/link';
import { Rating } from 'flowbite-react';

type ProductCardWithSizeProps = {
  image: string;
  name: string;
  price: string;
  rating: number;
  reviews: number;
} & React.ComponentProps<typeof Card>;

const SizeOption = ({ size, isSelected, onSelect }: any) => (
  <div
    onClick={onSelect}
    className={cn(
      'mr-2 flex cursor-pointer items-center justify-center rounded border border-gray-300 px-2 py-1 text-xs',
      isSelected ? `border-2 border-blue-500` : ''
    )}
  >
    {size}
  </div>
);

export function ProductCardWithSize({
  className,
  image,
  name,
  price,
  rating,
  reviews,
  ...props
}: ProductCardWithSizeProps) {
  const [isFavorite, setFavorite] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const sizeOptions = ['S', 'M', 'XL', '2XL', '3XL'];

  return (
    <Link href='/details'>
      <Card
        className={cn(
          'relative mb-2  border border-gray-100  shadow-sm',
          className
        )}
        {...props}
      >
        <div className='group relative overflow-hidden p-2'>
          <img
            src={image}
            alt={name}
            className='h-64 w-full transform rounded-sm object-cover transition-transform duration-300 group-hover:scale-105'
          />
          <button
            className='absolute right-4 top-4 rounded-full bg-white p-2'
            onClick={(e) => {
              e.preventDefault();
              setFavorite(!isFavorite);
            }}
          >
            <Heart
              className={`h-6 w-6 ${
                isFavorite ? 'text-red-500' : 'text-gray-500'
              }`}
            />
          </button>
        </div>
        <CardContent className='mt-3 grid gap-4'>
          <CardHeader className='p-0'>
            <CardTitle className={cn('text-gray-600', className)}>
              {name}
            </CardTitle>
            <div className='flex items-center '>
              <div className='my-2 flex'>
                {sizeOptions.map((size: any, index) => (
                  <SizeOption
                    key={index}
                    size={size}
                    isSelected={selectedSize === size}
                    onSelect={() => setSelectedSize(size)}
                  />
                ))}
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center '>
                <div className='text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-base'>
                  $40.00
                </div>
                <span className='font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-base'>
                  $50.00
                </span>
              </div>{' '}
              <div className='flex items-center'>
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                  <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
                    4.95
                  </p>
                </Rating>
              </div>
            </div>
          </CardHeader>
        </CardContent>
        <CardFooter>
          <Button className='w-full'>
            <ShoppingCart className='mr-2' size={20} />
            Add to Cart
          </Button>
          <ProductDetailsModal placeModal='center' />
        </CardFooter>
      </Card>
    </Link>
  );
}
