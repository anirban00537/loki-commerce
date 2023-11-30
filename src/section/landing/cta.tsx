import React from 'react';

const CtaSection = () => {
  return (
    <header>
      {/* Container */}
      <div className='px-5 py-16 md:px-10 md:py-24 lg:py-32'>
        {/* Component */}
        <div
          className='mx-auto w-full max-w-7xl rounded-[18px] bg-cover bg-center bg-no-repeat py-20 text-white '
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
        >
          <div className='mx-auto max-w-3xl text-center'>
            {/* Heading Div */}
            <div className='mb-6 max-w-[720px] lg:mb-12'>
              <h2 className='text-white-background mb-4 text-3xl font-semibold md:text-5xl'>
                Lightning Fast Ecommerce Delivery
              </h2>
              <div className='mx-auto max-w-[630px]'>
                <p className='text-[#e0e0e0]'>
                  Explore seamless ecommerce with us and experience delivery at
                  the speed of light! Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                  lectus magna fringilla urna.
                </p>
              </div>
            </div>

            <a
              href='#'
              className='[ bg-primary text-white-background inline-block rounded-xl px-8 py-4 font-semibold text-white'
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CtaSection;
