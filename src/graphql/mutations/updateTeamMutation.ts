import { gql } from '@apollo/client';

export const UPDATE_TEAM_MUTATION = gql`
  mutation updateTeam($team: UpdateTeamInput!) {
    updateTeam(team: $team) {
      id
      password
      number
      courseId
      socialLink
      memberIds
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
`;
