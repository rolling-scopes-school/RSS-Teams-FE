import { useMutation } from '@apollo/client';
import { ADD_USER_TO_TEAM_MUTATION } from 'graphql/mutations';
import { WHOAMI_QUERY } from 'graphql/queries';
import { AddUserToTeamInput } from 'types';

type Props = {
  data: AddUserToTeamInput;
};

export const useAddUserToTeamMutation = ({ data }: Props) => {
  const [addUserToTeam, { loading, error }] = useMutation(ADD_USER_TO_TEAM_MUTATION, {
    variables: {
      data,
    },

    update(cache, { data: { addUserToTeam } }) {
      cache.writeQuery({
        query: WHOAMI_QUERY,
        data: {
          addUserToTeam,
        },
      });
    },
  });
  return {
    addUserToTeam,
    loadingM: loading,
    errorM: error,
  };
};
