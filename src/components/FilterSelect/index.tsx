import React, { FC, SelectHTMLAttributes } from 'react';
import { Label, Select, SelectInner } from 'typography';
import { FieldWrapper, SelectCourse } from 'components/CourseField/styled';

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText?: string;
  placeholder: string;
  register: any;
  options: string[];
  widthSelect?: string | undefined;
  currentOption: string;
}

export const FilterSelect: FC<SelectFieldProps> = ({
  labelText,
  placeholder,
  register,
  options,
  widthSelect,
  currentOption,
  ...rest
}) => {
  const filterFieldOptions =
    options.map((option: string, index: number) => {
      return (
        <option key={`OptionFilterKey-${index}`} value={option}>
          {option}
        </option>
      );
    }) ?? null;
  return (
    <FieldWrapper>
      {labelText && <Label>{labelText}</Label>}
      <SelectCourse>
        <Select {...{ widthSelect }}>
          <SelectInner
            placeholder={placeholder}
            ref={register}
            value={currentOption}
            {...rest}
          >
            {filterFieldOptions}
          </SelectInner>
        </Select>
      </SelectCourse>
    </FieldWrapper>
  );
};
