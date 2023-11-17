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
      'mr-2 px-2 py-1 cursor-pointer rounded border text-xs flex items-center justify-center border-gray-300',
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
    <Card className={cn('relative w-[320px]', className)} {...props}>
      <div className='group relative overflow-hidden p-2'>
        <img
          src={image}
          alt={name}
          className=' h-80 w-full transform rounded-sm object-cover transition-transform duration-300 group-hover:scale-105'
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
      </div>
      <CardContent className='mt-3 grid gap-4'>
        <CardHeader className='p-0'>
          <CardTitle>{name}</CardTitle>
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
            <CardDescription>{price}</CardDescription>
            <div className='flex items-center'>
              <p className='mr-2 flex items-center justify-center text-sm font-medium leading-none text-gray-400'>
                <Star className='mr-1' size={15} color='#f0932b' /> {rating}
              </p>
              <p className='text-sm font-medium leading-none text-gray-400'>
                ({reviews} reviews)
              </p>
            </div>
          </div>
        </CardHeader>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>
          <ShoppingCart className='mr-2' size={20} />
          Add to Cart
        </Button>
        <Button className='ml-2 w-full border bg-white text-black hover:bg-slate-100'>
          <View className='mr-2' size={20} /> View
        </Button>
      </CardFooter>
    </Card>
  );
}
