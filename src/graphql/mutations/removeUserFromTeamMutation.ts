import { gql } from '@apollo/client';

export const REMOVE_USER_FROM_TEAM_MUTATION = gql`
  mutation removeUserFromTeam($data: RemoveUserFromTeamInput!) {
    removeUserFromTeam(data: $data) {
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
