import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_COURSE } from 'appConstants';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { Course } from 'types';
import {
  StyledCoursesSelectWrapper,
  StyledCoursesSelectHeaderWrapper,
  StyledCoursesList,
  StyledCoursesSelectInfo,
  StyledCoursesSelectArrow,
} from './styled';
import { useTranslation } from 'react-i18next';
import { setCurrCourse } from 'modules/LoginPage/loginPageReducer';

type CoursesSelectProps = {
  displayCoursesList: boolean;
  setDisplayCoursesList: (display: boolean) => void;
};

export const CoursesSelect: FC<CoursesSelectProps> = ({
  displayCoursesList,
  setDisplayCoursesList,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);

  const userCourses =
    userData.courses.filter((item) => item.id !== currCourse.id) ?? null;

  const onCourseChange = ({ id, name }: Course) => {
    const newCurrentCourse = { id, name };
    setDisplayCoursesList(false);
    localStorage.setItem(CURRENT_COURSE, JSON.stringify(newCurrentCourse));
    dispatch(setCurrCourse(newCurrentCourse));
  };

  return (
    <StyledCoursesSelectWrapper isClicked={displayCoursesList}>
      <StyledCoursesSelectHeaderWrapper isClicked={displayCoursesList}>
        <p>{t('Course')}</p>
        <StyledCoursesSelectInfo
          hover={!!userCourses.length}
          onClick={() => setDisplayCoursesList(!displayCoursesList)}
        >
          <p>{currCourse.name}</p>
          {!!userCourses.length && <StyledCoursesSelectArrow />}
        </StyledCoursesSelectInfo>
      </StyledCoursesSelectHeaderWrapper>{' '}
      {!!userCourses.length && (
        <StyledCoursesList>
          {userCourses.map((course: Course) => {
            return (
              <li
                key={JSON.stringify(course)}
                onClick={() => onCourseChange(course)}
              >
                {course.name}
              </li>
            );
          })}
        </StyledCoursesList>
      )}
    </StyledCoursesSelectWrapper>
  );
};
