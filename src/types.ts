export type User = {
  id: string;
  firstName: string;
  lastName: string;
  github: string;
  telegram: string | null;
  discord: string;
  score: number;
  country: string;
  city: string;
  avatar: string;
  isAdmin: boolean;
  courses: Course[];
  email: string | null;
  courseIds: string[];
  teamIds: string[];
  teams: Team[];
  role?: string | null;
};

export interface Course {
  id: string;
  name: string;
  isActive: boolean;
  teamSize: number | null;
  teamIds?: string[];
  userIds?: string[];
  teams?: Team[];
  users?: User[];
}

export type Team = {
  id: string;
  number: number;
  password: string;
  courseId: string;
  socialLink: string;
  memberIds: string[];
  course: Course;
  members: User[];
};

export type TeamList = {
  count: number;
  results: Team[];
};

export type TFilterForm = {
  discord: string | null;
  github: string | null;
  location: string | null;
  courseName: string | null;
  sortingOrder: string;
  teamFilter: string;
  roleFilter: string;
};

export type UpdateUserInput = {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  telegram: string;
  discord: string;
  score?: number;
  country: string;
  city: string;
  courseIds: string[];
};

export type AddUserToTeamInput = {
  userId: string;
  courseId: string;
  teamPassword: string;
};

export type RemoveUserFromTeamInput = {
  userId: string;
  teamId: string;
  page: number;
  courseId: string;
};

export type CreateTeamInput = {
  socialLink: string;
  courseId: string;
  ownerId: string;
  page: number;
};

export type CreateCourseInput = {
  name: string;
  isActive: boolean;
  teamSize: number;
};

export type UpdateCourseInput = {
  id: string;
  name: string;
  isActive: boolean;
  teamSize: number;
};

export type UpdateTeamInput = {
  id: string;
  socialLink: string;
};

export type StateTeamsList = {
  isActiveModalExpel: boolean;
  isActiveModalLeave: boolean;
  isActiveModalJoin: boolean;
  isActiveModalCreateTeam: boolean;
  isActiveModalCreated: boolean;
  isActiveModalUpdateSocialLink: boolean;
  isActiveModalRemoveCourse: boolean;
  isActiveModalSortStudents: boolean;
  isActiveModalLeavePage: boolean;
  isActiveModalCreatedCourse: boolean;
  isActiveModalEditCourse: boolean;
  teamMemberExpelId: string;
  teamPassword: string;
  socialLink: string;
};

export type UserFilterInput = {
  discord: string | null;
  github: string | null;
  location: string | null;
  courseName: string | null;
  sortingOrder: string;
  teamFilter: boolean;
};

export type RemoveUserFromCourseInput = {
  userId: string;
  teamId?: string | null;
  courseId: string;
  page: number;
};

export type StateStudentsTable = {
  userData: User;
  filterData: TFilterForm;
};

export type StateLoginPage = {
  loginToken: string | null;
  currCourse: Course;
  currLanguage: string;
  isCommonError: boolean;
  isBurgerMenuOpen: boolean;
  isEditProfileDataChange: boolean;
  pathToThePage: string;
  isTourOpen: boolean;
};

export type State = {
  studentsTableReducer: StateStudentsTable;
  teamsListReducer: StateTeamsList;
  loginPageReducer: StateLoginPage;
};

export type TNavLink = {
  name: string;
  isAlwaysVisible: boolean;
};
