import { useSelector } from 'react-redux';
import {
  selectSocialLink,
  selectTeamMemberExpelId,
  selectTeamPassword,
} from '../../selectors';
import { Team } from 'types';
import {
  useAddUserToTeamMutation,
  useRemoveUserFromTeamMutation,
  useExpelUserFromTeamMutation,
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useRemoveUserFromCourseMutation,
  useSortStudentsMutation,
} from 'hooks/graphql';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { selectUserData } from 'modules/StudentsTable/selectors';

export const useCommonMutations = (page: number) => {
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);
  const teamMemberId = useSelector(selectTeamMemberExpelId);
  const teamPassword = useSelector(selectTeamPassword);
  const socialLink = useSelector(selectSocialLink);

  const {
    addUserToTeam,
    errorM: errorAdd,
    loadingM: loadingAdd,
  } = useAddUserToTeamMutation({
    data: {
      userId: userData.id,
      courseId: currCourse.id,
      teamPassword,
    },
  });

  const {
    removeUserFromTeam,
    errorM: errorRemoveTeam,
    loadingM: loadingRemoveTeam,
  } = useRemoveUserFromTeamMutation({
    data: {
      teamId:
        userData.teams.find((team: Team) => team.courseId === currCourse.id)
          ?.id ?? '',
      userId: userData.id,
      courseId: currCourse.id,
      page,
    },
  });

  const {
    expelUserFromTeam,
    errorM: errorExpel,
    loadingM: loadingExpel,
  } = useExpelUserFromTeamMutation({
    data: {
      teamId:
        userData.teams.find((team: Team) => team.courseId === currCourse.id)
          ?.id ?? '',
      userId: teamMemberId,
      courseId: currCourse.id,
      page,
    },
  });

  const {
    createTeam,
    errorM: errorCreateTeam,
    loadingM: loadingCreateTeam,
  } = useCreateTeamMutation({
    team: {
      socialLink,
      courseId: currCourse.id,
      ownerId: userData.id,
      page,
    },
  });

  const {
    updateTeam,
    errorM: errorUpdateTeam,
    loadingM: loadingUpdateTeam,
  } = useUpdateTeamMutation({
    team: {
      socialLink,
      id:
        userData.teams.find((team: Team) => team.courseId === currCourse.id)
          ?.id ?? '',
    },
  });

  const {
    removeUserFromCourse,
    errorM: errorRemoveCourse,
    loadingM: loadingRemoveCourse,
  } = useRemoveUserFromCourseMutation({
    data: {
      courseId: currCourse.id,
      userId: userData.id,
      teamId:
        userData.teams.find((team: Team) => team.courseId === currCourse.id)
          ?.id ?? null,
      page,
    },
  });

  const {
    sortStudents,
    errorM: errorSortStudents,
    loadingM: loadingSortStudents,
  } = useSortStudentsMutation({
    courseId: currCourse.id,
    page,
  });

  const isError = [
    errorAdd,
    errorCreateTeam,
    errorExpel,
    errorRemoveCourse,
    errorRemoveTeam,
    errorUpdateTeam,
    errorSortStudents,
  ].some((item) => !!item);

  const isLoading = [
    loadingAdd,
    loadingCreateTeam,
    loadingExpel,
    loadingRemoveCourse,
    loadingRemoveTeam,
    loadingUpdateTeam,
    loadingSortStudents,
  ].some((item) => !!item);

  return {
    addUserToTeam,
    removeUserFromTeam,
    expelUserFromTeam,
    createTeam,
    updateTeam,
    removeUserFromCourse,
    sortStudents,
    isError,
    isLoading,
  };
};
