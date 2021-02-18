import React, { FC, SelectHTMLAttributes, useState } from 'react';
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
  onAdd: any;
}
// {/* <select style="color:gray" onchange="this.style.color='black'"></select> */}
export const CourseField: FC<SelectFieldProps> = ({
  labelText,
  placeholder,
  multi = false,
  register,
  courses,
  onAdd,
  ...rest
}) => {
  const [selectedCourse, setSelectedCourse] = useState<any>(0);
  const courseOptions = courses
    ? courses.map((course: Course) => {
        return (
          <option key={course.id} value={course.id}>
            {course.name}
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
            value={selectedCourse}
            onChange={(e: any) =>
              setSelectedCourse(
                courses.find((course: Course) => course.id === e.target.value)
              )
            }
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
            }}
            type="button"
          ></PlusButton>
        )}
      </SelectCource>
    </FieldWrapper>
  );
};
