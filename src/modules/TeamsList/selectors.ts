import { State } from 'types';

export const selectIsActiveModalExpel = (state: State) => state.teamsListReducer.isActiveModalExpel;

export const selectIsActiveModalLeave = (state: State) => state.teamsListReducer.isActiveModalLeave;

export const selectIsActiveModalJoin = (state: State) => state.teamsListReducer.isActiveModalJoin;

export const selectIsActiveModalCreateTeam = (state: State) =>
  state.teamsListReducer.isActiveModalCreateTeam;

export const selectIsActiveModalCreated = (state: State) =>
  state.teamsListReducer.isActiveModalCreated;

export const selectIsActiveModalRemoveCourse = (state: State) =>
  state.teamsListReducer.isActiveModalRemoveCourse;

export const selectIsActiveModalUpdateSocialLink = (state: State) =>
  state.teamsListReducer.isActiveModalUpdateSocialLink;

export const selectIsActiveModalSortStudents = (state: State) =>
  state.teamsListReducer.isActiveModalSortStudents;

export const selectIsActiveModalLeavePage = (state: State) =>
  state.teamsListReducer.isActiveModalLeavePage;

export const selectTeamMemberExpelId = (state: State) => state.teamsListReducer.teamMemberExpelId;

export const selectTeamPassword = (state: State) => state.teamsListReducer.teamPassword;

export const selectSocialLink = (state: State) => state.teamsListReducer.socialLink;
