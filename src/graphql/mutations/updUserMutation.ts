import { gql } from '@apollo/client';

export const UPD_USER_MUTATION = gql`
  mutation updateUser($user: UpdateUserInput!) {
    updateUser(user: $user) {
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
