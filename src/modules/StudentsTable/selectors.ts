import { State } from 'types';

export const selectUserData = (state: State) =>
  state.studentsTableReducer.userData;

export const selectFilterData = (state: State) =>
  state.studentsTableReducer.filterData;
