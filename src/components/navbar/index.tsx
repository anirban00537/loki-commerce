'use client';
import { Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import { RiCloseLine, RiSearchLine, RiShoppingCart2Line } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import CartSheet from '@/components/sheet/cart.sheet';
import {
  ChevronDown,
  SearchCode,
  SearchXIcon,
  Snowflake,
  Star,
  Sun,
} from 'lucide-react';
import { useScreenWidth } from '@/lib/helper';
interface SearchProps {
  setShowSearch: Dispatch<SetStateAction<boolean>>;
}
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
function Search({ setShowSearch }: SearchProps) {
  const handleClearSearch = () => {
    setShowSearch(false);
  };

  return (
    <form className='flex items-center'>
      <label htmlFor='simple-search' className='sr-only'>
        Search
      </label>
      <div className='relative w-full'>
        <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
          <RiSearchLine className='hover:text-black-700 dark:hover:text-black-500 h-6 w-6 cursor-pointer text-gray-500 dark:text-gray-400' />
        </div>
        <input
          type='text'
          id='simple-search'
          className='focus:border-black-500 focus:ring-black-500 dark:focus:border-black-500 dark:focus:ring-black-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10  text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
          placeholder='Search...'
          required
        />
        <div className='absolute inset-y-0 end-0 flex items-center pr-3'>
          <RiCloseLine
            className='hover:text-black-700 dark:hover:text-black-500 h-4 w-4 cursor-pointer text-gray-500 dark:text-gray-400'
            onClick={handleClearSearch}
          />
        </div>
      </div>
    </form>
  );
}

function NavbarComp() {
  const [cartCount, setCartCount] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<any>(false);
  const width = useScreenWidth();
  const [showSearch, setShowSearch] = useState(false);
  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };
  useEffect(() => {
    if (width >= 991) {
      setShowSearch(false);
      setIsMobileNavOpen(false);
    }
  }, [width]);
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <div className='false  left-0 top-0 z-[1000] block w-full border-b  border-gray-500 border-opacity-10  bg-white py-3 text-black lg:block'>
      <div className='px-5 md:px-10'>
        <div className='mx-auto flex w-full max-w-screen-2xl auto-cols-auto grid-cols-[auto_max-content] items-center justify-between gap-[0px] lg:grid-cols-[176px_auto]'>
          <div className='flex w-9/12 items-center gap-x-4'>
            <Link href='/'>
              <div className='relative float-left flex items-center text-lg text-black max-[991px]:mr-auto max-[767px]:pl-0'>
                <img
                  src='/images/logo.png'
                  alt=''
                  className='inline-block h-[46px] max-w-full'
                />
              </div>
            </Link>
            <motion.div
              className='relative ml-3'
              initial='hidden'
              animate='visible'
              variants={variants}
            >
              <nav className='relative float-right flex place-content-between max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:hidden max-[991px]:bg-black max-[991px]:py-1 max-[991px]:text-left'>
                <div className='mx-auto flex items-start text-base max-[991px]:flex-col lg:items-center'>
                  <Link
                    href='/'
                    target='_self'
                    className='px-5 py-2 text-black transition max-[991px]:block md:px-10 lg:px-4'
                  >
                    Home
                  </Link>
                  <Link
                    href='/collections'
                    target='_self'
                    className='px-5 py-2 text-black transition max-[991px]:block md:px-10 lg:px-4'
                  >
                    Shop
                  </Link>
                  <Link
                    href='/categories'
                    target='_self'
                    className='px-5 py-2 text-black transition max-[991px]:block md:px-10 lg:px-4'
                  >
                    Categories
                  </Link>
                  <div className='group relative'>
                    <button
                      type='button'
                      className='flex items-center px-2 py-2 leading-6 text-black'
                    >
                      Product
                      <ChevronDown className='h-5 w-5 flex-none text-gray-400' />
                    </button>

                    <div className='absolute -left-8 top-full z-10 hidden w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 group-hover:block'>
                      <div className=''>
                        <div className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
                          <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                            <Star className='h-6 w-6 text-gray-600 group-hover:text-indigo-600' />
                          </div>
                          <div className='flex-auto'>
                            <Link
                              href='/hot-deals'
                              className='block font-semibold text-gray-900'
                            >
                              Hot Deals
                              <span className='absolute inset-0'></span>
                            </Link>
                            <p className='mt-1 text-gray-600'>
                              Get Hot deals here{' '}
                            </p>
                          </div>
                        </div>

                        <div className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
                          <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
                            <Sun className='h-6 w-6 text-gray-600 group-hover:text-indigo-600' />
                          </div>
                          <div className='flex-auto'>
                            <a
                              href='#'
                              className='block font-semibold text-gray-900'
                            >
                              Winter Deals
                              <span className='absolute inset-0'></span>
                            </a>
                            <p className='mt-1 text-gray-600'>
                              Get Winter Deals
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50'>
                        <a
                          href='#'
                          className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                        >
                          <Sun className='h-5 w-5 flex-none text-gray-400' />
                          Summer Deals
                        </a>
                        <a
                          href='#'
                          className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                        >
                          <Snowflake className='h-5 w-5 flex-none text-gray-400' />
                          Winter Deals
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link
                    href='/hot-deals'
                    target='_self'
                    className='px-5 py-2 text-black transition max-[991px]:block md:px-10 lg:px-4'
                  >
                    Hot Deals
                  </Link>
                  <Link
                    href='/about'
                    target='_self'
                    className='px-5 py-2 text-black transition max-[991px]:block md:px-10 lg:px-4'
                  >
                    About
                  </Link>
                </div>
              </nav>
            </motion.div>
          </div>
          <div className='flex items-center gap-x-4 '>
            {!showSearch && (
              <motion.div
                className='relative ml-3'
                initial='hidden'
                animate='visible'
                variants={variants}
              >
                <RiSearchLine
                  className='hover:text-black-700 dark:hover:text-black-500 h-6 w-6 cursor-pointer text-gray-500 dark:text-gray-400'
                  onClick={() => {
                    setShowSearch(true);
                  }}
                />
              </motion.div>
            )}
            {showSearch && <Search setShowSearch={setShowSearch} />}
            {!showSearch && (
              <>
                <CartSheet addToCart={addToCart} cartCount={cartCount} />
                <motion.div
                  className='relative ml-3'
                  initial='hidden'
                  animate='visible'
                  variants={variants}
                >
                  <Link href='/register'>
                    <button className='btn btn-primary flex items-center    justify-center gap-2 rounded-lg border bg-white px-5 py-2 text-xs text-black max-[991px]:hidden lg:flex'>
                      Join Us
                    </button>
                  </Link>
                </motion.div>
              </>
            )}
          </div>
          <div
            className='relative float-right hidden cursor-pointer select-none p-3 text-2xl max-[991px]:z-[9999] max-[991px]:-mr-3 max-[991px]:block max-[991px]:text-black lg:p-[18px]'
            onClick={() => setIsMobileNavOpen((prev: any) => !prev)}
          >
            <div>
              <svg
                width='1.25rem'
                height='1rem'
                viewBox='0 0 20 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19 7H1C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7Z'
                  fill='currentColor'
                />
                <path
                  d='M19 0H7C6.44772 0 6 0.447715 6 1C6 1.55228 6.44772 2 7 2H19C19.5523 2 20 1.55228 20 1C20 0.447715 19.5523 0 19 0Z'
                  fill='currentColor'
                />
                <path
                  d='M19 14H11C10.4477 14 10 14.4477 10 15C10 15.5523 10.4477 16 11 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14Z'
                  fill='currentColor'
                />
              </svg>
            </div>
            <div className='fixed left-0 right-0 top-[65px] bg-black'>
              <div
                aria-hidden='true'
                className='rah-static rah-static--height-zero '
                style={{ height: 0, overflow: 'hidden' }}
              >
                <div style={{ display: 'none' }}>
                  <div className='my-4 overflow-hidden '>
                    <nav className='relative float-left flex place-content-between max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:bg-black max-[991px]:py-1 max-[991px]:text-left'>
                      <div className='mx-auto flex items-start text-base max-[991px]:flex-col lg:items-center'>
                        <Link
                          href='/home'
                          target='_self'
                          className='px-5 py-2 text-black transition max-[991px]:block md:px-10 lg:px-4'
                        >
                          Home
                        </Link>
                        <Link
                          href='/features'
                          target='_self'
                          className='px-5 py-2 text-black transition max-[991px]:block md:px-10 lg:px-4'
                        >
                          Features
                        </Link>
                        <Link
                          href='/how-it-works'
                          target='_self'
                          className='px-5 py-2 text-black transition max-[991px]:block md:px-10 lg:px-4'
                        >
                          How it Works
                        </Link>
                        <Link
                          href='/pricing'
                          className='px-5 py-2 text-black transition max-[991px]:block md:px-10 lg:px-4'
                        >
                          Pricing
                        </Link>
                        <Link
                          href='/testimonials'
                          target='_self'
                          className='px-5 py-2 text-black transition max-[991px]:block md:px-10 lg:px-4'
                        >
                          Testimonials
                        </Link>
                        <Link
                          href='/faqs'
                          target='_self'
                          className='px-5 py-2 text-black transition max-[991px]:block md:px-10 lg:px-4'
                        >
                          FAQs
                        </Link>
                        <div className='ml-5 mt-2 flex flex-col gap-y-4'>
                          <Link href='/register'>
                            <button className='btn btn-outline-white block rounded-full shadow-none'>
                              join us
                            </button>
                          </Link>
                          <Link href='/dashboard'>
                            <button
                              type='button'
                              className='btn btn-primary flex items-center gap-2 rounded-full border-0 bg-black'
                            >
                              Get started
                            </button>
                          </Link>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isMobileNavOpen && (
        <div className='left-0 right-0 top-[65px] bg-black'>
          <div className='my-4 overflow-hidden '>
            <nav className='relative float-left flex place-content-between max-[991px]:ml-0 max-[991px]:mr-0 max-[991px]:bg-black max-[991px]:py-1 max-[991px]:text-left'>
              <div className='mx-auto flex items-start text-base max-[991px]:flex-col lg:items-center'>
                <a
                  href='#home'
                  target='_self'
                  className='px-5 py-2 text-white transition max-[991px]:block md:px-10 lg:px-4'
                >
                  Home
                </a>
                <a
                  href='#shop'
                  target='_self'
                  className='px-5 py-2 text-white transition max-[991px]:block md:px-10 lg:px-4'
                >
                  Shop
                </a>
                <a
                  href='#categories'
                  target='_self'
                  className='px-5 py-2 text-white transition max-[991px]:block md:px-10 lg:px-4'
                >
                  Categories
                </a>
                <a
                  href='#Pages'
                  className='px-5 py-2 text-white transition max-[991px]:block md:px-10 lg:px-4'
                >
                  Pages
                </a>
                <Link
                  href='/hot-deals'
                  target='_self'
                  className='px-5 py-2 text-white transition max-[991px]:block md:px-10 lg:px-4'
                >
                  Hot Deals
                </Link>
                <a
                  href='#faqs'
                  target='_self'
                  className='px-5 py-2 text-white transition max-[991px]:block md:px-10 lg:px-4'
                >
                  FAQs
                </a>

                <div className='ml-5 mt-2 flex flex-col gap-y-4'>
                  <Link href={``}>
                    <button
                      type='button'
                      className='btn-primary bg-secondary flex items-center gap-2 rounded-full px-5 py-2'
                    >
                      Sign up
                    </button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavbarComp;
