import React, { forwardRef, memo } from 'react';
import ReactDOM from 'react-dom';

import { ReactComponent as IconClose } from 'assets/svg/cross.svg';

import styles from './index.module.css';

type Props = {
  open: boolean;
  children: any;
  onClose(): void;
};

export const Modal = memo(
  forwardRef<HTMLDivElement, Props>((props, ref) => {
    const { open, onClose, children } = props;

    if (!open) {
      return null;
    }

    return ReactDOM.createPortal(
      <div className={styles.overlay}>
        <div className={styles.container} ref={ref}>
          <IconClose className={styles.icon} onClick={onClose} />
          {children}
        </div>
      </div>,
      document.body
    );
  })
);
