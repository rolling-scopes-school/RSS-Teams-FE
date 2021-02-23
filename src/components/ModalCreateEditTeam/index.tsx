import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components';
import { ModalInput } from 'typography';
import { SET_SOCIAL_LINK } from 'appConstants';
import { ValidationAlert } from '../InputField/styled';

type Props = {
  title: string;
  text: string;
  open: boolean;
  onSubmit?: () => void;
  onClose: () => void;
  value: string;
  okText?: string;
  validateRules?: any;
} & typeof defaultProps;

const defaultProps = {
  open: false,
  okText: 'Create team',
};

export const ModalCreateEditTeam: FC<Props> = ({
  title,
  text,
  open,
  okText,
  value,
  onClose,
  onSubmit,
  validateRules,
}) => {
  const dispatch = useDispatch();

  const onSubmitModal = () => {
    if (onSubmit) {
      onClose();
      onSubmit();
    }
  };

  const [isInputValid, setInputValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isValid = (
    value: string,
    validateRules: any,
    needValidate: boolean
  ) => {
    if (!needValidate) return true;

    let valid = true;

    if (validateRules.maxLength) {
      valid = value.trim().length < validateRules.maxLength.value + 1 && valid;
      if (!(value.trim().length < validateRules.maxLength.value + 1)) {
        setErrorMessage(validateRules.maxLength.message);
      }
    }

    if (validateRules.pattern) {
      const regExp = new RegExp(validateRules.pattern.value);
      valid = regExp.test(value) && valid;
      if (!regExp.test(value)) {
        setErrorMessage(validateRules.pattern.message);
      }
    }

    setInputValid(valid);
  };

  return (
    <Modal
      {...{ title, text, open, okText }}
      onClose={() => {
        onClose();
        setErrorMessage('');
      }}
      onSubmit={() => {
        if (isInputValid) {
          onSubmitModal();
        } else {
          setErrorMessage('Please enter link');
        }
      }}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    >
      <ModalInput
        name="inputValue"
        required
        value={value.trim()}
        autoComplete={'off'}
        onChange={(e) => {
          dispatch({ type: SET_SOCIAL_LINK, payload: e.target.value.trim() });
          isValid(e.target.value.trim(), validateRules, !!validateRules);
        }}
        placeholder="Enter group link"
      />
      {!isInputValid && <ValidationAlert>{errorMessage}</ValidationAlert>}
    </Modal>
  );
};
