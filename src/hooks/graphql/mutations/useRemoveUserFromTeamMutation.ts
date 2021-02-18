import { useMutation } from '@apollo/client';
import { RemoveUserFromTeamInput, Team, TeamList, User } from 'types';
import { TEAMS_QUERY, WHOAMI_QUERY } from 'graphql/queries';
import { REMOVE_USER_FROM_TEAM_MUTATION } from 'graphql/mutations';
import { TEAMS_PER_PAGE } from 'appConstants';

type Props = {
  data: RemoveUserFromTeamInput;
};

export const useRemoveUseFromTeamMutation = ({ data }: Props) => {
  const { teamId, page, userId, courseId } = data;
  const dataForMutation = { userId, teamId };
  const [removeUserFromTeam, { loading }] = useMutation(
    REMOVE_USER_FROM_TEAM_MUTATION,
    {
      variables: {
        data: dataForMutation,
      },

      update(cache, { data: { removeUserFromTeam } }) {
        const data: TeamList | null = cache.readQuery({
          query: TEAMS_QUERY,
          variables: {
            courseId: courseId,
            pagination: { skip: page * TEAMS_PER_PAGE, take: TEAMS_PER_PAGE },
          },
        });

        const updatedUser = {
          ...removeUserFromTeam,
          teams: removeUserFromTeam.teams.filter(
            (team: Team) => team.id !== teamId
          ),
          teamIds: removeUserFromTeam.teamsIds.filter(
            (teamIdOfArray: string) => teamIdOfArray !== teamId
          ),
        };

        const updatedRemovedResults = data?.results.map((team: Team) => {
          if (team.id === teamId) {
            return {
              ...team,
              members: team.members.filter(
                (member: User) => member.id !== userId
              ),
              memberIds: team.memberIds.filter(
                (memberId: string) => memberId !== userId
              ),
            };
          }
          return team;
        });

        cache.writeQuery({
          query: WHOAMI_QUERY,
          data: {
            updatedUser,
          },
        });

        cache.writeQuery({
          query: TEAMS_QUERY,
          data: {
            count: data?.count,
            results: updatedRemovedResults,
          },
          variables: {
            courseId: courseId,
            pagination: { skip: page * TEAMS_PER_PAGE, take: TEAMS_PER_PAGE },
          },
        });
      },
    }
  );
  return {
    removeUserFromTeam,
    loadingM: loading,
  };
};
