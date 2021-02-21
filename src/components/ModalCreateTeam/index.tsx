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

export const ModalCreateTeam: FC<Props> = ({
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

  const [isTouched, setTouched] = useState(false);
  const [isInputValid, setInputValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isValid = (
    value: string,
    validateRules: any,
    needValidate: boolean
  ) => {
    if (!needValidate) return true;

    let valid = needValidate && isTouched;

    // if (validateRules.required && value.length === 0) {
    //   valid = value.length !== 0 && valid;
    //   setErrorMessage(validateRules.required);
    // }

    if (validateRules.minLength) {
      valid = value.length >= validateRules.minLength.value && valid;
      if (!(value.length >= validateRules.minLength.value)) {
        setErrorMessage(validateRules.minLength.message);
      }
    }

    if (validateRules.maxLength) {
      valid = value.length < validateRules.maxLength.value + 1 && valid;
      if (!(value.length < validateRules.maxLength.value + 1)) {
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
      {...{ title, text, open, onClose, okText }}
      onSubmit={() => {
        if (isInputValid) {
          onSubmitModal();
        }
      }}
      hideOnOutsideClick={true}
      hideOnEsc={true}
    >
      <ModalInput
        name="inputValue"
        required
        value={value}
        onChange={(e) => {
          setTouched(true);
          dispatch({ type: SET_SOCIAL_LINK, payload: e.target.value });
          isValid(e.target.value, validateRules, !!validateRules);
        }}
        placeholder="Enter group link"
      />
      {!isInputValid && <ValidationAlert>{errorMessage}</ValidationAlert>}
    </Modal>
  );
};
