import { gql } from '@apollo/client';

export const WHOAMI_QUERY = gql`
  {
    whoAmI {
      id
      firstName
      lastName
      github
      telegram
      discord
      score
      country
      city
      avatar
      isAdmin
      courses {
        id
      }
      email
      courseIds
      teamIds
      teams {
        id
      }
    }
  }
`;
