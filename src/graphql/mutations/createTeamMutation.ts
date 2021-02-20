import { gql } from '@apollo/client';

export const CREATE_TEAM_MUTATION = gql`
  mutation createTeam($team: CreateTeamInput!) {
    createTeam(team: $team) {
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
