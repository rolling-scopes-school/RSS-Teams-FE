import React, { FC, SelectHTMLAttributes } from 'react';
import { Label, Select, SelectInner } from 'typography';
import {
  FieldWrapper,
  SelectCource,
  PlusButton,
  CrossButton,
  PlaceholderOption,
} from './styled';

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
// {/* <select style="color:gray" onchange="this.style.color='black'"></select> */}
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
      <SelectCource>
        <Select>
          <SelectInner placeholder={placeholder} ref={register} {...rest}>
            <option value="111">222</option>
            <option value="333">444</option>
          </SelectInner>
        </Select>
        {multi && <CrossButton type="button"></CrossButton>}
      </SelectCource>
      <SelectCource>
        <Select>
          <SelectInner placeholder={placeholder} ref={register} {...rest}>
            <option value="111">222</option>
            <option value="333">444</option>
          </SelectInner>
        </Select>
        {!multi && <CrossButton></CrossButton>}
      </SelectCource>
    </FieldWrapper>
  );
};
