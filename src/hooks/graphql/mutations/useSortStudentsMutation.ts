import { useMutation } from '@apollo/client';
import { TEAMS_PER_PAGE } from 'appConstants';
import { SORT_STUDENTS_MUTATION } from 'graphql/mutations';
import { TEAMS_QUERY } from 'graphql/queries';

type Props = {
  courseId: string;
  page: number;
};

export const useSortStudentsMutation = ({ courseId, page }: Props) => {
  const [sortStudents, { loading, error }] = useMutation(
    SORT_STUDENTS_MUTATION,
    {
      variables: {
        courseId,
      },
      refetchQueries: [
        {
          query: TEAMS_QUERY,
          variables: {
            courseId,
            pagination: {
              skip: page * TEAMS_PER_PAGE,
              take: TEAMS_PER_PAGE,
            },
          },
        },
      ],
      awaitRefetchQueries: true,
    }
  );
  return {
    sortStudents,
    loadingM: loading,
    errorM: error,
  };
};
