import React, { FC } from 'react';
import { CoursesListWrapper } from './styled';
import { CourseItem } from './components/Course';
import { Course } from 'types';
import { ErrorModal, ModalEditCourse, ModalExpel } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsActiveModalEditCourse,
  selectIsActiveModalSortStudents,
} from 'modules/TeamsList/selectors';
import { activeModalSortStudents } from 'modules/TeamsList/teamsListReducer';
import { useSortStudentsMutation } from 'hooks/graphql';
import { useState } from 'react';

export const CoursesList: FC<{
  courses: Course[];
  isCourseNameUniq: (courseName: string) => boolean;
}> = ({ courses, isCourseNameUniq }) => {
  const [courseInfoToSort, setCourseInfoToSort] = useState<Partial<Course> | null>(null);
  const [courseEditMeta, setCourseEditMeta] = useState<Course | null>(null);
  const dispatch = useDispatch();
  const isActiveModalSortStudents = useSelector(selectIsActiveModalSortStudents);
  const isActiveModalEditCourse = useSelector(selectIsActiveModalEditCourse);

  const { sortStudents, errorM: errorSortStudents } = useSortStudentsMutation({
    courseId: courseInfoToSort?.id || '',
  });

  const onSubmitSortStudents = () => {
    sortStudents();
  };

  if (errorSortStudents) return <ErrorModal />;

  return (
    <>
      <CoursesListWrapper>
        {courses.map((course: Course, index: number) => (
          <CourseItem
            key={course.id}
            id={course.id}
            name={course.name}
            index={index}
            isActive={course.isActive}
            teamSize={course.teamSize}
            setCourseInfoToSort={setCourseInfoToSort}
            setCourseEditMeta={setCourseEditMeta}
          />
        ))}
      </CoursesListWrapper>
      <ModalExpel
        title={courseInfoToSort?.name ?? 'Sort students'}
        text="Sort students?"
        open={isActiveModalSortStudents}
        onSubmit={onSubmitSortStudents}
        isCrossIconVisible={false}
        onClose={() => dispatch(activeModalSortStudents(false))}
        okText="Yes"
        cancelText="No"
      />
      {courseEditMeta ? (
        <ModalEditCourse
          title="Edit course"
          text="Please, enter new course information"
          open={isActiveModalEditCourse}
          okText="Save"
          cancelText="Close"
          courseEditMeta={courseEditMeta}
          isCourseNameUniq={isCourseNameUniq}
          setCourseEditMeta={setCourseEditMeta}
        />
      ) : null}
    </>
  );
};
