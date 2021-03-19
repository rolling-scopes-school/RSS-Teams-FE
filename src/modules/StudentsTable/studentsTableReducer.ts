import { Reducer } from 'redux';
import { SET_USER_DATA, SET_FILTER_DATA } from 'appConstants';
import { StateStudentsTable } from 'types';
import { defaultFilterData } from 'components/FilterForm/filterFormFields';
import { createActions, handleActions } from 'redux-actions';

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

export const { setUserData, setFilterData } = createActions({
  SET_USER_DATA: (userData) => ({ userData }),
  SET_FILTER_DATA: (filterData) => ({ filterData }),
});

export const studentsTableReducer = handleActions<StateStudentsTable, any>(
  {
    [SET_USER_DATA]: (state, { payload: { userData } }) => ({
      ...state,
      userData,
    }),
    [SET_FILTER_DATA]: (state, { payload: { filterData } }) => ({
      ...state,
      filterData,
    }),
  },
  studentsTableState
);
