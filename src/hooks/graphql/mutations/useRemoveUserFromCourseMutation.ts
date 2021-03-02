import { useMutation } from '@apollo/client';
import { TEAMS_PER_PAGE } from 'appConstants';
import { REMOVE_USER_FROM_COURSE_MUTATION } from 'graphql/mutations';
import { TEAMS_QUERY, WHOAMI_QUERY } from 'graphql/queries';
import { RemoveUserFromCourseInput, Team, TeamList, User } from 'types';

type Props = {
  data: RemoveUserFromCourseInput;
};

export const useRemoveUserFromCourseMutation = ({
  data: { page, courseId, userId, teamId },
}: Props) => {
  const dataForMutation = { courseId, userId, teamId };
  const [removeUserFromCourse, { loading, error }] = useMutation(
    REMOVE_USER_FROM_COURSE_MUTATION,
    {
      variables: {
        data: dataForMutation,
      },

      update(cache, { data: { removeUserFromCourse } }) {
        const data: { teams: TeamList } | null = cache.readQuery({
          query: TEAMS_QUERY,
          variables: {
            courseId,
            pagination: { skip: page * TEAMS_PER_PAGE, take: TEAMS_PER_PAGE },
          },
        });

        const updatedRemovedResults = data?.teams.results
          .map((team: Team) => {
            if (team.id === teamId) {
              if (team.members.length === 1) {
                return;
              }
              return {
                ...team,
                members: team.members.filter(
                  (member: User) => member.id !== userId
                ),
              };
            }
            return team;
          })
          .filter((team: Team | undefined) => !!team);

        cache.writeQuery({
          query: WHOAMI_QUERY,
          data: {
            removeUserFromCourse,
          },
        });

        cache.writeQuery({
          query: TEAMS_QUERY,
          data: {
            teams: {
              count: data?.teams?.count,
              results: updatedRemovedResults,
            },
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
    removeUserFromCourse,
    loadingM: loading,
    errorM: error,
  };
};
