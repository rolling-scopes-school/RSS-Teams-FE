import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { ReactComponent as IconClose } from 'assets/svg/cross.svg';
import styles from './index.module.css';

type Props = {
  open: boolean;
  hideOnOutsideClick?: boolean;
  hideOnEsc?: boolean;
  children: any;
  onClose(): void;
} & typeof defaultProps;

const defaultProps = {
  hideOnOutsideClick: true,
  hideOnEsc: true,
};

export const Modal = (props: Props) => {
  const { open, onClose, children, hideOnOutsideClick, hideOnEsc } = props;
  const insideRef = useRef<HTMLDivElement>(null);

  const close = (e: React.MouseEvent | MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const onOutClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const curRef = insideRef.current;
    if (hideOnOutsideClick && curRef && !curRef.contains(e.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (open && hideOnEsc) {
      document.addEventListener('keydown', listener);
    }

    return () => document.removeEventListener('keydown', listener);
  }, [open, onClose, hideOnEsc]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onOutClick}>
      <div className={styles.container} ref={insideRef}>
        <IconClose className={styles.icon} onClick={close} />
        {children}
      </div>
    </div>,
    document.body
  );
};

Modal.defaultProps = defaultProps;
