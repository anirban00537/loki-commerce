"use client";
import React from "react";
import { RiShoppingCart2Line, RiSearchLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosNotifications } from "react-icons/io";
import { Dropdown } from "flowbite-react";

import { Button, Navbar } from "flowbite-react";

function NavbarComp() {
  return (
    <Navbar fluid rounded >
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
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
                  onClick={() => console.log("Cart clicked")}
                />
                <div className="bg-primary text-white text-xs w-5 h-5 rounded-full flex justify-center items-center absolute -top-2 -right-2">
                  5
                </div>
              </div>
            </div>
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>

          <Navbar.Link>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <div className="flex items-center">
                  Our Templates
                  <IoIosArrowDown
                    className="w-4 h-4 mt-1 ml-2 text-gray-500 cursor-pointer hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-500"
                    onClick={() => console.log("Templates clicked")}
                  />
                </div>
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            ;
          </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComp;
