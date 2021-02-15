import { State } from 'types';

export const selectToken = (state: State) => state.loginPageReducer.loginToken;
export const selectCurrCourse = (state: State) =>
  state.loginPageReducer.currCourse;
