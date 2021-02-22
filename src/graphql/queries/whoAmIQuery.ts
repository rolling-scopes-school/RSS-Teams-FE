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
      isAdmin
      courses {
        id
        name
      }
      teams {
        id
        password
        number
        courseId
        socialLink
        members {
          id
          firstName
          lastName
          github
          telegram
          discord
          score
          country
          city
        }
      }
    }
  }
`;
