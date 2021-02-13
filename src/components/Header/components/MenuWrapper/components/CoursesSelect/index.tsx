import { SET_CURR_COURSE } from 'appConstants';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { selectUserData } from 'modules/StudentsTable/selectors';
import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Course } from 'types';
import {
  StyledCoursesSelectWrapper,
  StyledCoursesSelectHeaderWrapper,
  StyledCoursesList,
  StyledCoursesSelectInfo,
  StyledCoursesSelectArrow,
} from './styled';

export const CoursesSelect: FC = () => {
  const dispatch = useDispatch();
  const [displayCoursesList, setDisplayCoursesList] = useState(false);
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);

  const userCourses = userData.courses.filter(
    (item) => item.id !== currCourse.id
  );

  const onCourseChange = (course: Course) => {
    setDisplayCoursesList(false);
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
      {userCourses.length ? (
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
