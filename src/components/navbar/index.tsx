'use client';
import React, { useState } from 'react';
import { RiShoppingCart2Line, RiSearchLine } from 'react-icons/ri';
import { IoIosArrowDown, IoIosNotifications } from 'react-icons/io';
import { Button, Dropdown, Navbar } from 'flowbite-react';

function NavbarComp() {
  // State to hold the cart count
  const [cartCount, setCartCount] = useState(0);

  // Function to increment the cart count
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className='flex w-full items-center justify-center border-b'>
      <div className='container'>
        <Navbar fluid rounded>
          <div>
            <img src='/images/logo.png' className='mr-3 h-14' alt='LokiCommerce' />
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
                      addToCart(); // Increment cart count
                    }}
                  />
                  <div className='bg-primary absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full text-xs text-white'>
                    {cartCount}
                  </div>
                </div>
              </div>
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href='#' active>
              Men
            </Navbar.Link>
            <Navbar.Link href='#'>Women</Navbar.Link>
            <Navbar.Link href='#'>Moden</Navbar.Link>
            <Navbar.Link href='#'>Legend</Navbar.Link>
            <Navbar.Link href='#'>
              <Dropdown label='Our Collection' inline>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Item>Sign out</Dropdown.Item>
              </Dropdown>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
}
export default NavbarComp;
