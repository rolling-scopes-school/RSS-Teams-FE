import { State } from 'types';

export const selectToken = (state: State) => state.loginPageReducer.loginToken;
