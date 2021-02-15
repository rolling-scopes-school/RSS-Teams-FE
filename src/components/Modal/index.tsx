import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { ReactComponent as IconClose } from 'assets/svg/cross.svg';
import styles from './index.module.css';
import styled from 'styled-components';
import { PageTitle, Label, Button, InvertedButton } from 'typography/index';

type Props = {
  title: string;
  text: string;
  open: boolean;
  hideOnOutsideClick?: boolean;
  hideOnEsc?: boolean;
  children: React.ReactNode;
  onClose(): void;
  onSubmit(e: any): void;
} & typeof defaultProps;

const defaultProps = {
  hideOnOutsideClick: true,
  hideOnEsc: true,
};

const ModalWindow = styled.div`
  /* width: 440px; */
  /* height: 269px; */
  left: 500px;
  top: 315px;

  background: #ffffff;
  border-radius: 20px;
`;

const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const Modal = (props: Props) => {
  const {
    title,
    text,
    open,
    children,
    hideOnOutsideClick,
    hideOnEsc,
    onClose,
    onSubmit,
  } = props;
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
        <ModalWindow>
          <PageTitle>{title}</PageTitle>
          <Label>{text}</Label>
          {children}
          <ButtonsBlock>
            <InvertedButton>{CancelText}</InvertedButton>
            <Button onClick={onSubmit}>{OKText}</Button>
          </ButtonsBlock>
        </ModalWindow>
      </div>
    </div>,
    document.body
  );

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
