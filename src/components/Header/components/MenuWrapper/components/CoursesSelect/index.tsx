import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_COURSE } from 'appConstants';
import {
  selectCurrCourse,
  selectIsCourseSelectOpen,
} from 'modules/LoginPage/selectors';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { Course } from 'types';
import {
  setCourseSelectOpen,
  setCurrCourse,
} from 'modules/LoginPage/loginPageReducer';
import { CommonSelectList } from 'components';

export const CoursesSelect: FC = () => {
  const dispatch = useDispatch();
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);
  const isCourseSelectOpen = useSelector(selectIsCourseSelectOpen);

  const userCourses =
    userData.courses.filter((item) => item.id !== currCourse.id) ?? null;

  const onCourseChange = (course: Course) => {
    dispatch(setCourseSelectOpen(false));
    localStorage.setItem(CURRENT_COURSE, JSON.stringify(course));
    dispatch(setCurrCourse(course));
  };

  return (
    <CommonSelectList
      title="Course"
      listItems={userCourses}
      onClickHandler={onCourseChange}
      currItem={currCourse.name}
      displayList={isCourseSelectOpen}
      setDisplayList={setCourseSelectOpen}
    />
  );
};
