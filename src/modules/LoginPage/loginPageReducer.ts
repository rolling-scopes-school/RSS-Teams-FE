import {
  DEFAULT_LANGUAGE,
  SET_COMMON_ERROR,
  SET_CURR_COURSE,
  SET_CURR_LANG,
  SET_TOKEN,
  SET_BURGER_MENU_OPEN,
  SET_COURSE_SELECT_OPEN,
  SET_HEADER_LANG_SELECT_OPEN,
  SET_BURGER_MENU_SELECT_OPEN,
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
  isBurgerMenuOpen: false,
  isCourseSelectOpen: false,
  isHeaderLangSelectOpen: false,
  isBurgerMenuSelectOpen: false,
};

export const {
  setToken,
  setCurrCourse,
  setCurrLang,
  setCommonError,
  setBurgerMenuOpen,
  setCourseSelectOpen,
  setHeaderLangSelectOpen,
  setBurgerMenuSelectOpen,
} = createActions({
  SET_TOKEN: (loginToken) => ({ loginToken }),
  SET_CURR_COURSE: (currCourse) => ({ currCourse }),
  SET_CURR_LANG: (currLanguage) => ({ currLanguage }),
  SET_COMMON_ERROR: (isCommonError) => ({ isCommonError }),
  SET_BURGER_MENU_OPEN: (isBurgerMenuOpen) => ({ isBurgerMenuOpen }),
  SET_COURSE_SELECT_OPEN: (isCourseSelectOpen) => ({ isCourseSelectOpen }),
  SET_HEADER_LANG_SELECT_OPEN: (isHeaderLangSelectOpen) => ({
    isHeaderLangSelectOpen,
  }),
  SET_BURGER_MENU_SELECT_OPEN: (isBurgerMenuSelectOpen) => ({
    isBurgerMenuSelectOpen,
  }),
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
    [SET_BURGER_MENU_OPEN]: (state, { payload: { isBurgerMenuOpen } }) => ({
      ...state,
      isBurgerMenuOpen,
    }),
    [SET_COURSE_SELECT_OPEN]: (state, { payload: { isCourseSelectOpen } }) => ({
      ...state,
      isCourseSelectOpen,
    }),
    [SET_HEADER_LANG_SELECT_OPEN]: (
      state,
      { payload: { isHeaderLangSelectOpen } }
    ) => ({
      ...state,
      isHeaderLangSelectOpen,
    }),
    [SET_BURGER_MENU_SELECT_OPEN]: (
      state,
      { payload: { isBurgerMenuSelectOpen } }
    ) => ({
      ...state,
      isBurgerMenuSelectOpen,
    }),
  },
  loginPageState
);
