import { State } from 'types';

export const selectIsActiveModalExpel = (state: State) => {
  state.teamsListReducer.isActiveModalExpel;
};

export const selectIsActiveModalLeave = (state: State) => {
  state.teamsListReducer.isActiveModalLeave;
};

export const selectIsActiveModalJoin = (state: State) => {
  state.teamsListReducer.isActiveModalJoin;
};

export const selectIsActiveModalCreateTeam = (state: State) => {
  state.teamsListReducer.isActiveModalCreateTeam;
};

export const selectIsActiveModalCreated = (state: State) => {
  state.teamsListReducer.isActiveModalCreated;
};
