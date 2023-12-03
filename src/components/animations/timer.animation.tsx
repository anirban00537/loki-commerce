import { motion, useAnimation } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const calculateTimeLeft = (endTime: any) => {
  const difference = +new Date(endTime) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  return timeLeft;
};
export const Countdown = ({ endTime }: any) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endTime));
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = calculateTimeLeft(endTime);
      setTimeLeft(timeRemaining);

      // You can add animation logic here using Framer Motion controls
      controls.start({
        opacity: 1,
        scale: [1, 1.1, 1], // Example animation
        transition: {
          duration: 0.5,
        },
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [controls, endTime]);

  const { days, hours, minutes, seconds }: any = timeLeft;

  return (
    <div>
      <motion.div animate={controls} initial={{ opacity: 0 }}>
        <p className='text-white'>
          {days}d {hours}h {minutes}m {seconds}s
        </p>
      </motion.div>
    </div>
  );
};
