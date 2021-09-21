import React, { FC, SelectHTMLAttributes, useState } from 'react';
import { Label, Select, SelectInner } from 'typography';
import { FieldWrapper, JoinButton, SelectCourse } from './styled';
import { ValidationAlert } from '../InputField/styled';
import { useTranslation } from 'react-i18next';
import { roles, scoreFormField } from 'modules/EditProfile/formFields';
import { UserCourseInput } from 'modules/EditProfile/components/UserCourseListItem/styled';

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
  courses,
  onAdd,
  isValid,
  name,
  multi,
}) => {
  const { t } = useTranslation();
  const [score, setScore] = useState(0);
  const [role, setRole] = useState('');
  const [course, setCourse] = useState('');
  const courseOptions = courses
    ? courses.map((course: Course) => {
        return (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        );
      })
    : null;

  const rolesOptions = roles.map((role: string) => {
    return (
      <option key={role} value={role}>
        {role}
      </option>
    );
  });

  const onAddCourse = (e: any) => {
    onAdd(courses.find((course: Course) => course.id === e.target.value));
  };

  return (
    <FieldWrapper>
      {labelText && <Label>{labelText}</Label>}
      <SelectCourse>
        <Select>
          <SelectInner
            placeholder={t(placeholder)}
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            {...{ name, multi }}
          >
            <option disabled hidden value="">
              {t('Select course')}
            </option>
            {courseOptions}
          </SelectInner>
        </Select>
      </SelectCourse>
      <SelectCourse>
        <Select>
          <SelectInner
            placeholder={t(placeholder)}
            value={role}
            onChange={(e) => setRole(e.target.value)}
            name="roles"
          >
            <option disabled hidden value="">
              {t('Select role')}
            </option>
            {rolesOptions}
          </SelectInner>
        </Select>
      </SelectCourse>
      <UserCourseInput
        autoComplete="off"
        disabled={role === 'Mentor'}
        uncommonWidth="auto"
        mr="20px"
        name={scoreFormField.name}
        value={score}
        onChange={(e) => setScore(+e.target.value)}
      />
      <JoinButton type="button" onClick={onAddCourse}>
        {t('Join')}
      </JoinButton>
      {!isValid && <ValidationAlert>{t('You need to choose at least one course')}</ValidationAlert>}
    </FieldWrapper>
  );
};
