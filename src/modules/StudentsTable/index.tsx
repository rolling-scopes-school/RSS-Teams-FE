import { Loader, Error } from 'components';
import { useUsersQuery, useWhoAmIQuery } from 'hooks/graphql';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'types';
import { Logo } from 'typography';

export const StudentsTable: FC = () => {
  const reactCourseId = '97c79b78-3f45-4fc1-9a62-4d99b1ee6fab';
  const { loadingW, errorW, whoAmI } = useWhoAmIQuery();
  const { loadingU, errorU, users } = useUsersQuery({
    reactCourseId,
    skip: loadingW,
  });
  const loading = loadingW || loadingU;
  const error = errorW || errorU;

  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <div>
      <Logo />
      <p>I am {whoAmI.github}</p>
      <p>Students count {users.count}</p>
      {users.results.map((item: User) => {
        return <div key={item.id}>{item.github}</div>;
      })}
      <p>This is students table!</p>
      <Link to="/">Teams</Link>
    </div>
  );
};
