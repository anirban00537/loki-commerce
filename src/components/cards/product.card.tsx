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

type ProductCardProps = React.ComponentProps<typeof Card>;

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

export function ProductCard({ className, ...props }: ProductCardProps) {
  const [isFavorite, setFavorite] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const product = {
    name: 'Example Product',
    price: '$19.99',
    reviews: 15, // Replace with the actual number of reviews
    rating: 4.5, // Replace with the actual rating
    image:
      'https://images.unsplash.com/photo-1587131782738-de30ea91a542?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // replace with the actual image URL
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    details: 'Product details go here...',
  };

  const colorOptions = ['#fbc531', '#00a8ff', '#ffbe76', '#ff7979'];

  return (
    <Card className={cn('relative w-[320px]', className)} {...props}>
      <div className='group relative overflow-hidden'>
        <img
          src={product.image}
          alt={product.name}
          className='mt-1 h-80 w-full transform rounded-sm object-cover transition-transform duration-300 group-hover:scale-105'
        />
        <button
          className='absolute right-2 top-2 rounded-full bg-white p-2'
          onClick={() => setFavorite(!isFavorite)}
        >
          <Heart
            className={`h-6 w-6 ${
              isFavorite ? 'text-red-500' : 'text-gray-500'
            }`}
          />
        </button>
      </div>
      <CardContent className='grid gap-4'>
        <CardHeader className='p-0'>
          <CardTitle>{product.name}</CardTitle>
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
            <CardDescription>{product.price}</CardDescription>
            <div className='flex items-center'>
              <p className='mr-2 flex items-center justify-center text-sm font-medium leading-none text-gray-400'>
                <Star className='mr-1' size={15} color='#f0932b' />{' '}
                {product.rating}
              </p>
              <p className='text-sm font-medium leading-none text-gray-400'>
                ({product.reviews} reviews)
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
        <Button className='ml-2 w-full border bg-white text-black'>
          <View className='mr-2' size={20} /> View
        </Button>
      </CardFooter>
    </Card>
  );
}
