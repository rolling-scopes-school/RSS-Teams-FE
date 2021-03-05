import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTeamsQuery } from 'hooks/graphql';
import { Loader, ErrorModal, Pagination } from 'components';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { StyledTeams, TeamWrapper } from './styled';
import { TEAMS_PER_PAGE } from 'appConstants';
import { Team } from 'types';
import { TeamListModals, Teams } from './components';

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
  if (error) return <ErrorModal />;

  const pageCount: number = Math.ceil(teams.count / TEAMS_PER_PAGE);

  return (
    <TeamWrapper>
      <StyledTeams>
        <Teams
          teams={teams}
          myTeam={
            userData.teams.find(
              (team: Team) => team.courseId === currCourse.id
            ) ?? undefined
          }
          userId={userData.id}
          isAdmin={userData.isAdmin}
        />
        {!!teams.results.length && (
          <Pagination pageCount={pageCount} changePage={setPage} page={page} />
        )}
      </StyledTeams>

      <TeamListModals {...{ page }} />
    </TeamWrapper>
  );
};
