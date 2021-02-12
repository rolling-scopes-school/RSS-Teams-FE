import { Loader, Error } from 'components';
import { useUsersQuery } from 'hooks/graphql';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { User } from 'types';
import { Dashboard } from './components/Dashboard';
import { selectUserData } from './selectors';

export const StudentsTable: FC = () => {
  const reactCourseId = '97c79b78-3f45-4fc1-9a62-4d99b1ee6fab';
  const userData = useSelector(selectUserData);
  const { loadingU, errorU, users } = useUsersQuery({
    reactCourseId,
  });
  const loading = loadingU;
  const error = errorU;

  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <div>
      <Dashboard />
      <Link to="/">Teams</Link>
    </div>
  );
};
