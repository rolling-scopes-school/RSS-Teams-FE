import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { USERS_PER_PAGE } from 'appConstants';
import { Loader, Error, Pagination } from 'components';
import { useUsersQuery } from 'hooks/graphql';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { Dashboard } from './components/Dashboard';

export const StudentsTable: FC = () => {
  const [page, setPage] = useState<number>(0);
  const currCourse = useSelector(selectCurrCourse);
  const { loadingU, errorU, users } = useUsersQuery({
    reactCourseId: currCourse.id,
    page: page,
  });
  const loading = loadingU;
  const error = errorU;

  if (loading) return <Loader />;
  if (error) return <Error />;

  const pageCount: number = Math.ceil(users.count / USERS_PER_PAGE);
  return (
    <div>
      <Dashboard users={users.results} page={page} />
      <Pagination pageCount={pageCount} changePage={setPage} page={page} />
    </div>
  );
};
