import { Loader, Error } from 'components';
import { useUsersQuery } from 'hooks/graphql';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Dashboard } from './components/Dashboard';

export const StudentsTable: FC = () => {
  const currCourse = useSelector(selectCurrCourse);
  const { loadingU, errorU } = useUsersQuery({
    reactCourseId: currCourse.id,
  });
  const loading = loadingU;
  const error = errorU;

  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <div>
      <Dashboard />
    </div>
  );
};
