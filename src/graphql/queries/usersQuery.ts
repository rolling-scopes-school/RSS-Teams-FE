import { gql } from '@apollo/client';

export const USERS_QUERY = gql`
  query getUsers($courseId: String!, $pagination: PaginationInput!) {
    users(courseId: $courseId, pagination: $pagination) {
      count
      results {
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
        email
        isAdmin
        courseIds
        teamIds
      }
    }
  }
`;
