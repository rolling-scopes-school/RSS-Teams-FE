import { useQuery } from '@apollo/client';
import { USERS_PER_PAGE } from 'appConstants';

import { USERS_QUERY } from 'graphql/queries';
import { UserFilterInput } from 'types';

type Props = {
  reactCourseId: string;
  skip?: boolean;
  page?: number;
  filter?: UserFilterInput;
};

export const useUsersQuery = ({
  reactCourseId,
  skip = false,
  page = 0,
  filter,
}: Props) => {
  const { data, loading, error } = useQuery(USERS_QUERY, {
    skip,
    variables: {
      filter,
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
