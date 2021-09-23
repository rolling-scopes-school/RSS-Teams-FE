import React, { FC, SelectHTMLAttributes } from 'react';
import { Label, Select, SelectInner } from 'typography';
import { FieldWrapper, SelectCourse } from './styled';
import { ValidationAlert } from '../InputField/styled';
import { useTranslation } from 'react-i18next';

type Course = {
  id: string;
  name: string;
  role: string;
  score: number;
};

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  labelText?: string;
  placeholder: string;
  register: any;
  courses: Course[];
  onAdd?: any;
  isValid?: boolean;
}

export const CourseField: FC<SelectFieldProps> = ({
  labelText,
  placeholder,
  courses,
  onAdd,
  isValid,
  name,
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

  const onAddCourse = (e: any) => {
    onAdd(courses.find((course: Course) => course.id === e.target.value));
  };

  return (
    <FieldWrapper>
      {labelText && <Label>{labelText}</Label>}
      <SelectCourse customWidth="100%" mr="0px">
        <Select>
          <SelectInner placeholder={t(placeholder)} value={0} onChange={onAddCourse} name={name}>
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
