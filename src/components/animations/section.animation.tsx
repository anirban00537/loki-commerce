'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SectionWrapper = ({ children, visible = false }: any) => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(visible);

  const handleScroll = () => {
    if (sectionRef.current) {
      //@ts-ignore
      const boundingBox = sectionRef.current.getBoundingClientRect();
      // You can adjust the threshold value as needed
      setIsVisible(
        boundingBox.top <= window.innerHeight * 0.5 && boundingBox.bottom >= 0
      );
    }
  };

  useEffect(() => {
    const scrollHandler = () => {
      handleScroll();
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
      }}
      initial='hidden'
      animate={controls}
      exit='hidden'
      ref={sectionRef}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;
