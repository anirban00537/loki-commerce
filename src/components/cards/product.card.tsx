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
      'mr-2 h-6 w-6 cursor-pointer rounded-full border border-gray-300',
      isSelected ? `border-2 border-blue-500` : ''
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
  const [selectedColor, setSelectedColor] = useState(null);

  const colorOptions = ['#fbc531', '#00a8ff', '#ffbe76', '#ff7979'];

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
      <CardContent className='grid gap-4 mt-3'>
        <CardHeader className='p-0'>
          <CardTitle>{name}</CardTitle>
          <div className='flex items-center '>
            <div className='my-2 flex'>
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
