"use client";
import {
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Kbd,
  Button,
  Link,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Navbar,
} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { CiSearch } from "react-icons/ci";
import { BsCalendar2Check, BsCart, BsFillClockFill } from "react-icons/bs";
import { RiShieldFlashLine } from "react-icons/ri";
import { PiShoppingCart } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FiChevronDown, FiServer } from "react-icons/fi";
import { LuActivitySquare } from "react-icons/lu";
import { AiOutlineClose, AiOutlineTags } from "react-icons/ai";
import { Logo } from "@/components/icons";
import { useState } from "react";

export const NavbarComp = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const cartCount = 5;
  const icons = {
    chevron: <FiChevronDown fill="currentColor" size={16} />,
    scale: <BsCalendar2Check fill="currentColor" size={30} />,
    lock: <BsFillClockFill fill="currentColor" size={30} />,
    activity: <LuActivitySquare fill="currentColor" size={30} />,
    flash: <RiShieldFlashLine fill="currentColor" size={30} />,
    server: <FiServer fill="currentColor" size={30} />,
    user: <AiOutlineTags fill="currentColor" size={30} />,
    search: <CiSearch fill="currentColor" size={24} />,
    close: <AiOutlineClose size={16} />, // Close icon
  };
  const cartIcon = (
    <PiShoppingCart
      fill="currentColor"
      size={24}
      onClick={() => console.log("Open cart")}
    />
  );

  const searchInput = (
    <div className="relative">
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        className="focus:outline-none focus:border-none"
        endContent={
          <div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setSearchOpen(false)}
          >
            {icons.close}
          </div>
        }
        labelPlacement="outside"
        placeholder="Search..."
        startContent={icons.search}
        type="search"
      />
    </div>
  );

  return (
    <Navbar maxWidth="2xl" className="py-1">
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-medium text-2xl text-inherit">LokiCommerce</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      {searchOpen ? (
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>{searchInput}</NavbarItem>
        </NavbarContent>
      ) : (
        <NavbarContent className="hidden sm:flex gap-8" justify="center">
          <NavbarItem>
            <Link href="#" color="foreground" aria-current="page">
              Men
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Women
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Kids
            </Link>
          </NavbarItem>
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                  endContent={icons.chevron}
                  radius="sm"
                  variant="light"
                >
                  Templates
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="ACME features"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="autoscaling"
                description="ACME scales apps to meet user demand, automagically, based on load."
                startContent={icons.scale}
              >
                Template One
              </DropdownItem>
              <DropdownItem
                key="usage_metrics"
                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                startContent={icons.activity}
              >
                Template Two
              </DropdownItem>
              <DropdownItem
                key="production_ready"
                description="ACME runs on ACME, join us and others serving requests at web scale."
                startContent={icons.flash}
              >
                Template Three
              </DropdownItem>
              <DropdownItem
                key="99_uptime"
                description="Applications stay on the grid with high availability and high uptime guarantees."
                startContent={icons.server}
              >
                Template Four
              </DropdownItem>
              <DropdownItem
                key="supreme_support"
                description="Overcome any challenge with a supporting team ready to respond."
                startContent={icons.user}
              >
                Template Five
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      )}

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <CiSearch
            fill="currentColor"
            size={24}
            onClick={() => setSearchOpen(true)}
          />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <div className="relative">
            {/* Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4h2l3.4 12.2a2 2 0 0 0 1.9 1.3h8.2a2 2 0 0 0 1.9-1.3L20 4H4zm7 18a2 2 0 0 0 2-2H9a2 2 0 0 0 2 2z"
              />
            </svg>

            {/* Cart Count */}
            <div className="bg-primary text-white text-xs w-5 h-5 rounded-full flex justify-center items-center absolute -top-3 -right-2">
              5
            </div>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <FaGithub className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>
            <Link href="#" size="lg">
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#" size="lg">
              Products
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link href="#" size="lg">
              Templates
            </Link>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
