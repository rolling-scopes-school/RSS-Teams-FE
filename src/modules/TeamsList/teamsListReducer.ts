import { Reducer } from 'redux';
import { SET_TEAMS } from 'appConstants';
import { StateTeamsList } from 'types';

type Action = { type: string; payload: any };

export const teamsListState = {
  teams: [],
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
    default:
      return state;
  }
};
