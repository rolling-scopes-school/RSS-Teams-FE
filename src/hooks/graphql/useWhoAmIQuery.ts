import { useQuery } from '@apollo/client';
import { SET_USER_DATA } from 'appConstants';

import { WHOAMI_QUERY } from 'graphql/queries';
import { useDispatch } from 'react-redux';

export const useWhoAmIQuery = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery(WHOAMI_QUERY);
  const isLoaded = !loading && data?.whoAmI;
  if (isLoaded) dispatch({ type: SET_USER_DATA, payload: data.whoAmI });

  return {
    loadingW: !isLoaded,
    errorW: error,
    whoAmI: data?.whoAmI,
  };
};
