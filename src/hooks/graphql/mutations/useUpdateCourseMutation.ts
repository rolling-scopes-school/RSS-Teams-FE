import { useMutation } from '@apollo/client';
import { UpdateCourseInput, Course } from 'types';
import { COURSES_QUERY } from 'graphql/queries';
import { UPDATE_COURSE_MUTATION } from 'graphql/mutations';

type Props = {
  course: UpdateCourseInput;
};

export const useUpdateCourseMutation = ({ course }: Props) => {
  const { id } = course;
  const [updateCourse, { loading, error }] = useMutation(UPDATE_COURSE_MUTATION, {
    variables: {
      course,
    },

    update(cache, { data: { updateCourse } }) {
      const data: { courses: Course[] } | null = cache.readQuery({
        query: COURSES_QUERY,
      });

      const updatedResults = data?.courses?.map((course: Course) => {
        if (course.id === id) {
          return updateCourse;
        }
        return course;
      });

      cache.writeQuery({
        query: COURSES_QUERY,
        data: {
          courses: updatedResults,
        },
      });
    },
  });
  return {
    updateCourse,
    loadingM: loading,
    errorM: error,
  };
};
