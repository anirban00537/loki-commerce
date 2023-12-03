import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  visible?: boolean;
  variants?: Variants;
  delay?: number; // Add delay as a prop
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  visible = false,
  variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  },
  delay = 0, // Default delay is 0 seconds
}: SectionWrapperProps) => {
  const sectionRef: React.MutableRefObject<any> = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(visible);

  const handleScroll = () => {
    if (sectionRef.current) {
      const boundingBox = sectionRef.current.getBoundingClientRect();
      if (typeof window !== 'undefined') {
        setIsVisible(
          boundingBox.top <= window.innerHeight * 0.5 && boundingBox.bottom >= 0
        );
      }
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
    const startAnimation = async () => {
      // Introduce a delay before starting the animation
      await new Promise((resolve) => setTimeout(resolve, delay * 1000));

      if (isVisible) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    };

    isVisible &&   startAnimation();
  }, [isVisible, controls, delay]);

  return (
    <motion.div
      variants={variants}
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
