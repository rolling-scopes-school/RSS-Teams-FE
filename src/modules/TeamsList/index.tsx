import React, { FC, useState } from 'react';
import { useTeamsQuery } from 'hooks/graphql';
import {
  Loader,
  Error,
  ModalExpel,
  ModalJoin,
  ModalCreateTeam,
  ModalCreated,
  Pagination,
} from 'components';
import { useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { Teams } from './components/Teams';
import { StyledTeams } from './styled';
import { Button } from 'typography';
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
        <Pagination pageCount={pageCount} changePage={setPage} page={page} />
        <Button type="button" onClick={showModal}>
          Open modal
        </Button>
      </StyledTeams>
      <ModalExpel
        title="Leave Team"
        text="Are you sure want to leave team?"
        open={modalOpened1}
        onSubmit={onSubmit}
        onClose={hideModal1}
        okText="Yes!"
        cancelText="No"
      />
      <ModalExpel
        title="Expel User"
        text="Are you sure want to expel user?"
        open={modalOpened2}
        onSubmit={onSubmit}
        onClose={hideModal2}
        okText="Yes!"
        cancelText="No"
      />
      <ModalCreateTeam
        title="Create Team"
        text="Please enter your team telegram / discord / viber / ets. group link."
        open={modalOpened3}
        onSubmit={onSubmit}
        onClose={hideModal3}
        okText="Create team"
      />

      <ModalJoin
        title="Join team"
        text="Please enter your team password."
        open={modalOpened4}
        onSubmit={onSubmit}
        onClose={hideModal4}
        okText="Join team"
      />
      <ModalCreated
        title="New team created!"
        text="You are automatically added there."
        text2="If you want to invite friends - tell them your team password:"
        open={modalOpened5}
        onClose={hideModal5}
        cancelText="Got it!"
        password={password}
      />
    </>
  );
};
