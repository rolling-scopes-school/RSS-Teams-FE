import { State } from 'types';

export const selectToken = (state: State) => state.loginPageReducer.loginToken;

export const selectCurrCourse = (state: State) =>
  state.loginPageReducer.currCourse;

export const selectCurrLanguage = (state: State) =>
  state.loginPageReducer.currLanguage;

export const selectIsCommonError = (state: State) =>
  state.loginPageReducer.isCommonError;

export const selectIsBurgerMenuOpen = (state: State) =>
  state.loginPageReducer.isBurgerMenuOpen;

export const selectIsCourseSelectOpen = (state: State) =>
  state.loginPageReducer.isCourseSelectOpen;

export const selectIsHeaderLangSelectOpen = (state: State) =>
  state.loginPageReducer.isHeaderLangSelectOpen;

export const selectIsBurgerMenuSelectOpen = (state: State) =>
  state.loginPageReducer.isBurgerMenuSelectOpen;
