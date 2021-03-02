import { useMutation } from '@apollo/client';
import { REMOVE_USER_FROM_COURSE_MUTATION } from 'graphql/mutations';
import { WHOAMI_QUERY } from 'graphql/queries';
import { RemoveUserFromCourseInput } from 'types';

type Props = {
  data: RemoveUserFromCourseInput;
};

export const useRemoveUserFromCourseMutation = ({ data }: Props) => {
  const [removeUserFromCourse, { loading, error }] = useMutation(
    REMOVE_USER_FROM_COURSE_MUTATION,
    {
      variables: {
        data,
      },

      update(cache, { data: { removeUserFromCourse } }) {
        cache.writeQuery({
          query: WHOAMI_QUERY,
          data: {
            removeUserFromCourse,
          },
        });
      },
    }
  );
  return {
    removeUserFromCourse,
    loadingM: loading,
    errorM: error,
  };
};
