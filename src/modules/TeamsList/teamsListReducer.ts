import {
  SET_SOCIAL_LINK,
  SET_TEAM_PASSWORD,
  SET_TEAM_MEMBER_EXPEL_ID,
  ACTIVE_MODAL_EXPEL,
  ACTIVE_MODAL_LEAVE,
  ACTIVE_MODAL_JOIN,
  ACTIVE_MODAL_CREATE_TEAM,
  ACTIVE_MODAL_CREATED,
  ACTIVE_MODAL_UPDATE_SOCIAL_LINK,
  ACTIVE_MODAL_REMOVE_COURSE,
  ACTIVE_MODAL_SORT_STUDENTS,
} from 'appConstants';
import { StateTeamsList } from 'types';
import { createActions, handleActions } from 'redux-actions';

export const teamsListState = {
  socialLink: '',
  teamPassword: '',
  teamMemberExpelId: '',
  isActiveModalExpel: false,
  isActiveModalLeave: false,
  isActiveModalJoin: false,
  isActiveModalCreateTeam: false,
  isActiveModalCreated: false,
  isActiveModalUpdateSocialLink: false,
  isActiveModalRemoveCourse: false,
  isActiveModalSortStudents: false,
};

export const {
  setSocialLink,
  setTeamPassword,
  setTeamMemberExpelId,
  activeModalExpel,
  activeModalLeave,
  activeModalJoin,
  activeModalCreateTeam,
  activeModalCreated,
  activeModalUpdateSocialLink,
  activeModalRemoveCourse,
  activeModalSortStudents,
} = createActions({
  SET_SOCIAL_LINK: (socialLink) => ({ socialLink }),
  SET_TEAM_PASSWORD: (teamPassword) => ({ teamPassword }),
  SET_TEAM_MEMBER_EXPEL_ID: (teamMemberExpelId) => ({ teamMemberExpelId }),
  ACTIVE_MODAL_EXPEL: (isActiveModalExpel) => ({ isActiveModalExpel }),
  ACTIVE_MODAL_LEAVE: (isActiveModalLeave) => ({ isActiveModalLeave }),
  ACTIVE_MODAL_JOIN: (isActiveModalJoin) => ({
    isActiveModalJoin,
  }),
  ACTIVE_MODAL_CREATE_TEAM: (isActiveModalCreateTeam) => ({
    isActiveModalCreateTeam,
  }),
  ACTIVE_MODAL_CREATED: (isActiveModalCreated) => ({ isActiveModalCreated }),
  ACTIVE_MODAL_UPDATE_SOCIAL_LINK: (isActiveModalUpdateSocialLink) => ({
    isActiveModalUpdateSocialLink,
  }),
  ACTIVE_MODAL_REMOVE_COURSE: (isActiveModalRemoveCourse) => ({
    isActiveModalRemoveCourse,
  }),
  ACTIVE_MODAL_SORT_STUDENTS: (isActiveModalSortStudents) => ({
    isActiveModalSortStudents,
  }),
});

export const teamsListReducer = handleActions<StateTeamsList, any>(
  {
    [SET_SOCIAL_LINK]: (state, { payload: { socialLink } }) => ({
      ...state,
      socialLink,
    }),
    [SET_TEAM_PASSWORD]: (state, { payload: { teamPassword } }) => ({
      ...state,
      teamPassword,
    }),
    [SET_TEAM_MEMBER_EXPEL_ID]: (
      state,
      { payload: { teamMemberExpelId } }
    ) => ({
      ...state,
      teamMemberExpelId,
    }),
    [ACTIVE_MODAL_EXPEL]: (state, { payload: { isActiveModalExpel } }) => ({
      ...state,
      isActiveModalExpel,
    }),
    [ACTIVE_MODAL_LEAVE]: (state, { payload: { isActiveModalLeave } }) => ({
      ...state,
      isActiveModalLeave,
    }),
    [ACTIVE_MODAL_JOIN]: (state, { payload: { isActiveModalJoin } }) => ({
      ...state,
      isActiveModalJoin,
    }),
    [ACTIVE_MODAL_CREATE_TEAM]: (
      state,
      { payload: { isActiveModalCreateTeam } }
    ) => ({
      ...state,
      isActiveModalCreateTeam,
    }),
    [ACTIVE_MODAL_CREATED]: (state, { payload: { isActiveModalCreated } }) => ({
      ...state,
      isActiveModalCreated,
    }),
    [ACTIVE_MODAL_UPDATE_SOCIAL_LINK]: (
      state,
      { payload: { isActiveModalUpdateSocialLink } }
    ) => ({
      ...state,
      isActiveModalUpdateSocialLink,
    }),
    [ACTIVE_MODAL_REMOVE_COURSE]: (
      state,
      { payload: { isActiveModalRemoveCourse } }
    ) => ({
      ...state,
      isActiveModalRemoveCourse,
    }),
    [ACTIVE_MODAL_SORT_STUDENTS]: (
      state,
      { payload: { isActiveModalSortStudents } }
    ) => ({
      ...state,
      isActiveModalSortStudents,
    }),
  },
  teamsListState
);
