import { useMutation } from '@apollo/client';
import { SORT_STUDENTS_MUTATION } from 'graphql/mutations';

type Props = {
  courseId: string;
};

export const useSortStudentsMutation = ({ courseId }: Props) => {
  const [sortStudents, { loading, error }] = useMutation(SORT_STUDENTS_MUTATION, {
    variables: {
      courseId,
    },
  });
  return {
    sortStudents,
    loadingM: loading,
    errorM: error,
  };
};
