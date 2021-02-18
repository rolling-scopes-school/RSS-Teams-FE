import React, { FC } from 'react';
import styled from 'styled-components';
import { Modal } from 'components';
import { ModalInput, InvertedButton } from 'typography';
import { BG_COLOR } from 'appConstants/colors';
import { ReactComponent as CopyIcon } from 'assets/svg/copy2clip.svg';
const InputWithCopy = styled.div`
  position: relative;
`;

const CopyButton = styled(InvertedButton)`
  right: 40px;
  bottom: 0;
  padding: 19px 15px;
  position: absolute;
  background: ${BG_COLOR}
    url("data:image/svg+xml,%0A%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.2857 15.9999H5.14284C4.68834 15.9994 4.2526 15.8186 3.93121 15.4972C3.60983 15.1759 3.42906 14.7401 3.42856 14.2856V5.14275C3.42906 4.68825 3.60983 4.2525 3.93121 3.93112C4.2526 3.60974 4.68834 3.42897 5.14284 3.42847H14.2857C14.7402 3.42897 15.1759 3.60974 15.4973 3.93112C15.8187 4.2525 15.9995 4.68825 16 5.14275V14.2856C15.9995 14.7401 15.8187 15.1759 15.4973 15.4972C15.1759 15.8186 14.7402 15.9994 14.2857 15.9999ZM5.14284 4.57132C4.99132 4.57141 4.84603 4.63165 4.73888 4.73879C4.63174 4.84594 4.57151 4.99123 4.57142 5.14275V14.2856C4.57151 14.4371 4.63174 14.5824 4.73888 14.6896C4.84603 14.7967 4.99132 14.8569 5.14284 14.857H14.2857C14.4372 14.8569 14.5825 14.7967 14.6897 14.6896C14.7968 14.5824 14.857 14.4371 14.8571 14.2856V5.14275C14.857 4.99123 14.7968 4.84594 14.6897 4.73879C14.5825 4.63165 14.4372 4.57141 14.2857 4.57132H5.14284Z' fill='%237E96C2'/%3E%3Cpath d='M1.71429 12.5714C1.25978 12.5709 0.824037 12.3902 0.502654 12.0688C0.181271 11.7474 0.000499131 11.3116 0 10.8571V1.71429C0.000499131 1.25978 0.181271 0.824037 0.502654 0.502654C0.824037 0.181271 1.25978 0.000499131 1.71429 0H10.8571C11.3116 0.000499131 11.7474 0.181271 12.0688 0.502654C12.3902 0.824037 12.5709 1.25978 12.5714 1.71429C12.5714 1.86584 12.5112 2.01118 12.4041 2.11835C12.2969 2.22551 12.1516 2.28571 12 2.28571C11.8484 2.28571 11.7031 2.22551 11.5959 2.11835C11.4888 2.01118 11.4286 1.86584 11.4286 1.71429C11.4285 1.56276 11.3682 1.41747 11.2611 1.31033C11.154 1.20318 11.0087 1.14295 10.8571 1.14286H1.71429C1.56276 1.14295 1.41747 1.20318 1.31033 1.31033C1.20318 1.41747 1.14295 1.56276 1.14286 1.71429V10.8571C1.14295 11.0087 1.20318 11.154 1.31033 11.2611C1.41747 11.3682 1.56276 11.4285 1.71429 11.4286C1.86584 11.4286 2.01118 11.4888 2.11835 11.5959C2.22551 11.7031 2.28571 11.8484 2.28571 12C2.28571 12.1516 2.22551 12.2969 2.11835 12.4041C2.01118 12.5112 1.86584 12.5714 1.71429 12.5714Z' fill='%237E96C2'/%3E%3C/svg%3E")
    no-repeat center center;
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

const CopyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log('copied');
    })
    .catch((err) => {
      console.log('Something went wrong', err);
    });
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
  return (
    <Modal
      {...{ title, text, open, onClose, cancelText }}
      text2={text2}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    >
      <InputWithCopy>
        <ModalInput name="InputValue" value={password} readOnly />
        <CopyButton onClick={() => CopyToClipboard(password)} />
      </InputWithCopy>
    </Modal>
  );
};
