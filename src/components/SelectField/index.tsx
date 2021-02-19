import React, { FC, SelectHTMLAttributes } from 'react';
import { Label, Select, SelectInner } from 'typography';
import { FieldWrapper } from './styled';
//
// for future
// TODO: make separate SelectField component for other screens
// now is not used
//
interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  placeholder: string;
  multi?: boolean;
  register: any;
}

const SelectField: FC<SelectFieldProps> = ({
  labelText,
  placeholder,
  register,
  ...rest
}) => {
  return (
    <FieldWrapper>
      <Label>{labelText}</Label>
      <Select>
        <SelectInner
          placeholder={placeholder}
          ref={register}
          defaultValue="0"
          {...rest}
        >
          <option disabled hidden value="0">
            Select course
          </option>
          <option value="111">222</option>
          <option value="333">444</option>
        </SelectInner>
      </Select>
    </FieldWrapper>
  );
};
