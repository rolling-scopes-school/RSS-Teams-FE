import { useEffect } from 'react';

export const useOutsideClick = (ref: any, callback: any) => {
  console.log(ref);
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback(e);
      }
    };

    if (ref.current) {
      document.addEventListener('click', handleClick);
      console.log('listener was set');
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [ref, callback]);
};
