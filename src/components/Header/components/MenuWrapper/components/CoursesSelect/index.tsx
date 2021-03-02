import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_COURSE, SET_CURR_COURSE } from 'appConstants';
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

type CoursesSelectProps = {
  displayCoursesList: boolean;
  setDisplayCoursesList: (display: boolean) => void;
};

export const CoursesSelect: FC<CoursesSelectProps> = ({
  displayCoursesList,
  setDisplayCoursesList,
}) => {
  const dispatch = useDispatch();
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);

  const userCourses =
    userData.courses.filter((item) => item.id !== currCourse.id) ?? null;

  const onCourseChange = (course: Course) => {
    setDisplayCoursesList(false);
    localStorage.setItem(CURRENT_COURSE, JSON.stringify(course));
    dispatch({ type: SET_CURR_COURSE, payload: course });
  };

  return (
    <StyledCoursesSelectWrapper isClicked={displayCoursesList}>
      <StyledCoursesSelectHeaderWrapper isClicked={displayCoursesList}>
        <p>Course</p>
        <StyledCoursesSelectInfo
          hover={!!userCourses.length}
          onClick={() => setDisplayCoursesList(!displayCoursesList)}
        >
          <p>{currCourse.name}</p>
          {userCourses.length ? <StyledCoursesSelectArrow /> : null}
        </StyledCoursesSelectInfo>
      </StyledCoursesSelectHeaderWrapper>{' '}
      {!!userCourses.length ? (
        <StyledCoursesList>
          {userCourses.map((course: Course, index: number) => {
            return (
              <li
                key={`CourseKey-${index}`}
                onClick={() => onCourseChange(course)}
              >
                {course.name}
              </li>
            );
          })}
        </StyledCoursesList>
      ) : null}
    </StyledCoursesSelectWrapper>
  );
};
