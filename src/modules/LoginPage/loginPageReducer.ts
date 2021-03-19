import {
  DEFAULT_LANGUAGE,
  SET_COMMON_ERROR,
  SET_CURR_COURSE,
  SET_CURR_LANG,
  SET_TOKEN,
} from 'appConstants';
import { createActions, handleActions } from 'redux-actions';
import { StateLoginPage } from 'types';

export const loginPageState = {
  loginToken: null,
  currCourse: {
    id: '',
    name: '',
  },
  currLanguage: DEFAULT_LANGUAGE,
  isCommonError: false,
};

export const {
  setToken,
  setCurrCourse,
  setCurrLang,
  setCommonError,
} = createActions({
  SET_TOKEN: (loginToken) => ({ loginToken }),
  SET_CURR_COURSE: (currCourse) => ({ currCourse }),
  SET_CURR_LANG: (currLanguage) => ({ currLanguage }),
  SET_COMMON_ERROR: (isCommonError) => ({ isCommonError }),
});

export const loginPageReducer = handleActions<StateLoginPage, any>(
  {
    [SET_TOKEN]: (state, { payload: { loginToken } }) => ({
      ...state,
      loginToken,
    }),
    [SET_CURR_COURSE]: (state, { payload: { currCourse } }) => ({
      ...state,
      currCourse,
    }),
    [SET_CURR_LANG]: (state, { payload: { currLanguage } }) => ({
      ...state,
      currLanguage,
    }),
    [SET_COMMON_ERROR]: (state, { payload: { isCommonError } }) => ({
      ...state,
      isCommonError,
    }),
  },
  loginPageState
);
