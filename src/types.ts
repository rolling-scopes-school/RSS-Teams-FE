export type DefaultUser = {
  // automatically generated after github login
  id: number;
  github: string;
};

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  github: string;
  telegram: string;
  discord: string;
  score: number | 1000; // (1000 - default)
  country: string;
  city: string;
  isAdmin: boolean;
  courses: Course[];
};

export type Course = {
  name: string; // predefined values
  team: number;
};

export type Team = {
  id: string; // predefined values
  number: number;
  password: string;
  members: User[];
  socialLink: string;
};

export type StateTeamsList = {
  teams: Team[];
};

export type StateStudentsTable = {
  userData: User | DefaultUser;
};

export type StateLoginPage = {
  loginToken: string;
};

export type State = {
  studentsTableReducer: StateStudentsTable;
  teamsListReducer: StateTeamsList;
  loginPageReducer: StateLoginPage;
};
