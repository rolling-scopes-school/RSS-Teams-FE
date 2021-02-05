import { gql } from '@apollo/client';

export const USER_QUERY = gql`
  query getUser($github: String!) {
    user(github: $github) {
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
      courses
      email
      courseIds
      teamIds
      teams
    }
  }
`;
