import { Loader, Error } from 'components';
import { useUsersQuery } from 'hooks/graphql';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { User } from 'types';
import { Dashboard } from './components/Dashboard';
import { selectUserData } from './selectors';

export const StudentsTable: FC = () => {
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);
  const { loadingU, errorU, users } = useUsersQuery({
    reactCourseId: currCourse.id,
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
