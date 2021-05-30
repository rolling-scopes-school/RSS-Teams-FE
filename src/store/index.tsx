import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { studentsTableReducer } from 'modules/StudentsTable/studentsTableReducer';
import { teamsListReducer } from 'modules/TeamsList/teamsListReducer';
import { loginPageReducer } from 'modules/LoginPage/loginPageReducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import { State } from 'types';

const appReducer = combineReducers<State>({
  studentsTableReducer,
  teamsListReducer,
  loginPageReducer,
});

const store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export const AppState: FC = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
