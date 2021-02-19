import { Reducer } from 'redux';
import {
  SET_TEAMS,
  ACTIVE_MODAL_EXPEL,
  ACTIVE_MODAL_LEAVE,
  ACTIVE_MODAL_JOIN,
  ACTIVE_MODAL_CREATE_TEAM,
  ACTIVE_MODAL_CREATED,
  SET_TEAM_MEMBER_EXPEL_ID,
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
  teamMemberExpelId: '',
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
    case SET_TEAM_MEMBER_EXPEL_ID:
      return {
        ...state,
        teamMemberExpelId: action.payload,
      };

    default:
      return state;
  }
};
