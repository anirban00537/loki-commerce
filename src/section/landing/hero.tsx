import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const HeroSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 2); // Change the number based on the number of slides
    }, 5000); // Change the interval duration as needed

    return () => clearInterval(intervalId);
  }, []);

  const slides = [
    {
      title: 'Exclusive Collection for Everyone',
      text: 'Discover the latest trends in fashion and explore our exclusive collection curated just for you. From timeless classics to the hottest styles of the season, we have something for every fashionista.',
      image: '/images/girl-model.png',
    },
    {
      title: 'Another Exclusive Collection',
      text: 'Explore another amazing collection with the latest fashion trends. Our curated selection is designed to suit every style, ensuring you stay fashionable all year round.',
      image: '/images/girl-model-1.png',
    },
  ];

  const currentSlide = slides[slideIndex];

  const slideAnimation: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const textAnimation: Variants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  const imageAnimation: Variants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className='relative m-4 mt-5 overflow-hidden rounded-3xl bg-orange-100 bg-gradient-to-r md:m-10 md:mt-5'>
      <div>
        <motion.div
          key={slideIndex}
          variants={slideAnimation}
          initial='initial'
          animate='animate'
          exit='exit'
          className='mx-auto max-w-7xl px-6 py-10 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-8 lg:py-16'
        >
          <motion.div className='mx-auto flex max-w-2xl flex-col items-start justify-start lg:mx-0'>
            <motion.h1
              key={currentSlide.title}
              className='mt-2 max-w-xl text-left text-4xl font-bold tracking-tight text-gray-700 md:text-7xl'
              variants={textAnimation}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
            >
              {currentSlide.title}
            </motion.h1>
            <motion.p
              key={currentSlide.text}
              className='mt-6 text-left text-xs text-gray-600 md:text-lg'
              variants={textAnimation}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
            >
              {currentSlide.text}
            </motion.p>
            <motion.div className='mt-10 flex items-center gap-x-6'>
              <motion.a
                href='#'
                className='bg-primary focus:outline-primary rounded-md px-5 py-4 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2'
              >
                Explore Now
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div className='mt-16 flex items-start justify-center md:mt-0'>
            <motion.img
              key={currentSlide.image}
              src={currentSlide.image}
              alt='Fashion Model'
              variants={imageAnimation}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
