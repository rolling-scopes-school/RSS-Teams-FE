import { useMutation } from '@apollo/client';
import { Course, CreateCourseInput } from 'types';
import { COURSES_QUERY } from 'graphql/queries';
import { CREATE_COURSE_MUTATION } from 'graphql/mutations';

type Props = {
  course: CreateCourseInput;
};

export const useCreateCourseMutation = ({ course }: Props) => {
  const [createCourse, { loading, error }] = useMutation(CREATE_COURSE_MUTATION, {
    variables: {
      course,
    },

    update(cache, { data: { createCourse } }) {
      const data: { courses: Course[] } | null = cache.readQuery({
        query: COURSES_QUERY,
      });

      const updatedResults = data?.courses?.length
        ? [createCourse, ...data?.courses]
        : [createCourse];

      cache.writeQuery({
        query: COURSES_QUERY,
        data: {
          courses: updatedResults,
        },
      });
    },
  });
  return {
    createCourse,
    loadingM: loading,
    errorM: error,
  };
};
