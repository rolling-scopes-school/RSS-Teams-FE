import { gql } from '@apollo/client';

export const ADD_USER_TO_TEAM_MUTATION = gql`
  mutation addUserToTeam($data: AddUserToTeamInput!) {
    addUserToTeam(data: $data) {
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
