export { BACKEND_LINK, AUTH_BACKEND_LINK } from './api';

export const SET_USER_DATA = 'SET_USER_DATA';
export const SET_TEAMS = 'SET_TEAMS';
export const AUTH_TOKEN = 'AUTH_TOKEN';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_CURR_COURSE = 'SET_CURR_COURSE';
export const ACTIVE_MODAL_EXPEL = 'ACTIVE_MODAL_EXPEL';
export const ACTIVE_MODAL_LEAVE = 'ACTIVE_MODAL_LEAVE';
export const ACTIVE_MODAL_JOIN = 'ACTIVE_MODAL_JOIN';
export const ACTIVE_MODAL_CREATE_TEAM = 'ACTIVE_MODAL_CREATE_TEAM';
export const ACTIVE_MODAL_CREATED = 'ACTIVE_MODAL_CREATED';
export const ACTIVE_MODAL_UPDATE_SOCIAL_LINK =
  'ACTIVE_MODAL_UPDATE_SOCIAL_LINK';
export const SET_TEAM_MEMBER_EXPEL_ID = 'SET_TEAM_MEMBER_EXPEL_ID';
export const SET_TEAM_PASSWORD = 'SET_TEAM_PASSWORD';
export const SET_SOCIAL_LINK = 'SET_SOCIAL_LINK';

export const USERS_PER_PAGE = 20;
export const TEAMS_PER_PAGE = 10;
export const CURRENT_YEAR = new Date(Date.now()).getFullYear();

export const CURRENT_COURSE = 'currentCourse';

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

export const INPUT_VALUES_EDIT_PROFILE: string[] = [
  'firstName',
  'lastName',
  'discord',
  'telegram',
  'city',
  'country',
  'score',
];

export const MODAL_INPUT_VALIDATION = {
  pattern: {
    value: /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/,
    message: 'Use right format link - https://xxx/xxxx',
  },
  maxLength: {
    value: 55,
    message: 'This input exceed maxLength.',
  },
};
