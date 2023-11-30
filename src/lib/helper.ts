import { useEffect, useState } from 'react';

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}
export const useScreenWidth = () => {
  const isClient = typeof window === 'object';

  // Set initial width based on the environment
  const initialWidth = isClient ? window.innerWidth : 0;

  const [screenWidth, setScreenWidth] = useState(initialWidth);

  useEffect(() => {
    if (!isClient) {
      // If running on the server, return early and don't set up event listeners
      return;
    }

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Set up event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]); // Include isClient in the dependency array to handle changes in the environment

  return screenWidth;
};
