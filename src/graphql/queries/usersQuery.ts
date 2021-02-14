import { gql } from '@apollo/client';

export const USERS_QUERY = gql`
  query getUsers(
    $courseId: String!
    $pagination: PaginationInput!
    $filter: UserFilterInput
  ) {
    users(courseId: $courseId, pagination: $pagination, filter: $filter) {
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
        courses {
          id
          name
        }
        teamIds
        teams {
          id
          number
          courseId
        }
      }
    }
  }
`;
