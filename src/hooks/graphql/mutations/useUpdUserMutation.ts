import { useMutation } from '@apollo/client';
import { UPD_USER_MUTATION } from 'graphql/mutations';
import { WHOAMI_QUERY } from 'graphql/queries';
import { UpdateUserInput } from 'types';

type Props = {
  user: UpdateUserInput;
};

export const useUpdUserMutation = ({ user }: Props) => {
  const formattedUser = { ...user, score: Number(user.score) };
  const [updateUser, { loading }] = useMutation(UPD_USER_MUTATION, {
    variables: {
      user: formattedUser,
    },
    update(cache, { data: { updateUser } }) {
      cache.writeQuery({
        query: WHOAMI_QUERY,
        data: {
          updateUser,
        },
      });
    },
  });
  return {
    updateUser,
    loadingM: loading,
  };
};
