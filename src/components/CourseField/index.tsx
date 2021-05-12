import React, { FC, SelectHTMLAttributes } from 'react';
import { Label, Select, SelectInner } from 'typography';
import { FieldWrapper, SelectCourse } from './styled';
import { ValidationAlert } from '../InputField/styled';
import { useTranslation } from 'react-i18next';

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
  onAdd?: any;
  isValid?: boolean;
}

export const CourseField: FC<SelectFieldProps> = ({
  labelText,
  placeholder,
  register,
  courses,
  onAdd,
  isValid,
  ...rest
}) => {
  const { t } = useTranslation();
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
      <SelectCourse>
        <Select>
          <SelectInner
            placeholder={t(placeholder)}
            ref={register}
            value={0}
            onChange={(e: any) => {
              onAdd(courses.find((course: Course) => course.id === e.target.value));
            }}
            {...rest}
          >
            <option disabled hidden value="0">
              {t('Select course')}
            </option>
            {courseOptions}
          </SelectInner>
        </Select>
      </SelectCourse>
      {!isValid && <ValidationAlert>{t('You need to choose at least one course')}</ValidationAlert>}
    </FieldWrapper>
  );
};
