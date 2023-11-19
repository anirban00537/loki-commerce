'use client';
// Import necessary components and styles
import { Modal, Rating } from 'flowbite-react';
import { Plus, ShoppingCart, Star, View, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const sizeOptions = ['S', 'M', 'XL', '2XL', '3XL'];
const productFeatures = [
  'Made with premium, breathable materials for a high-quality and comfortable experience.',
  'Ergonomically designed for a comfortable fit, providing support throughout the day.',
  'Built with durability in mind to withstand daily wear and tear.',
  'Featuring a stylish and modern design, making it a versatile addition to your wardrobe.',
];
const SizeOption = ({ size, isSelected, onSelect }: any) => (
  <div
    onClick={onSelect}
    className={cn(
      ' flex cursor-pointer items-center justify-center rounded-lg border border-gray-300 px-6 py-2 text-lg',
      isSelected ? `bg-black text-white` : ''
    )}
  >
    {size}
  </div>
);
const ColorOption = ({ color, isSelected, onSelect }: any) => (
  <div
    onClick={onSelect}
    className={cn(
      'mr-2 h-8 w-8 cursor-pointer rounded-full border border-gray-300',
      isSelected ? `border-2 border-blue-500` : ''
    )}
    style={{ backgroundColor: color }}
  ></div>
);
const productImages = [
  'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1595780662105-fa76460ddb04?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];
const colorOptions = ['#fbc531', '#00a8ff', '#ffbe76', '#ff7979'];

const Details = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };
  return (
    <div className='container mt-28'>
      <div className='grid grid-cols-1 gap-8 px-4  sm:grid-cols-2 sm:px-7'>
        <div className='h-auto'>
          <div className='h-5/5 flex justify-center '>
            <img
              src={selectedImage}
              alt='Product'
              className='w-full cursor-pointer rounded-lg object-contain'
              onClick={() => console.log('Zoom or open full-size image')}
            />
          </div>
          <div className='mt-4'>
            <div className='flex gap-2'>
              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Thumbnail ${index}`}
                  className={`h-16 w-16 cursor-pointer object-contain  ${
                    image === selectedImage ? 'border-2 border-blue-500' : ''
                  }`}
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className='h-auto'>
          <h2 className='mb-5 text-xl font-semibold sm:text-3xl'>
            Heavy Weight Shoes
          </h2>

          <div className='my-6 flex items-center justify-between'>
            <div className='mt-5 flex items-center '>
              <div className='text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl'>
                $40.00
              </div>
              <span className='font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl'>
                $50.00
              </span>
            </div>
            <div className='flex items-center'>
              {/* <p className='mr-2 flex items-center justify-center text-sm font-medium leading-none text-gray-400 sm:text-base'>
                <Star className='mr-1' size={15} color='#f0932b' /> {5}
              </p> */}
              <Rating>
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star />
                <Rating.Star filled={false} />
                <p className='ml-2 text-sm font-medium text-gray-500 dark:text-gray-400'>
                  4.95 out of 5
                </p>
              </Rating>
            </div>
          </div>
          <h3 className='mb-5 text-lg font-semibold sm:text-xl'>Description</h3>
          <p className='mb-5 text-gray-600'>
            Fashion is a form of self-expression and autonomy at a particular
            period and place and in a specific context, of clothing, footwear,
            lifestyle, accessories, makeup, hairstyle, and body posture.
          </p>
          <div className='mb-5 flex gap-5'>
            <div className='flex'>
              <button
                className='bg-slate-0 mr-2 cursor-pointer rounded-xl border p-2 px-4 text-lg sm:text-2xl'
                onClick={() =>
                  setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1))
                }
              >
                -
              </button>
              <div className='flex items-center justify-center px-4 text-xl sm:text-4xl'>
                {quantity}
              </div>

              <button
                className='bg-slate-0 ml-2 cursor-pointer rounded-xl border p-2 px-4 text-lg sm:text-2xl'
                onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
              >
                +
              </button>
            </div>
            <Button className='mr-2 rounded-xl px-6 py-6 text-base sm:text-base'>
              <Plus className='mr-3' size={22} />
              Add to Cart
            </Button>
          </div>
          <h3 className='mb-5 text-lg font-semibold sm:text-xl'>Sizes</h3>
          <div className='mb-5 flex gap-2'>
            {sizeOptions.map((size: any, index) => (
              <SizeOption
                key={index}
                size={size}
                isSelected={selectedSize === size}
                onSelect={() => setSelectedSize(size)}
              />
            ))}
          </div>
          <h3 className='mb-5 text-lg font-semibold sm:text-xl'>Colors</h3>
          <div className='mb-5 flex gap-2'>
            {colorOptions.map((color: any, index) => (
              <ColorOption
                key={index}
                color={color}
                isSelected={selectedColor === color}
                onSelect={() => setSelectedColor(color)}
              />
            ))}
          </div>
          <div>
            <h2 className='mb-5 text-xl font-semibold sm:text-2xl'>
              Product Features
            </h2>
            <ul className='ml-6 list-disc'>
              {productFeatures.map((feature, index) => (
                <li key={index} className='mb-5 text-xs text-gray-600'>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
