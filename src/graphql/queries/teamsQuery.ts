import { gql } from '@apollo/client';

export const TEAMS_QUERY = gql`
  query getTeams($courseId: String!, $pagination: PaginationInput!) {
    teams(courseId: $courseId, pagination: $pagination) {
      count
      results {
        id
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
