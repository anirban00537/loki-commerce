import React from 'react';
import { X } from 'lucide-react';
const CartItem = ({ product }: any) => (
  <li className='flex items-center justify-between space-x-5 border-b border-gray-200 py-4'>
    <div className='flex items-center space-x-4'>
      <div className='h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200 bg-white'>
        <img
          className='h-full w-full object-cover'
          src={product.imageSrc}
          alt={product.name}
        />
      </div>
      <div>
        <p className='text-base font-bold text-gray-900'>{product.name}</p>
        <p className='text-sm text-gray-500'>{product.color}</p>
      </div>
    </div>
    <div className='flex items-center space-x-4'>
      <p className='text-base font-bold text-gray-900'>{product.price}</p>
      <button
        type='button'
        className='text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
      >
        <span className='sr-only'>Remove</span>
        <X className='h-5 w-5' />
      </button>
    </div>
  </li>
);

const products = [
  {
    id: 1,
    name: 'Nike Air Force 1 07 LV8',
    href: '#',
    price: '$99',
    originalPrice: '$900',
    discount: '5% Off',
    color: 'Orange',
    size: '8 UK',
    imageSrc:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
  },
  {
    id: 2,
    name: 'Nike Blazer Low 77 SE',
    href: '#',
    price: '$1549',
    originalPrice: '$2499',
    discount: '38% off',
    color: 'White',
    leadTime: '3-4 weeks',
    size: '8 UK',
    imageSrc:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png',
  },
  {
    id: 3,
    name: 'Nike Air Max 90',
    href: '#',
    price: '$2219 ',
    originalPrice: '$999',
    discount: '78% off',
    color: 'Black',
    imageSrc:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png',
  },
];
const Checkout = () => {
  return (
    <div className='container my-4 max-w-6xl md:my-6 md:mt-20 '>
      <div className='mb-10 border-b md:flex md:flex-row md:items-start md:justify-between'>
        <div className='mb-4'>
          <h1 className='text-4xl font-semibold'>Your Card</h1>
        </div>
        <div className='mt-6 flex items-center  pt-2 md:mt-0 md:space-x-4  md:pt-0'></div>
      </div>
      <div className='overflow-hidden  rounded-xl shadow'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='bg-white  px-5 py-6 md:px-8'>
            <div className='flow-root'>
              <ul className='-my-7 divide-y divide-gray-200'>
                {products.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </ul>
            </div>
            <hr className='mt-6 border-gray-200' />
            <form action='#' className='mt-6'>
              <div className='sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5'>
                <div className='flex-grow'>
                  <input
                    className='flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                    type='text'
                    placeholder='Enter coupon code'
                  />
                </div>
                <div className='mt-4 sm:mt-0 md:mt-4 lg:mt-0'>
                  <button
                    type='button'
                    className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
            </form>
            <ul className='mt-6 space-y-3'>
              <li className='flex items-center justify-between text-gray-600'>
                <p className='text-sm font-medium'>Sub total</p>
                <p className='text-sm font-medium'>$399</p>
              </li>
              <li className='flex items-center justify-between text-gray-900'>
                <p className='text-sm font-medium '>Total</p>
                <p className='text-sm font-bold '>$114</p>
              </li>
            </ul>
          </div>
          <div className='px-5 py-6 text-gray-900 md:px-8'>
            <div className='flow-root'>
              <div className='-my-6 divide-y divide-gray-200'>
                <div className='py-6'>
                  <form>
                    <div className='mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0'>
                      <div>
                        <h3
                          id='contact-info-heading'
                          className='text-lg font-semibold text-gray-900'
                        >
                          Contact information
                        </h3>

                        <div className='mt-4 w-full'>
                          <label
                            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                            htmlFor='name'
                          >
                            Full Name
                          </label>
                          <input
                            className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                            type='text'
                            placeholder='Enter your name'
                            id='name'
                          ></input>
                        </div>
                      </div>
                      <hr className='my-8' />
                      <div className='mt-10'>
                        <h3 className='text-lg font-semibold text-gray-900'>
                          Payment details
                        </h3>

                        <div className='mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4'>
                          <div className='col-span-3 sm:col-span-4'>
                            <label
                              htmlFor='cardNum'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Card number
                            </label>
                            <div className='mt-1'>
                              <input
                                className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                                type='text'
                                placeholder='4242 4242 4242 4242'
                                id='cardNum'
                              ></input>
                            </div>
                          </div>
                          <div className='col-span-2 sm:col-span-3'>
                            <label
                              htmlFor='expiration-date'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Expiration date (MM/YY)
                            </label>
                            <div className='mt-1'>
                              <input
                                type='date'
                                name='expiration-date'
                                id='expiration-date'
                                autoComplete='cc-exp'
                                className='block h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor='cvc'
                              className='block text-sm font-medium text-gray-700'
                            >
                              CVC
                            </label>
                            <div className='mt-1'>
                              <input
                                type='text'
                                name='cvc'
                                id='cvc'
                                autoComplete='csc'
                                className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className='my-8' />
                      <div className='mt-10'>
                        <h3 className='text-lg font-semibold text-gray-900'>
                          Shipping address
                        </h3>

                        <div className='mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3'>
                          <div className='sm:col-span-3'>
                            <label
                              htmlFor='address'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Address
                            </label>
                            <div className='mt-1'>
                              <input
                                type='text'
                                id='address'
                                name='address'
                                autoComplete='street-address'
                                className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor='city'
                              className='block text-sm font-medium text-gray-700'
                            >
                              City
                            </label>
                            <div className='mt-1'>
                              <input
                                type='text'
                                id='city'
                                name='city'
                                autoComplete='address-level2'
                                className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor='region'
                              className='block text-sm font-medium text-gray-700'
                            >
                              State / Province
                            </label>
                            <div className='mt-1'>
                              <input
                                type='text'
                                id='region'
                                name='region'
                                autoComplete='address-level1'
                                className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor='postal-code'
                              className='block text-sm font-medium text-gray-700'
                            >
                              Postal code
                            </label>
                            <div className='mt-1'>
                              <input
                                type='text'
                                id='postal-code'
                                name='postal-code'
                                autoComplete='postal-code'
                                className='flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className='my-8' />
                      <div className='mt-10'>
                        <h3 className='text-lg font-semibold text-gray-900'>
                          Billing information
                        </h3>

                        <div className='mt-6 flex items-center'>
                          <input
                            id='same-as-shipping'
                            name='same-as-shipping'
                            type='checkbox'
                            defaultChecked
                            className='h-4 w-4 rounded border-gray-300 text-black focus:ring-black'
                          />
                          <div className='ml-2'>
                            <label
                              htmlFor='same-as-shipping'
                              className='text-sm font-medium text-gray-900'
                            >
                              Same as shipping information
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className='mt-10 flex justify-end border-t border-gray-200 pt-6'>
                        <button
                          type='button'
                          className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black'
                        >
                          Make payment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
