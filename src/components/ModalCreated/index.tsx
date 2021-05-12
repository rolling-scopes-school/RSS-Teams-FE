import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Modal } from 'components';
import { ModalInput, InvertedButton } from 'typography';
import { BG_COLOR } from 'appConstants/colors';
import CopyIcon from 'assets/svg/copy2clip.svg';

const InputWithCopy = styled.div`
  position: relative;
`;

const CopyButton = styled(InvertedButton)`
  right: 40px;
  bottom: 0;
  padding: 19px 15px;
  position: absolute;
  background: ${BG_COLOR} url(${CopyIcon}) no-repeat center center;
`;

type Props = {
  title: string;
  text: string;
  text2?: string;
  open: boolean;
  onClose: () => void;
  cancelText?: string;
  password: string;
} & typeof defaultProps;

const defaultProps = {
  text2: '',
};

export const ModalCreated: FC<Props> = ({
  title,
  text,
  text2,
  open,
  cancelText,
  onClose,
  password,
}) => {
  const [isCopy, setIsCopy] = useState(false);

  const CopyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopy(true);
        setTimeout(() => {
          setIsCopy(false);
        }, 1000);
      })
      .catch((err) => {
        console.log('Something went wrong', err);
      });
  };
  const onClickCopyButton = () => CopyToClipboard(password);

  return (
    <Modal
      {...{ title, text, text2, open, onClose, cancelText }}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    >
      <InputWithCopy>
        <ModalInput name="InputValue" value={password} readOnly blink={isCopy} />
        <CopyButton onClick={onClickCopyButton} />
      </InputWithCopy>
    </Modal>
  );
};
