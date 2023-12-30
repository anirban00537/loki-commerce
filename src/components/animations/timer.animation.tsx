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
    const updateCountdown = () => {
      const timeRemaining = calculateTimeLeft(endTime);
      setTimeLeft(timeRemaining);
    };

    // Update the countdown immediately on the client side after hydration
    updateCountdown();

    // Set up an interval to update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  const { days, hours, minutes, seconds }: any = timeLeft;

  return (
    <motion.div animate={controls} initial={{ opacity: 0 }}>
      <div className='text-white'>
        {days}d {hours}h {minutes}m {seconds}s
      </div>
    </motion.div>
  );
};
