'use client';
import React, { useState } from 'react';
import { RiShoppingCart2Line, RiSearchLine } from 'react-icons/ri';
import { IoIosArrowDown, IoIosNotifications } from 'react-icons/io';
import { Button, Dropdown, Navbar } from 'flowbite-react';

function NavbarComp() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className='flex w-full items-center justify-center border-b'>
      <div className='container'>
        <Navbar fluid rounded>
          <div>
            <img
              src='/images/logo.png'
              className='mr-3 h-12'
              alt='LokiCommerce'
            />
          </div>
          <div className='flex md:order-2'>
            <div className='flex md:order-3'>
              <div className='flex items-center'>
                <RiSearchLine
                  className='h-6 w-6 cursor-pointer text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500'
                  onClick={() => console.log('Search clicked')}
                />
                <div className='relative ml-3'>
                  <RiShoppingCart2Line
                    className='h-6 w-6 cursor-pointer text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500'
                    onClick={() => {
                      console.log('Cart clicked');
                      addToCart();
                    }}
                  />
                  <div className='bg-primary text-white-background absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white'>
                    {cartCount}
                  </div>
                </div>
              </div>
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href='#'>Home</Navbar.Link>
            <Navbar.Link href='#'>
              <Dropdown label='Brands' inline className='bg-white-background'>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </Navbar.Link>
            <Navbar.Link href='#'>Recent Products</Navbar.Link>
            <Navbar.Link href='#'>Contact</Navbar.Link>
            <Navbar.Link href='#'>About</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
export default NavbarComp;
