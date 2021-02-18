import React, { FC, SelectHTMLAttributes } from 'react';
import { Label, Select, SelectInner } from 'typography';
import { FieldWrapper, SelectCource, PlusButton } from './styled';

type Course = {
  id: string;
  name: string;
};

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText: string;
  placeholder: string;
  multi?: boolean;
  register: any;
  courses: Course[];
}

export const CourseField: FC<SelectFieldProps> = ({
  labelText,
  placeholder,
  multi = false,
  register,
  courses,
  ...rest
}) => {
  const courseOptions = courses
    ? courses.map((c) => {
        return (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        );
      })
    : null;
  // console.log(courseOptions);
  return (
    <FieldWrapper>
      <Label>{labelText}</Label>
      <SelectCource>
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
            {courseOptions}
          </SelectInner>
        </Select>
        {multi && <PlusButton type="button"></PlusButton>}
      </SelectCource>
    </FieldWrapper>
  );
};
