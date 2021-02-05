import { useQuery } from '@apollo/client';
import { USERS_PER_PAGE } from 'appConstants';

import { USERS_QUERY } from 'graphql/queries';

type Props = {
  reactCourseId: string;
  skip?: boolean;
  page?: number;
};

export const useUsersQuery = ({
  reactCourseId,
  skip = false,
  page = 0,
}: Props) => {
  const { data, loading, error } = useQuery(USERS_QUERY, {
    skip,
    variables: {
      courseId: reactCourseId,
      pagination: {
        skip: page * USERS_PER_PAGE,
        take: USERS_PER_PAGE,
      },
    },
  });
  const isLoaded = !loading && !!data;

  return {
    loadingU: !isLoaded,
    errorU: error,
    users: data?.users,
  };
};
