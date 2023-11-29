'use client';
import { Dropdown, Navbar } from 'flowbite-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiSearchLine, RiShoppingCart2Line } from 'react-icons/ri';

import { cn } from '@/lib/utils';

import CartSheet from '@/components/sheet/cart.sheet';
function NavbarComp() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };
  const components: { title: string; href: string; description: string }[] = [
    {
      title: 'Alert Dialog',
      href: '/docs/primitives/alert-dialog',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
      title: 'Hover Card',
      href: '/docs/primitives/hover-card',
      description:
        'For sighted users to preview content available behind a link.',
    },
    {
      title: 'Progress',
      href: '/docs/primitives/progress',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
      title: 'Scroll-area',
      href: '/docs/primitives/scroll-area',
      description: 'Visually or semantically separates content.',
    },
    {
      title: 'Tabs',
      href: '/docs/primitives/tabs',
      description:
        'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
      title: 'Tooltip',
      href: '/docs/primitives/tooltip',
      description:
        'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
  ];

  return (
    <div className='fixed top-0 z-10 flex w-full items-center justify-center border-b border-gray-100 bg-white'>
      <div className='container'>
        <Navbar fluid rounded>
          <Link href='/'>
            <img
              src='/images/logo.png'
              className='mr-3 h-12'
              alt='LokiCommerce'
            />
          </Link>
          <div className='flex md:order-2'>
            <div className='flex md:order-3'>
              <div className='flex items-center'>
                <RiSearchLine
                  className='h-6 w-6 cursor-pointer text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500'
                  onClick={() => console.log('Search clicked')}
                />
                <CartSheet addToCart={addToCart} cartCount={cartCount} />
              </div>
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            {/* Set the text color for Navbar links */}
            <Navbar.Link href='#' active className='text-blue-700'>
              Home
            </Navbar.Link>
            <Navbar.Link href='#' className='text-gray-800'>
              Shop
            </Navbar.Link>
            <Navbar.Link href='#' className='text-gray-800'>
              Categories
            </Navbar.Link>
            <Navbar.Link href='#' className='text-gray-800'>
              Cart
              {cartCount > 0 && (
                <span className='ml-1 text-red-500'>({cartCount})</span>
              )}
            </Navbar.Link>
            <Navbar.Link href='#' className='text-gray-800'>
              Account
            </Navbar.Link>

            {/* Set the text color for Dropdown items */}
            <Dropdown label='Templates' inline>
              <Dropdown.Item className='text-gray-800'>Dashboard</Dropdown.Item>
              <Dropdown.Item className='text-gray-800'>Settings</Dropdown.Item>
              <Dropdown.Item className='text-gray-800'>Earnings</Dropdown.Item>
              <Dropdown.Item className='text-gray-800'>Sign out</Dropdown.Item>
            </Dropdown>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default NavbarComp;
