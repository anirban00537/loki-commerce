import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[#e0ffea]">
      <div
        className="mx-auto max-w-7xl px-6 py-24 sm:py-10 lg:grid lg:grid-cols-2 lg:gap-x-10 lg:px-8 lg:py-26"
        style={{
          minHeight: "700px",
        }}
      >
        <div className="mx-auto flex items-start justify-center flex-col max-w-2xl lg:mx-0">
          <div className="flex">
            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <a href="#" className="flex items-center gap-x-1">
                <span className="absolute inset-0" aria-hidden="true" />
                See open positions
              </a>
            </div>
          </div>
          <h1 className="mt-10 max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Exclusive collection for everyone
          </h1>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm text-teal-50 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Explore Now
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/girl-model.png" alt="" height={800} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
