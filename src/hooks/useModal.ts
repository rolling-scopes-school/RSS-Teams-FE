import { useEffect, useRef, useCallback, useState } from 'react';

import { useOutsideClick } from './useOutsideClick';

export const useModal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  console.log('111', open);
  const onOpen = useCallback(() => {
    console.log('222');
    // setTimeout(() => setOpen(true), 0);
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
    console.log('333');
    setOpen(false);
  }, []);

  useOutsideClick(ref, () => {
    onClose();
  });

  useEffect(() => {
    if (open) {
      document.querySelector('body')!.style.overflow = 'hidden';
    } else {
      document.querySelector('body')!.style.overflow = 'auto';
    }
  }, [open]);

  return {
    ref,
    open,
    onOpen,
    onClose,
  };
};
