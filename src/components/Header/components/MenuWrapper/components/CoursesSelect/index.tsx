import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { Course } from 'types';
import { CommonSelectList } from 'components';
import { setCourse } from 'modules/LoginPage/loginPageMiddleware';

export const CoursesSelect: FC = () => {
  const [isCourseSelectOpen, setCourseSelectOpen] = useState(false);
  const dispatch = useDispatch();
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);

  const userCourses =
    userData.courses.filter((item) => item.id !== currCourse.id) ?? null;

  const onCourseChange = (course: Course) => {
    setCourseSelectOpen(false);
    dispatch(setCourse(course));
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
