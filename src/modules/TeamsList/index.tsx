import React, { FC, useState } from 'react';
import { useTeamsQuery } from 'hooks/graphql';
import { Loader, Error, Pagination } from 'components';
import { useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { StyledTeams, TeamWrapper } from './styled';
import { TEAMS_PER_PAGE } from 'appConstants';
import { Team } from 'types';
import { TeamListModals, Teams } from './components';
import { useSortStudentsMutation } from 'hooks/graphql/mutations/useSortStudentsMutation';

export const TeamsList: FC = () => {
  const [page, setPage] = useState<number>(0);
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);
  const { loadingT, errorT, teams } = useTeamsQuery({
    reactCourseId: currCourse.id,
    page: page,
  });
  const { sortStudents } = useSortStudentsMutation({
    courseId: currCourse.id,
    page,
  });
  const loading = loadingT;
  const error = errorT;

  if (loading) return <Loader />;
  if (error) return <Error />;

  const pageCount: number = Math.ceil(teams.count / TEAMS_PER_PAGE);

  const onClickSortStudents = () => {
    sortStudents();
  };

  return (
    <TeamWrapper>
      <StyledTeams>
        <Teams
          teams={teams}
          myTeam={
            userData.teams.length
              ? userData.teams.find(
                  (team: Team) => team.courseId === currCourse.id
                )
              : undefined
          }
          userId={userData.id}
          isAdmin={userData.isAdmin}
          onClickSortStudents={onClickSortStudents}
        />
        {teams.results.length ? (
          <Pagination pageCount={pageCount} changePage={setPage} page={page} />
        ) : null}
      </StyledTeams>

      <TeamListModals {...{ page }} />
    </TeamWrapper>
  );
};
