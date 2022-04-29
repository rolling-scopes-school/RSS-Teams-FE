import React, { FC, SyntheticEvent, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { ReactComponent as IconClose } from 'assets/svg/cross.svg';
import styled from 'styled-components';
import styles from './index.module.css';
import { PageTitle, Label, Button, InvertedButton, ButtonsBlock } from 'typography';
import { useTranslation } from 'react-i18next';

type ModalProps = {
  title: string;
  text: string;
  text2?: string;
  open: boolean;
  hideOnOutsideClick?: boolean;
  hideOnEsc?: boolean;
  children?: React.ReactNode;
  onClose(): void;
  onSubmit?: (e: SyntheticEvent) => void;
  okText?: string;
  cancelText?: string;
  isCrossIconVisible?: boolean;
} & typeof defaultProps;

const defaultProps = {
  hideOnOutsideClick: true,
  hideOnEsc: true,
};

const ModalWindow = styled.div`
  left: 500px;
  top: 315px;
  background: #ffffff;
  border-radius: 20px;
`;

// TODO: refactoring spaghetti
export const Modal: FC<ModalProps> = ({
  title,
  text,
  text2,
  open,
  children,
  hideOnOutsideClick,
  hideOnEsc,
  onClose,
  onSubmit,
  isCrossIconVisible = true,
  okText,
  cancelText,
}) => {
  const insideRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

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
      if (e.key === 'Escape' || (!onSubmit && e.key === 'Enter')) {
        onClose();
      }
    };

    if (open && hideOnEsc) {
      document.addEventListener('keydown', listener);
    }

    return () => document.removeEventListener('keydown', listener);
  }, [open, onClose, hideOnEsc, onSubmit]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onOutClick}>
      <div className={styles.container} ref={insideRef}>
        {isCrossIconVisible && <IconClose className={styles.icon} onClick={close} />}
        <ModalWindow>
          <PageTitle>{t(title)}</PageTitle>
          <Label>{t(text)}</Label>
          <p>
            <Label>{text2 ? t(text2) : ''}</Label>
          </p>
          {children}
          <ButtonsBlock>
            {onSubmit ? (
              cancelText ? (
                <>
                  <InvertedButton onClick={onClose}>{t(cancelText)}</InvertedButton>
                  <Button
                    onClick={(e) => {
                      onSubmit(e);
                    }}
                  >
                    {okText ? t(okText) : ''}
                  </Button>
                </>
              ) : (
                <Button
                  onClick={(e) => {
                    onSubmit(e);
                  }}
                >
                  {okText ? t(okText) : ''}
                </Button>
              )
            ) : (
              <Button onClick={onClose}>{cancelText ? t(cancelText) : ''}</Button>
            )}
          </ButtonsBlock>
        </ModalWindow>
      </div>
    </div>,
    document.body
  );
};

Modal.defaultProps = defaultProps;
