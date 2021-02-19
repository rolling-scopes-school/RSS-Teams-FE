import { useMutation } from '@apollo/client';
import { TEAMS_PER_PAGE } from 'appConstants';
import { ADD_USER_TO_TEAM_MUTATION } from 'graphql/mutations';
import { TEAMS_QUERY, WHOAMI_QUERY } from 'graphql/queries';
import { AddUserToTeamInput, Team, TeamList } from 'types';

type Props = {
  data: AddUserToTeamInput;
};

export const useAddUserToTeamMutation = ({ data }: Props) => {
  const [addUserToTeam, { loading }] = useMutation(ADD_USER_TO_TEAM_MUTATION, {
    variables: {
      data: data,
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
  };
};
