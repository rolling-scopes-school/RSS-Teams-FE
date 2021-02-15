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
