import { useQuery } from '@apollo/client';
import { SET_USER_DATA } from 'appConstants';

import { WHOAMI_QUERY } from 'graphql/queries';
import { useDispatch } from 'react-redux';

type Props = {
  skip: boolean;
};

export const useWhoAmIQuery = ({ skip = false }: Props) => {
  const dispatch = useDispatch();
  const { data, loading, error } = useQuery(WHOAMI_QUERY, {
    skip,
  });
  if (!!data) dispatch({ type: SET_USER_DATA, payload: data.whoAmI });

  return {
    loadingW: loading,
    errorW: error,
    whoAmI: data?.whoAmI,
  };
};
