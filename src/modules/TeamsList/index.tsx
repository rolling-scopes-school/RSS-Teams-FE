import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTeamsQuery } from 'hooks/graphql';
import { Loader, ErrorModal, Pagination } from 'components';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { StyledTeams } from './styled';
import { TEAMS_PER_PAGE, TOUR_OPENING } from 'appConstants';
import { Team } from 'types';
import { TeamListModals, Teams } from './components';
import { useCommonMutations } from './components/TeamListModals/useCommonMutations';
import { AdditionalWrapper, ContentPageWrapper } from 'typography';
import { setIsTourOpen } from 'modules/LoginPage/loginPageReducer';
import { setTourOpening } from 'modules/LoginPage/loginPageMiddleware';

export const TeamsList: FC = () => {
  const [page, setPage] = useState(0);
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const userTeam = userData.teams?.find((team: Team) => team.courseId === currCourse.id);

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
    commonMutationError,
    isLoading,
  } = useCommonMutations(page);

  if (!localStorage.getItem(TOUR_OPENING) && !userTeam) {
    dispatch(setIsTourOpen(true));
  }
  dispatch(setTourOpening(TOUR_OPENING));

  if (loading || isLoading) return <Loader />;
  if (error || commonMutationError) return <ErrorModal error={error || commonMutationError} />;

  const pageCount: number = Math.ceil(teams.count / TEAMS_PER_PAGE);

  return (
    <ContentPageWrapper>
      <StyledTeams>
        <Teams teams={teams} myTeam={userTeam} userId={userData.id} />
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
        }}
      />
    </ContentPageWrapper>
  );
};
