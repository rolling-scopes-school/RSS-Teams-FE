import { Reducer } from 'redux';
import {
  SET_TEAMS,
  ACTIVE_MODAL_EXPEL,
  ACTIVE_MODAL_LEAVE,
  ACTIVE_MODAL_JOIN,
  ACTIVE_MODAL_CREATE_TEAM,
  ACTIVE_MODAL_CREATED,
  SET_TEAM_MEMBER_EXPEL_ID,
  SET_TEAM_PASSWORD,
  SET_SOCIAL_LINK,
  ACTIVE_MODAL_UPDATE_SOCIAL_LINK,
  ACTIVE_MODAL_REMOVE_COURSE,
  ACTIVE_MODAL_SORT_STUDENTS,
} from 'appConstants';
import { StateTeamsList } from 'types';

type Action = { type: string; payload: any };

export const teamsListState = {
  teams: [],
  isActiveModalExpel: false,
  isActiveModalLeave: false,
  isActiveModalJoin: false,
  isActiveModalCreateTeam: false,
  isActiveModalCreated: false,
  isActiveModalUpdateSocialLink: false,
  isActiveModalRemoveCourse: false,
  isActiveModalSortStudents: false,
  teamMemberExpelId: '',
  teamPassword: '',
  socialLink: '',
};

export const teamsListReducer: Reducer<StateTeamsList, Action> = (
  state = teamsListState,
  action
) => {
  switch (action.type) {
    case SET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case ACTIVE_MODAL_EXPEL:
      return {
        ...state,
        isActiveModalExpel: action.payload,
      };
    case ACTIVE_MODAL_LEAVE:
      return {
        ...state,
        isActiveModalLeave: action.payload,
      };
    case ACTIVE_MODAL_JOIN:
      return {
        ...state,
        isActiveModalJoin: action.payload,
      };
    case ACTIVE_MODAL_CREATE_TEAM:
      return {
        ...state,
        isActiveModalCreateTeam: action.payload,
      };
    case ACTIVE_MODAL_CREATED:
      return {
        ...state,
        isActiveModalCreated: action.payload,
      };
    case ACTIVE_MODAL_UPDATE_SOCIAL_LINK:
      return {
        ...state,
        isActiveModalUpdateSocialLink: action.payload,
      };
    case SET_TEAM_MEMBER_EXPEL_ID:
      return {
        ...state,
        teamMemberExpelId: action.payload,
      };
    case SET_TEAM_PASSWORD:
      return {
        ...state,
        teamPassword: action.payload,
      };
    case SET_SOCIAL_LINK:
      return {
        ...state,
        socialLink: action.payload,
      };
    case ACTIVE_MODAL_REMOVE_COURSE:
      return {
        ...state,
        isActiveModalRemoveCourse: action.payload,
      };
    case ACTIVE_MODAL_SORT_STUDENTS:
      return {
        ...state,
        isActiveModalSortStudents: action.payload,
      };
    default:
      return state;
  }
};
