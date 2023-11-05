"use client";
import React, { useState } from "react";
import { RiShoppingCart2Line, RiSearchLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";
import { Button, Dropdown, Navbar } from "flowbite-react";

function NavbarComp() {
  // State to hold the cart count
  const [cartCount, setCartCount] = useState(0);

  // Function to increment the cart count
  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div className="container">
        <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite-react.com">
            <img
              src="/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="LokiCommerce "
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              LokiCommerce
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <div className="flex md:order-3">
              <div className="flex items-center">
                <RiSearchLine
                  className="w-6 h-6 text-gray-500 cursor-pointer hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                  onClick={() => console.log("Search clicked")}
                />
                <div className="relative ml-3">
                  <RiShoppingCart2Line
                    className="w-6 h-6 text-gray-500 cursor-pointer hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                    onClick={() => {
                      console.log("Cart clicked");
                      addToCart(); // Increment cart count
                    }}
                  />
                  <div className="bg-primary bg-green-400 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center absolute -top-2 -right-2">
                    {cartCount}
                  </div>
                </div>
              </div>
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Men
            </Navbar.Link>
            <Navbar.Link href="#">Women</Navbar.Link>
            <Navbar.Link href="#">Moden</Navbar.Link>
            <Navbar.Link href="#">Legend</Navbar.Link>
            <Navbar.Link href="#">
              <Dropdown label="Our Collection" inline>
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
