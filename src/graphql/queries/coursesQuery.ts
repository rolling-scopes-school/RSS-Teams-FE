import { gql } from '@apollo/client';

export const COURSES_QUERY = gql`
  query getCourses {
    courses {
      id
      name
      teamSize
      isActive
    }
  }
`;
