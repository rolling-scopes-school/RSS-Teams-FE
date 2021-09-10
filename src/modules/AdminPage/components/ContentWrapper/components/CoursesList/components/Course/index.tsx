import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { CourseButton } from 'typography';
import { CourseWrapper } from './styled';
import { activeModalEditCourse, activeModalSortStudents } from 'modules/TeamsList/teamsListReducer';
import { Course } from 'types';

interface ICourseItem {
  index: number;
  id: string;
  name: string;
  teamSize: number | null;
  isActive: boolean;
  setCourseInfoToSort: (course: Partial<Course>) => void;
  setCourseEditMeta: (course: Course | null) => void;
}

export const CourseItem: FC<ICourseItem> = ({
  index,
  id,
  name,
  teamSize,
  isActive,
  setCourseInfoToSort,
  setCourseEditMeta,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const courseOrder = index + 1;
  const courseState = isActive ? 'Active(status)' : 'Terminate(status)';

  const onClickSortStudents = () => {
    setCourseInfoToSort({ id, name });
    dispatch(activeModalSortStudents(true));
  };

  const onClickEditCourse = () => {
    setCourseEditMeta({ id, name, isActive, teamSize });
    dispatch(activeModalEditCourse(true));
  };

  return (
    <CourseWrapper>
      <div className="TableItem--0">{courseOrder}</div>
      <div className="TableItem--1">{name}</div>
      <div className="TableItem--4">{teamSize ?? t('Unset')}</div>
      <div className="TableItem--9">{t(courseState)}</div>
      <CourseButton onClick={onClickEditCourse}>{t('Edit course')}</CourseButton>
      <CourseButton onClick={onClickSortStudents}>{t('Sort students')}</CourseButton>
    </CourseWrapper>
  );
};
