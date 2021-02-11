import { Reducer } from 'redux';
import { SET_USER_DATA } from 'appConstants';
import { StateStudentsTable } from 'types';

type Action = { type: string; payload: any };

export const studentsTableState = {
  userData: {
    id: '',
    firstName: '',
    lastName: '',
    github: '',
    telegram: null,
    discord: '',
    score: 1000,
    country: '',
    city: '',
    avatar: '',
    isAdmin: false,
    courses: [],
    email: '',
    courseIds: [''],
    teamIds: [''],
    teams: [],
  },
};

export const studentsTableReducer: Reducer<StateStudentsTable, Action> = (
  state = studentsTableState,
  action
) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};
