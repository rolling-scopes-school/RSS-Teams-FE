import { Loader, Error } from 'components';
import { useUsersQuery } from 'hooks/graphql';
import React, { FC } from 'react';
// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { User } from 'types';
import { Dashboard } from './components/Dashboard';
// import { selectUserData } from './selectors';

export const StudentsTable: FC = () => {
  const reactCourseId = '9c5a1bee-efb7-4eae-b306-c3d2061e9a32';
  // const userData = useSelector(selectUserData);
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
