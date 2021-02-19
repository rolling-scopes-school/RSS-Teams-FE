import { State } from 'types';

export const selectUserData = (state: State) =>
  state.studentsTableReducer.userData;
