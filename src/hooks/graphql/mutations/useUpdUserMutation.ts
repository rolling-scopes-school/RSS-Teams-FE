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
  return {
    updateUser,
    loadingM: loading,
  };
};
