'use client';
import { Modal, Rating } from 'flowbite-react';
import { Plus, Star, View, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
const colorOptions = ['#fbc531', '#00a8ff', '#ffbe76', '#ff7979'];

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
  '/images/product25.jpeg',
  '/images/product26.jpeg',
  '/images/product27.jpeg',
];

function ProductDetailsModal({
  placeModal = 'center',
}: {
  placeModal: string;
}) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(productImages[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      <div className='flex flex-wrap gap-4'>
        <Button
          className='ml-2 w-full rounded-2xl border bg-white text-xs text-black opacity-60 hover:bg-slate-100'
          onClick={(e) => {
            e.preventDefault();
            setOpenModal(true);
          }}
        >
          <View className='mr-2' size={20} /> View
        </Button>
      </div>
      <Modal
        show={openModal}
        position={placeModal}
        size='5xl'
        onClose={() => setOpenModal(false)}
      >
        <Modal.Body className='no-scrollbar'>
          <div className='flex items-center justify-end'>
            <button
              className='mb-5 text-gray-500 hover:text-gray-700 focus:outline-none'
              onClick={() => setOpenModal(false)}
            >
              <X size={24} />
            </button>
          </div>

          <div className='grid grid-cols-1 gap-8 px-4  sm:grid-cols-2 sm:px-7'>
            <div>
              <div className='h-5/5 flex justify-center '>
                <motion.img
                  src={selectedImage}
                  alt='Product'
                  className='w-full cursor-pointer rounded-lg object-contain'
                  onClick={() => console.log('Zoom or open full-size image')}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className='mt-4'>
                {/* Display thumbnails of other product images */}
                <div className='flex gap-2'>
                  {productImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Product Thumbnail ${index}`}
                      className={`h-16 w-16 cursor-pointer object-contain  ${
                        image === selectedImage
                          ? 'border-2 border-blue-500'
                          : ''
                      }`}
                      onClick={() => handleImageClick(image)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className='mb-5 text-xl font-semibold sm:text-3xl'>
                Heavy Weight Shoes
              </h2>

              <div className='my-6 flex items-center justify-between'>
                <div className='flex items-center '>
                  <div className='text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl'>
                    $40.00
                  </div>
                  <span className='font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl'>
                    $50.00
                  </span>
                </div>
                <div className='flex items-center'>
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
              <h3 className='mb-5 text-lg font-semibold sm:text-xl'>
                Description
              </h3>
              <p className='mb-5 text-gray-600'>
                Fashion is a form of self-expression and autonomy at a
                particular period and place and in a specific context, of
                clothing, footwear, lifestyle, accessories, makeup, hairstyle,
                and body posture.
              </p>
              <motion.div
                className='mb-5 flex flex-wrap gap-5'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <div className='flex'>
                  <button
                    className='bg-slate-0 mr-2 cursor-pointer rounded-xl border p-2 px-4 text-lg sm:text-2xl'
                    onClick={() =>
                      setQuantity((prevQuantity) =>
                        Math.max(prevQuantity - 1, 1)
                      )
                    }
                  >
                    -
                  </button>
                  <motion.div
                    className='flex items-center justify-center px-4 text-xl sm:text-4xl'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    {quantity}
                  </motion.div>
                  <button
                    className='bg-slate-0 ml-2 cursor-pointer rounded-xl border p-2 px-4 text-lg sm:text-2xl'
                    onClick={() =>
                      setQuantity((prevQuantity) => prevQuantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
                <Button className='mr-2 rounded-xl px-6 py-6 text-base sm:text-base'>
                  <Plus className='mr-3' size={22} />
                  Add to Cart
                </Button>
              </motion.div>
              <motion.h3
                className='mb-5 text-lg font-semibold sm:text-xl'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                Sizes
              </motion.h3>
              <motion.div
                className='mb-5 flex flex-wrap gap-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                {sizeOptions.map((size: any, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  >
                    <SizeOption
                      size={size}
                      isSelected={selectedSize === size}
                      onSelect={() => setSelectedSize(size)}
                    />
                  </motion.div>
                ))}
              </motion.div>
              <motion.h3
                className='mb-5 text-lg font-semibold sm:text-xl'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
              >
                Colors
              </motion.h3>
              <motion.div
                className='mb-5 flex gap-2'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.0 }}
              >
                {colorOptions.map((color: any, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                  >
                    <ColorOption
                      color={color}
                      isSelected={selectedColor === color}
                      onSelect={() => setSelectedColor(color)}
                    />
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <motion.h2 className='mb-5 text-xl font-semibold sm:text-2xl'>
                  Product Features
                </motion.h2>
                <motion.ul className='ml-6 list-disc'>
                  {productFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      className='mb-5 text-xs text-gray-600'
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProductDetailsModal;
