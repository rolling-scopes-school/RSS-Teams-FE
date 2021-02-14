import { useEffect, useRef, useCallback, useState } from 'react';

import { useOutsideClick } from './useOutsideClick';

export const useModal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const onOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const onClose = useCallback(() => {
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
