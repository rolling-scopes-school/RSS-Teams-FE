import React, { FC, useState } from 'react';
import { useTeamsQuery } from 'hooks/graphql';
import { Loader, Error, Modal } from 'components';
import { Team } from 'types';
import { useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { Teams } from './components/Teams';
import { StyledTeams } from './styled';
import { Button } from 'typography';

export const TeamsList: FC = () => {
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const hideModal = () => setModalOpened(false);
  const showModal = () => setModalOpened(true);

  const { loadingT, errorT, teams } = useTeamsQuery({
    reactCourseId: currCourse.id,
  });
  const loading = loadingT;
  const error = errorT;

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <>
      <StyledTeams>
        <Teams teams={teams} myTeam={teams.results[0]} userId={userData.id} />
        <Button type="button" onClick={showModal}>
          Open modal
        </Button>
      </StyledTeams>
      <Modal open={modalOpened} onClose={hideModal}>
        <div>
          <div>Title</div>
          <div>Text</div>
        </div>
      </Modal>
    </>
  );
};
