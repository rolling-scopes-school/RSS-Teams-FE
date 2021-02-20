import React, { FC } from 'react';
import { Modal } from 'components';
import { ModalInput } from 'typography';

type Props = {
  title: string;
  text: string;
  open: boolean;
  onSubmit?: (e: string) => void;
  onClose: () => void;
  onChange: any;
  value: string;
  okText?: string;
  cancelText?: string;
};

export const ModalJoin: FC<Props> = ({
  title,
  text,
  open,
  okText,
  value,
  onChange,
  cancelText,
  onClose,
  onSubmit,
}) => {
  // const [inputValue, setInputValue] = useState<string>('');
  // useEffect(() => {
  //   setInputValue('');
  // }, [open]);

  const onSubmitModal = () => {
    if (onSubmit && value) {
      onSubmit(value);
    }
  };

  // const InputChange = (e: any) => {
  //   setInputValue(e.target.value);
  // };

  return (
    <Modal
      {...{ title, text, open, onClose, okText, cancelText }}
      onSubmit={onSubmitModal}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    >
      <ModalInput
        placeholder="Enter team password"
        name="InputValue"
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="password"
      />
    </Modal>
  );
};
