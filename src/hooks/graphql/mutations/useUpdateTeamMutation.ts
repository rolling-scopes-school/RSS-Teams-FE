import { useMutation } from '@apollo/client';
import { UpdateTeamInput, User, Team } from 'types';
import { WHOAMI_QUERY } from 'graphql/queries';
import { UPDATE_TEAM_MUTATION } from 'graphql/mutations';

type Props = {
  team: UpdateTeamInput;
};

export const useUpdateTeamMutation = ({ team }: Props) => {
  const { id } = team;
  const [updateTeam, { loading, error }] = useMutation(UPDATE_TEAM_MUTATION, {
    variables: {
      team,
    },

    update(cache, { data: { updateTeam } }) {
      const userData: { whoAmI: User } | null = cache.readQuery({
        query: WHOAMI_QUERY,
      });

      const updatedUserTeam = (userData?.whoAmI.teams as Team[]).map(
        (team: Team) => {
          if (team.id === id) {
            return updateTeam;
          }
          return team;
        }
      );

      cache.writeQuery({
        query: WHOAMI_QUERY,
        data: {
          whoAmI: {
            ...userData?.whoAmI,
            teams: updatedUserTeam,
          },
        },
      });
    },
  });
  return {
    updateTeam,
    loadingM: loading,
    errorM: error,
  };
};
