import {
  Heart,
  LucideTrendingUp,
  ShoppingCart,
  Star,
  View,
} from 'lucide-react';
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
import { Rating } from 'flowbite-react';
import ProductDetailsModal from '@/components/modals/product-detail.modal';
import { motion } from 'framer-motion';
import { RiMoneyCnyCircleFill } from 'react-icons/ri';
import Link from 'next/link';

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
  rating: number;
  reviews: number;
} & React.ComponentProps<typeof Card>;

const ColorOption = ({ color, isSelected, onSelect }: any) => (
  <div
    onClick={onSelect}
    className={cn(
      'mr-2 h-5 w-5 cursor-pointer rounded-full border border-gray-300',
      isSelected ? `border-2 border-blue-300` : ''
    )}
    style={{ backgroundColor: color }}
  ></div>
);

export function ProductCard({
  className,
  image,
  name,
  price,
  rating,
  reviews,
  ...props
}: ProductCardProps) {
  const [isFavorite, setFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#fbc531');
  const [isHovered, setIsHovered] = useState(false);

  const colorOptions = ['#fbc531', '#00a8ff', '#ffbe76', '#ff7979'];

  return (
    <Link href='/details'>
      <Card
        className={cn(
          'relative mb-2 w-[320px] border border-gray-100',
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
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
            onClick={() => setFavorite(!isFavorite)}
          >
            <Heart
              className={`h-6 w-6 ${
                isFavorite ? 'text-red-500' : 'text-gray-500'
              }`}
            />
          </button>
          <button
            className='absolute left-4 top-5 flex items-center rounded-md bg-black p-2 py-1 text-white opacity-60'
            onClick={() => setFavorite(!isFavorite)}
          >
            <RiMoneyCnyCircleFill size={13} />{' '}
            <p className='ml-1 text-xs'>Hot Product</p>
          </button>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className='absolute bottom-4 left-0 right-0 flex justify-center'
            >
              <Button className='mx-2 rounded-2xl text-xs opacity-60'>
                <ShoppingCart className='mr-2' size={15} />
                Add to Cart
              </Button>
              <ProductDetailsModal placeModal='center' />
            </motion.div>
          )}
        </div>
        <CardContent className='mt-3 grid gap-4'>
          <CardHeader className='p-0'>
            <CardTitle className='text-xl text-gray-900'>{name}</CardTitle>
            <div className='flex items-center '>
              <div className='my-2 flex w-full '>
                {colorOptions.map((color: any, index) => (
                  <ColorOption
                    key={index}
                    color={color}
                    isSelected={selectedColor === color}
                    onSelect={() => setSelectedColor(color)}
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
              </div>
              <div className='flex items-center'>
                <Rating>
                  <Rating.Star />
                  <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
                    4.95 out of 5
                  </p>
                </Rating>
              </div>
            </div>
          </CardHeader>
        </CardContent>
      </Card>
    </Link>
  );
}
