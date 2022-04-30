export { BACKEND_LINK, AUTH_BACKEND_LINK } from './api';

export const SET_USER_DATA = 'SET_USER_DATA';
export const AUTH_TOKEN = 'AUTH_TOKEN';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_CURR_COURSE = 'SET_CURR_COURSE';
export const SET_COMMON_ERROR = 'SET_COMMON_ERROR';
export const SET_BURGER_MENU_OPEN = 'SET_BURGER_MENU_OPEN';
export const ACTIVE_MODAL_EXPEL = 'ACTIVE_MODAL_EXPEL';
export const ACTIVE_MODAL_LEAVE = 'ACTIVE_MODAL_LEAVE';
export const ACTIVE_MODAL_JOIN = 'ACTIVE_MODAL_JOIN';
export const ACTIVE_MODAL_CREATE_TEAM = 'ACTIVE_MODAL_CREATE_TEAM';
export const ACTIVE_MODAL_CREATED = 'ACTIVE_MODAL_CREATED';
export const ACTIVE_MODAL_UPDATE_SOCIAL_LINK = 'ACTIVE_MODAL_UPDATE_SOCIAL_LINK';
export const ACTIVE_MODAL_REMOVE_COURSE = 'ACTIVE_MODAL_REMOVE_COURSE';
export const ACTIVE_MODAL_SORT_STUDENTS = 'ACTIVE_MODAL_SORT_STUDENTS';
export const ACTIVE_MODAL_LEAVE_PAGE = 'ACTIVE_MODAL_LEAVE_PAGE';
export const ACTIVE_MODAL_CREATED_COURSE = 'ACTIVE_MODAL_CREATED_COURSE';
export const ACTIVE_MODAL_EDIT_COURSE = 'ACTIVE_MODAL_EDIT_COURSE';
export const SET_TEAM_MEMBER_EXPEL_ID = 'SET_TEAM_MEMBER_EXPEL_ID';
export const SET_TEAM_PASSWORD = 'SET_TEAM_PASSWORD';
export const SET_SOCIAL_LINK = 'SET_SOCIAL_LINK';
export const SET_FILTER_DATA = 'SET_FILTER_DATA';
export const SET_CURR_LANG = 'SET_CURR_LANG';
export const SET_EDIT_PROFILE_DATA_CHANGE = 'SET_EDIT_PROFILE_DATA_CHANGE';
export const SET_PATH_TO_THE_PAGE = 'SET_PATH_TO_THE_PAGE';
export const SET_IS_TOUR_OPEN = 'SET_IS_TOUR_OPEN';

export const USERS_PER_PAGE = 20;
export const TEAMS_PER_PAGE = 10;
export const CURRENT_YEAR = new Date(Date.now()).getFullYear();

export const CURRENT_COURSE = 'currentCourse';
export const CURRENT_LANG = 'currentLanguage';
export const TOUR_OPENING = 'tourOpening';

export const TABLE_HEADERS = [
  '№',
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
  '№',
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
    value:
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?|^((http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
    message: 'Use the format',
  },
  maxLength: {
    value: 55,
    message: 'This input exceed maxLength.',
  },
};

export const COURSE_NAME_VALIDATION = {
  pattern: {
    value: `${CURRENT_YEAR}`,
    message: 'Please, enter correct course name',
  },
  minLength: {
    value: 5,
    message: 'Minimal length is 5.',
  },
  maxLength: {
    value: 55,
    message: 'This input exceed maxLength.',
  },
  uniq: {
    message: 'Please, enter unique course name',
  },
};

export const TEAM_SIZE_VALIDATION = {
  pattern: {
    value: /^[2-9]$/i,
    message: 'Please, enter correct team size',
  },
  minLength: {
    value: 1,
    message: 'Minimal length is 1.',
  },
  maxLength: {
    value: 1,
    message: 'This input exceed maxLength.',
  },
};

export const APP_NAVIGATION_LINKS = {
  ['/students-table']: {
    name: 'Dashboard',
    isAlwaysVisible: false,
  },
  ['/']: {
    name: 'Teams',
    isAlwaysVisible: false,
  },
  ['/edit-profile']: {
    name: 'Edit Profile',
    isAlwaysVisible: true,
  },
  ['/tutorial']: {
    name: 'Tutorial',
    isAlwaysVisible: true,
  },
  ['/admin']: {
    name: 'Admin',
    isAlwaysVisible: true,
  },
};

export const DEFAULT_LANGUAGE = 'en';
export const LANGUAGES: string[] = [DEFAULT_LANGUAGE, 'ru'];

export const Language: { [key: string]: string } = {
  en: 'EN',
  ru: 'RU',
};

export const FOOTER_INFO = [
  {
    title: 'Development',
    members: ['besovadevka', 'MadaShindeInai', 'self067', 'manuminsk', 'Malagor', 'dariavv'],
  },
  {
    title: 'Design',
    members: ['Nastya Kapylova'],
  },
];

export const LINK_TO_DESIGN_BLOCK = 'https://www.linkedin.com/in/nastya-kapylova-54126215a';

export const LINK_TO_REPO = 'https://github.com/rolling-scopes-school/RSS-Teams-FE';

export const addCourseInputsInfo = [
  { label: 'Course name', placeholder: 'Enter course name' },
  { label: 'Team size', placeholder: 'Enter team size' },
];

export const SHOW_COURSES_OPTIONS = [
  { id: '1', name: 'All' },
  { id: '2', name: 'Active' },
  { id: '3', name: 'Terminated' },
];

export const UNAUTHORIZED_ERROR_MESSAGE = 'Unauthorized';
