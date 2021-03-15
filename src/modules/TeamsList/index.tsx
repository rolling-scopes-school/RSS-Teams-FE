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
import { useCommonMutations } from './components/TeamListModals/useCommonMutations';
import { AdditionalWrapper } from 'typography';

export const TeamsList: FC = () => {
  const [page, setPage] = useState<number>(0);
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);

  const { loadingT, errorT, teams } = useTeamsQuery({
    reactCourseId: currCourse.id,
    page,
  });

  const loading = loadingT;
  const error = errorT;
  const {
    addUserToTeam,
    removeUserFromTeam,
    expelUserFromTeam,
    createTeam,
    updateTeam,
    removeUserFromCourse,
    sortStudents,
    isError,
    isLoading,
  } = useCommonMutations(page);

  if (loading || isLoading) return <Loader />;
  if (error || isError) return <ErrorModal />;

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
        <AdditionalWrapper />
      </StyledTeams>

      <TeamListModals
        {...{
          addUserToTeam,
          removeUserFromTeam,
          expelUserFromTeam,
          createTeam,
          updateTeam,
          removeUserFromCourse,
          sortStudents,
        }}
      />
    </TeamWrapper>
  );
};
