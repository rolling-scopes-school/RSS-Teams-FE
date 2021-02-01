import { SET_TOKEN } from 'appConstants';
import { Reducer } from 'redux';
import { StateLoginPage } from 'types';

type Action = { type: string; payload: any };

export const loginPageState = {
  loginToken: '',
};

export const loginPageReducer: Reducer<StateLoginPage, Action> = (
  state = loginPageState,
  action
) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        loginToken: action.payload,
      };
    default:
      return state;
  }
};
