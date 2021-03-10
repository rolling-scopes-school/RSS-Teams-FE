import {
  SET_TOKEN,
  SET_CURR_COURSE,
  SET_CURR_LANG,
  DEFAULT_LANGUAGE,
} from 'appConstants';
import { Reducer } from 'redux';
import { StateLoginPage } from 'types';

type Action = { type: string; payload: any };

export const loginPageState = {
  loginToken: null,
  currCourse: {
    id: '',
    name: '',
  },
  currLanguage: DEFAULT_LANGUAGE,
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
    case SET_CURR_COURSE:
      return {
        ...state,
        currCourse: action.payload,
      };
    case SET_CURR_LANG:
      return {
        ...state,
        currLanguage: action.payload,
      };
    default:
      return state;
  }
};
