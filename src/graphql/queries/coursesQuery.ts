import { gql } from '@apollo/client';

export const COURSES_QUERY = gql`
  {
    courses {
      id
      name
      teamIds
      userIds
      teams {
        id
      }
      users {
        id
      }
    }
  }
`;
