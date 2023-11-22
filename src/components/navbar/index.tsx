'use client';
import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { RiSearchLine, RiShoppingCart2Line } from 'react-icons/ri';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
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

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href='/docs' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Fashion
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Trending</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                    <li className='row-span-3'>
                      <NavigationMenuLink asChild>
                        <a
                          className='from-muted/50 to-muted flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none focus:shadow-md'
                          href='/'
                        >
                          <div className='mb-2 mt-4 text-lg font-medium'>
                            shadcn/ui
                          </div>
                          <p className='text-muted-foreground text-sm leading-tight'>
                            Beautifully designed components built with Radix UI
                            and Tailwind CSS.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href='/docs' title='Introduction'>
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href='/docs/installation' title='Installation'>
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href='/docs/primitives/typography'
                      title='Typography'
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Hot Deals</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/docs' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/docs' legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Blogs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Navbar>
      </div>
    </div>
  );
}
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='text-muted-foreground line-clamp-2 text-sm leading-snug'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
export default NavbarComp;
