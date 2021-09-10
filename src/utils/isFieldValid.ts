export const isFieldValid = (
  value: string,
  validateRules: any,
  needValidate: boolean,
  setInputValid: (valid: boolean) => void,
  setErrorMessage: (message: string) => void,
  isValueUniq?: (courseName: string) => boolean
) => {
  if (!needValidate) return true;

  const trimmedValueLength = value.trim().length;
  let valid = true;

  if (validateRules.maxLength) {
    valid = trimmedValueLength < validateRules.maxLength.value + 1 && valid;
    if (!(trimmedValueLength < validateRules.maxLength.value + 1)) {
      setErrorMessage(validateRules.maxLength.message);
    }
  }

  if (validateRules.minLength) {
    valid = trimmedValueLength >= validateRules.minLength.value && valid;
    if (!(trimmedValueLength >= validateRules.minLength.value)) {
      setErrorMessage(validateRules.minLength.message);
    }
  }

  if (validateRules.pattern) {
    const regExp = new RegExp(validateRules.pattern.value);
    valid = regExp.test(value) && valid;
    if (!regExp.test(value)) {
      setErrorMessage(validateRules.pattern.message);
    }
  }

  if (validateRules.uniq && isValueUniq) {
    const isFieldValueUniq = isValueUniq(value.trim());
    valid = isFieldValueUniq && valid;
    if (!isFieldValueUniq) {
      setErrorMessage(validateRules.uniq.message);
    }
  }

  setInputValid(valid);
};
