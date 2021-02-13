import { gql } from '@apollo/client';

export const UPD_USER_MUTATION = gql`
  mutation updateUser($user: UpdateUserInput!) {
    updateUser(user: $user) {
      id
      firstName
    }
  }
`;
