import { Countdown } from '@/components/animations/timer.animation';
import React from 'react';

const getEndTime = () => {
  const now = new Date();
  const endTime = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days later
  return endTime;
};

const SaleBanner = ({
  text = 'Black Friday Sale Get 50% Discount',
  backgroundImage = 'url("https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?q=80&w=2091&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
}) => {
  const endTime = getEndTime();

  const backgroundStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <section
      className='container z-10 rounded-none overflow-hidden lg:rounded-2xl bg-black px-8 py-16'
      style={backgroundStyle}
    >
      <div className='container'>
        <div className='-mx-4 flex flex-wrap items-center'>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='text-center lg:text-left '>
              <div className='mb-10 lg:mb-0 '>
                <h1 className='mb-3 mt-0 text-3xl font-bold leading-tight text-white sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight '>
                  {text}
                </h1>
                <p className='w-full text-base font-medium leading-relaxed text-white sm:text-lg sm:leading-relaxed'></p>
                <Countdown endTime={endTime} />
              </div>
            </div>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <div className='text-center lg:text-right'>
              <a
                className='mx-auto inline-flex items-center justify-center rounded-lg bg-white px-9 py-4 font-semibold hover:bg-opacity-90'
                href='#'
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className='absolute right-0 top-0 -z-10'
        style={{ width: '388px', height: '250px' }}
      ></div>
      <div
        className='absolute right-0 top-0 -z-10'
        style={{ width: '324px', height: '250px' }}
      ></div>
      <div
        className='absolute left-4 top-4 -z-10'
        style={{ width: '43px', height: '56px' }}
      ></div>
    </section>
  );
};

export default SaleBanner;
