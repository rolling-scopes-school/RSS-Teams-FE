import { RefObject, useEffect } from 'react';

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: (e: MouseEvent) => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      console.dir(e.target);
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback(e);
      }
    };

    if (ref.current) {
      document.addEventListener('click', handleClick);
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);
};
