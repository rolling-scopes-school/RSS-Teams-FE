import {
  DEFAULT_LANGUAGE,
  SET_COMMON_ERROR,
  SET_CURR_COURSE,
  SET_CURR_LANG,
  SET_TOKEN,
  SET_BURGER_MENU_OPEN,
  SET_EDIT_PROFILE_DATA_CHANGE,
  SET_PATH_TO_THE_PAGE,
  SET_IS_TOUR_OPEN,
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
  isEditProfileDataChange: false,
  pathToThePage: '',
  isTourOpen: false,
};

export const {
  setToken,
  setCurrCourse,
  setCurrLang,
  setCommonError,
  setBurgerMenuOpen,
  setEditProfileDataChange,
  setPathToThePage,
  setIsTourOpen,
} = createActions({
  SET_TOKEN: (loginToken) => ({ loginToken }),
  SET_CURR_COURSE: (currCourse) => ({ currCourse }),
  SET_CURR_LANG: (currLanguage) => ({ currLanguage }),
  SET_COMMON_ERROR: (isCommonError) => ({ isCommonError }),
  SET_BURGER_MENU_OPEN: (isBurgerMenuOpen) => ({ isBurgerMenuOpen }),
  SET_EDIT_PROFILE_DATA_CHANGE: (isEditProfileDataChange) => ({
    isEditProfileDataChange,
  }),
  SET_PATH_TO_THE_PAGE: (pathToThePage) => ({
    pathToThePage,
  }),
  SET_IS_TOUR_OPEN: (isTourOpen) => ({
    isTourOpen,
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
    [SET_EDIT_PROFILE_DATA_CHANGE]: (
      state,
      { payload: { isEditProfileDataChange } }
    ) => ({
      ...state,
      isEditProfileDataChange,
    }),
    [SET_PATH_TO_THE_PAGE]: (state, { payload: { pathToThePage } }) => ({
      ...state,
      pathToThePage,
    }),
    [SET_IS_TOUR_OPEN]: (state, { payload: { isTourOpen } }) => ({
      ...state,
      isTourOpen,
    }),
  },
  loginPageState
);
