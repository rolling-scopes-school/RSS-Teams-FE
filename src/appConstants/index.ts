export { BACKEND_LINK, AUTH_BACKEND_LINK } from './api';

export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_TEAMS = 'SET_TEAMS';
export const AUTH_TOKEN = 'AUTH_TOKEN';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_CURR_COURSE = 'SET_CURR_COURSE';

export const USERS_PER_PAGE = 40;
export const TEAMS_PER_PAGE = 10;
export const CURRENT_YEAR = new Date(Date.now()).getFullYear();

export const TABLE_HEADERS = [
  '#',
  'First / Last Name',
  'Score',
  'Team Number',
  'Telegram',
  'Discord',
  'Github',
  'Location',
  'Courses',
];

export const TABLE_TEAMS_HEADERS = [
  '#',
  'First / Last Name',
  'Score',
  'Telegram',
  'Discord',
  'Github',
  'Location',
  'Action',
];
