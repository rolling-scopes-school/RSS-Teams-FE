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
  courses: Course[] | [];
  email: string | null;
  courseIds: string[];
  teamIds: string[];
  teams: Team[] | [];
};

export type Course = {
  id: string;
  name: string;
  teamIds: string[];
  userIds: string[];
  teams: Team[];
  users: User[];
};

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

export type UserFilterInput = {
  discord: string;
  github: string;
  location: string;
  courseName: string;
  sortingOrder: string;
  teamFilter: boolean;
};

export type StateTeamsList = {
  teams: Team[];
};

export type StateStudentsTable = {
  userData: User;
};

export type StateLoginPage = {
  loginToken: string | null;
};

export type State = {
  studentsTableReducer: StateStudentsTable;
  teamsListReducer: StateTeamsList;
  loginPageReducer: StateLoginPage;
};
