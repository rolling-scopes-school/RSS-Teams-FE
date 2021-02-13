import { useQuery } from '@apollo/client';
import { TEAMS_PER_PAGE } from 'appConstants';

import { TEAMS_QUERY } from 'graphql/queries';
type Props = {
  reactCourseId: string;
  skip?: boolean;
  page?: number;
};

export const useTeamsQuery = ({
  reactCourseId,
  skip = false,
  page = 0,
}: Props) => {
  const { data, loading, error } = useQuery(TEAMS_QUERY, {
    skip,
    variables: {
      courseId: reactCourseId,
      pagination: {
        skip: page * TEAMS_PER_PAGE,
        take: TEAMS_PER_PAGE,
      },
    },
  });
  const isLoaded = !loading && !!data;
  return {
    loadingT: !isLoaded,
    errorT: error,
    teams: data?.teams,
  };
};
