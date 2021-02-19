import { useMutation } from '@apollo/client';
import { CreateTeamInput, TeamList } from 'types';
import { TEAMS_QUERY } from 'graphql/queries';
import { CREATE_TEAM_MUTATION } from 'graphql/mutations';

type Props = {
  team: CreateTeamInput;
};

export const useCreateTeamMutation = ({ team }: Props) => {
  const { courseId } = team;
  const [createTeam, { loading }] = useMutation(CREATE_TEAM_MUTATION, {
    variables: {
      team: team,
    },

    update(cache, { data: { createTeam } }) {
      const data: TeamList | null = cache.readQuery({
        query: TEAMS_QUERY,
        variables: {
          courseId: courseId,
        },
      });

      cache.writeQuery({
        query: TEAMS_QUERY,
        data: {
          count: data?.count,
          results: [...data!.results, createTeam],
        },
      });
    },
  });
  return {
    createTeam,
    loadingM: loading,
  };
};
