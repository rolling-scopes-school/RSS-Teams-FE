import { useQuery } from '@apollo/client';

import { COURSES_QUERY } from 'graphql/queries';

export const useCoursesQuery = () => {
  const { data, loading, error } = useQuery(COURSES_QUERY);
  const isLoaded = !loading && data?.courses;

  return {
    loading: !isLoaded,
    error,
    courses: data?.courses,
  };
};
