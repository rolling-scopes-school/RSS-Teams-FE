import { useQuery } from '@apollo/client';
import { WHOAMI_QUERY } from 'graphql/queries';

type Props = {
  skip: boolean;
};

export const useWhoAmIQuery = ({ skip = false }: Props) => {
  const {
    data,
    loading: loadingW,
    error,
  } = useQuery(WHOAMI_QUERY, {
    skip,
  });

  return {
    loadingW,
    errorW: error,
    whoAmI: data?.whoAmI,
  };
};
