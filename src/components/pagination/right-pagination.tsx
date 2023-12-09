import { useState } from 'react';

const RightPagination = () => {
  const [pages, setPages] = useState(['1', '2', '3', '...', '8', '9', '10']);
  const [currentPage, setCurrentPage] = useState('1');

  const handlePageClick = (page: string) => {
    setCurrentPage(page);
    // ... Update any other state or logic
  };

  return (
    <div className='mx-auto mt-12 max-w-screen-xl px-4 text-gray-600 md:px-8'>
      <div className='hidden justify-between text-sm md:flex'>
        <div>SHOWING 1-10 OF 120</div>
        <div className='flex items-center gap-12' aria-label='Pagination'>
          <a href='javascript:void(0)' className='hover:text-black'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 19l-7-7L5 19'
              />
            </svg>
          </a>
          <ul className='flex items-center gap-1'>
            {pages.map((item, idx) => (
              <li key={item}>
                {item === '...' ? (
                  <div>{item}</div>
                ) : (
                  <a
                    href='javascript:void(0)'
                    onClick={() => handlePageClick(item)}
                    aria-current={currentPage === item ? 'page' : false}
                    className={`rounded-lg from-black to-gray-800 px-3 py-2 duration-150 hover:bg-gradient-to-r hover:text-white ${
                      currentPage === item
                        ? 'bg-gradient-to-r from-black to-gray-800 font-medium text-white'
                        : ''
                    }`}
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <a href='javascript:void(0)' className='hover:text-black'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 5l7 7-7 7'
              />
            </svg>
          </a>
        </div>
      </div>
      {/* On mobile version */}
      <div className='flex items-center justify-between text-sm font-medium text-gray-600 md:hidden'>
        <a
          href='javascript:void(0)'
          className='rounded-lg border px-4 py-2 duration-150 hover:bg-gray-50'
        >
          Previous
        </a>
        <div className='font-medium'>SHOWING 1-10 OF 120</div>
        <a
          href='javascript:void(0)'
          className='rounded-lg border px-4 py-2 duration-150 hover:bg-gray-50'
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default RightPagination;
