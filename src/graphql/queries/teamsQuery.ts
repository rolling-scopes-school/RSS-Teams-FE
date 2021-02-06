import { gql } from '@apollo/client';

export const TEAMS_QUERY = gql`
  query getTeams($courseId: String!, $pagination: PaginationInput!) {
    teams(courseId: $courseId, pagination: $pagination) {
      count
      results {
        id
        password
        number
        courseId
        socialLink
        memberIds
      }
    }
  }
`;
