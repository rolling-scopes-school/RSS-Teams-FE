import { gql } from '@apollo/client';

export const WHOAMI_QUERY = gql`
  query getWhoAMi {
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
        name
      }
      email
      courseIds
      teamIds
      teams {
        id
        number
        courseId
      }
    }
  }
`;
