import { useMutation } from '@apollo/client';
import {
  CURRENT_COURSE,
  SET_COMMON_ERROR,
  SET_CURR_COURSE,
  SET_USER_DATA,
  TEAMS_PER_PAGE,
} from 'appConstants';
import { REMOVE_USER_FROM_COURSE_MUTATION } from 'graphql/mutations';
import { TEAMS_QUERY, WHOAMI_QUERY } from 'graphql/queries';
import { useDispatch } from 'react-redux';
import { RemoveUserFromCourseInput, Team, TeamList, User } from 'types';

type Props = {
  data: RemoveUserFromCourseInput;
};

export const useRemoveUserFromCourseMutation = ({
  data: { page, courseId, userId, teamId },
}: Props) => {
  const dataForMutation = { courseId, userId, teamId };
  const dispatch = useDispatch();
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
                return null;
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
          .filter((team: Team | null) => !!team);

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

      onCompleted({ removeUserFromCourse }) {
        if (!!removeUserFromCourse.courses.length) {
          dispatch({
            type: SET_CURR_COURSE,
            payload: removeUserFromCourse.courses[0],
          });
          localStorage.setItem(
            CURRENT_COURSE,
            JSON.stringify(removeUserFromCourse.courses[0])
          );
        } else {
          dispatch({
            type: SET_CURR_COURSE,
            payload: { name: '', id: '' },
          });
          localStorage.removeItem(CURRENT_COURSE);
        }
        dispatch({
          type: SET_USER_DATA,
          payload: removeUserFromCourse,
        });
      },
      onError() {
        dispatch({
          type: SET_COMMON_ERROR,
          payload: true,
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
