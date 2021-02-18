import { useMutation } from '@apollo/client';
import { TEAMS_PER_PAGE } from 'appConstants';
import { ADD_USER_TO_TEAM_MUTATION } from 'graphql/mutations';
import { TEAMS_QUERY, WHOAMI_QUERY } from 'graphql/queries';
import { AddUserToTeamInput, Team, TeamList } from 'types';

type Props = {
  data: AddUserToTeamInput;
};

export const useAddUserToTeamMutation = ({ data }: Props) => {
  const { teamPassword, courseId, page, userId } = data;
  const dataForMutation = { userId, courseId, teamPassword };
  const [addUserToTeam, { loading }] = useMutation(ADD_USER_TO_TEAM_MUTATION, {
    variables: {
      data: dataForMutation,
    },

    update(cache, { data: { addUserToTeam } }) {
      const data: TeamList | null = cache.readQuery({
        query: TEAMS_QUERY,
        variables: {
          courseId: courseId,
          pagination: { skip: page * TEAMS_PER_PAGE, take: TEAMS_PER_PAGE },
        },
      });

      const userTeam = data?.results.find(
        (team: Team) => team.password === teamPassword
      );
      const updatedUser = {
        ...addUserToTeam,
        teams: [...addUserToTeam.teams, userTeam],
        teamIds: [...addUserToTeam.teamIds, userTeam?.id],
      };

      // const updatedResults = data?.results.map((team: Team) => {
      //   if (team.password === teamPassword) {
      //     return {
      //       ...team,
      //       members: [...team.members, addUserToTeam],
      //       memberIds: [...team.memberIds, addUserToTeam.id],
      //     };
      //   }
      //   return team;
      // });

      cache.writeQuery({
        query: WHOAMI_QUERY,
        data: {
          updatedUser,
        },
      });

      // cache.writeQuery({
      //   query: TEAMS_QUERY,
      //   data: {
      //     count: data?.count,
      //     results: updatedResults,
      //   },
      //   variables: {
      //     courseId: courseId,
      //     pagination: { skip: page * TEAMS_PER_PAGE, take: TEAMS_PER_PAGE },
      //   },
      // });
    },
  });
  return {
    addUserToTeam,
    loadingM: loading,
  };
};
