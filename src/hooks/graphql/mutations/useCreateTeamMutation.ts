import { useMutation } from '@apollo/client';
import { CreateTeamInput, TeamList, User } from 'types';
import { TEAMS_QUERY, WHOAMI_QUERY } from 'graphql/queries';
import { CREATE_TEAM_MUTATION } from 'graphql/mutations';
import { TEAMS_PER_PAGE } from 'appConstants';

type Props = {
  team: CreateTeamInput;
};

export const useCreateTeamMutation = ({ team }: Props) => {
  const { courseId, ownerId, socialLink, page } = team;
  const dataForMutation = { courseId, ownerId, socialLink };
  const [createTeam, { loading }] = useMutation(CREATE_TEAM_MUTATION, {
    variables: {
      team: dataForMutation,
    },

    update(cache, { data: { createTeam } }) {
      const data: { teams: TeamList } | null = cache.readQuery({
        query: TEAMS_QUERY,
        variables: {
          courseId: courseId,
          pagination: { skip: page! * TEAMS_PER_PAGE, take: TEAMS_PER_PAGE },
        },
      });
      const userData: { whoAmI: User } | null = cache.readQuery({
        query: WHOAMI_QUERY,
      });
      const updatedResults = data!.teams
        ? [...data!.teams?.results, createTeam]
        : [createTeam];

      cache.writeQuery({
        query: WHOAMI_QUERY,
        data: {
          whoAmI: {
            ...userData?.whoAmI,
            teams: [...userData!.whoAmI.teams, createTeam],
            teamIds: [...userData!.whoAmI.teamIds, createTeam.id],
          },
        },
      });

      cache.writeQuery({
        query: TEAMS_QUERY,
        data: {
          teams: {
            count: data?.teams?.count,
            results: updatedResults,
          },
        },
        variables: {
          courseId: courseId,
          pagination: { skip: page! * TEAMS_PER_PAGE, take: TEAMS_PER_PAGE },
        },
      });
    },
  });
  return {
    createTeam,
    loadingM: loading,
  };
};
