import { useMutation } from '@apollo/client';
import { UPD_USER_MUTATION } from 'graphql/mutations';
import { UpdateUserInput } from 'types';

type Props = {
  user: UpdateUserInput;
};

export const useUpdUserMutation = ({ user }: Props) => {
  const [updateUser, { data, loading }] = useMutation(UPD_USER_MUTATION, {
    variables: {
      user,
    },
  });
  console.log('i am data from mutation', data);
  return {
    updateUser,
    loadingM: loading,
  };
};
