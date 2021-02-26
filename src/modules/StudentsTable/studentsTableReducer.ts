import { Reducer } from 'redux';
import { SET_USER_DATA, SET_FILTER_DATA } from 'appConstants';
import { StateStudentsTable } from 'types';
import { defaultFilterData } from 'components/FilterForm/filterFormFields';

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
  filterData: defaultFilterData,
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
    case SET_FILTER_DATA:
      return {
        ...state,
        filterData: action.payload,
      };
    default:
      return state;
  }
};
