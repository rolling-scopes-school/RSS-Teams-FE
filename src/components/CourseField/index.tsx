import React, { FC, SelectHTMLAttributes, useState } from 'react';
import { Label, Select, SelectInner } from 'typography';
import { FieldWrapper, SelectCource, PlusButton } from './styled';
import { ValidationAlert } from '../InputField/styled';

type Course = {
  id: string;
  name: string;
};

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText?: string;
  placeholder: string;
  multi?: boolean;
  register: any;
  courses: Course[];
  onAdd: any;
  isValid: boolean;
}

export const CourseField: FC<SelectFieldProps> = ({
  labelText,
  placeholder,
  multi = false,
  register,
  courses,
  onAdd,
  isValid,
  ...rest
}) => {
  const [selectedCourse, setSelectedCourse] = useState<any>(0);
  const [isAddCourse, setAddCourse] = useState(false);
  const courseOptions = courses
    ? courses.map((course: Course) => {
        return (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        );
      })
    : null;
  return (
    <FieldWrapper>
      {labelText && <Label>{labelText}</Label>}
      <SelectCource>
        <Select>
          <SelectInner
            placeholder={placeholder}
            ref={register}
            value={selectedCourse.id || 0}
            onChange={(e: any) => {
              setSelectedCourse(
                courses.find((course: Course) => course.id === e.target.value)
              );
              setAddCourse(true);
            }}
            {...rest}
          >
            <option disabled hidden value="0">
              Select course
            </option>
            {courseOptions}
          </SelectInner>
        </Select>
        {multi && (
          <PlusButton
            onClick={() => {
              onAdd(selectedCourse);
              setSelectedCourse(0);
              setAddCourse(false);
            }}
            type="button"
            active={isAddCourse}
          />
        )}
      </SelectCource>
      {!isValid && (
        <ValidationAlert>
          You need to choose at least one course
        </ValidationAlert>
      )}
    </FieldWrapper>
  );
};
