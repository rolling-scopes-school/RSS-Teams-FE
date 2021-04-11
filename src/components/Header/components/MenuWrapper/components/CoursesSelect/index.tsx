import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_COURSE } from 'appConstants';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { Course } from 'types';
import { setCurrCourse } from 'modules/LoginPage/loginPageReducer';
import { CommonSelect } from './components/CommonSelect';

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
    dispatch(setCurrCourse(course));
  };

  return (
    <CommonSelect
      title="Course"
      listItems={userCourses}
      onClickHandler={onCourseChange}
      currItem={currCourse.name}
      displayList={displayCoursesList}
      setDisplayList={setDisplayCoursesList}
    />
  );
};
