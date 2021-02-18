import React, { FC, useState } from 'react';
import { useTeamsQuery } from 'hooks/graphql';
import { Loader, Error, Pagination } from 'components';
import { useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { Teams } from './components/Teams';
import { StyledTeams } from './styled';
import { TEAMS_PER_PAGE } from 'appConstants';

export const TeamsList: FC = () => {
  const [page, setPage] = useState<number>(0);
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);

  const { loadingT, errorT, teams } = useTeamsQuery({
    reactCourseId: currCourse.id,
    page: page,
  });
  const loading = loadingT;
  const error = errorT;

  if (loading) return <Loader />;
  if (error) return <Error />;

  const pageCount: number = Math.ceil(teams.count / TEAMS_PER_PAGE);
  return (
    <>
      <StyledTeams>
        <Teams teams={teams} myTeam={teams.results[0]} userId={userData.id} />
        {teams.count !== 0 && (
          <Pagination pageCount={pageCount} changePage={setPage} page={page} />
        )}
      </StyledTeams>
    </>
  );
};
