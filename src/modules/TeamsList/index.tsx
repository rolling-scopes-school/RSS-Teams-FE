import React, { FC, SyntheticEvent, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { Teams } from './components/Teams';
import { StyledTeams } from './styled';
import {
  TEAMS_PER_PAGE,
  ACTIVE_MODAL_EXPEL,
  ACTIVE_MODAL_LEAVE,
  ACTIVE_MODAL_JOIN,
  ACTIVE_MODAL_CREATE_TEAM,
  ACTIVE_MODAL_CREATED,
  SET_USER_DATA,
} from 'appConstants';
import {
  selectIsActiveModalCreated,
  selectIsActiveModalCreateTeam,
  selectIsActiveModalExpel,
  selectIsActiveModalJoin,
  selectIsActiveModalLeave,
  selectTeamMemberExpelId,
} from './selectors';
import { Team } from 'types';
import { useAddUserToTeamMutation } from 'hooks/graphql/mutations/useAddUserToTeamMutation';
import { useRemoveUserFromTeamMutation } from 'hooks/graphql/mutations/useRemoveUserFromTeamMutation';
import { useExpelUserFromTeamMutation } from 'hooks/graphql/mutations/useExpelUserFromTeamMutation';

const password = 'password';
export const TeamsList: FC = () => {
  const [page, setPage] = useState<number>(0);
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);
  const isActiveModalExpel = useSelector(selectIsActiveModalExpel);
  const isActiveModalLeave = useSelector(selectIsActiveModalLeave);
  const isActiveModalJoin = useSelector(selectIsActiveModalJoin);
  const isActiveModalCreateTeam = useSelector(selectIsActiveModalCreateTeam);
  const isActiveModalCreated = useSelector(selectIsActiveModalCreated);
  const teamMemberId = useSelector(selectTeamMemberExpelId);
  const dispatch = useDispatch();
  const { loadingT, errorT, teams } = useTeamsQuery({
    reactCourseId: currCourse.id,
    page: page,
  });
  const loading = loadingT;
  const error = errorT;
  const [textJoinModal, setTextJoinModal] = useState<string>(
    'Please enter your team password.'
  );

  const { addUserToTeam } = useAddUserToTeamMutation({
    data: {
      userId: userData.id,
      courseId: currCourse.id,
      teamPassword: '',
    },
  });

  const { removeUserFromTeam } = useRemoveUserFromTeamMutation({
    data: {
      teamId: userData.teams.length
        ? userData.teams.find((team: Team) => team.courseId === currCourse.id)!
            .id
        : '',
      userId: userData.id,
      courseId: currCourse.id,
      page: page,
    },
  });

  const { expelUserFromTeam } = useExpelUserFromTeamMutation({
    data: {
      teamId: userData.teams.length
        ? userData.teams.find((team: Team) => team.courseId === currCourse.id)!
            .id
        : '',
      userId: teamMemberId,
      courseId: currCourse.id,
      page: page,
    },
  });

  if (loading) return <Loader />;
  if (error) return <Error />;

  const onSubmit = (e: string) => {
    console.log('onSubmit', e);
  };

  const onSubmitJoinModal = (e: string) => {
    addUserToTeam({
      variables: {
        data: {
          courseId: currCourse.id,
          userId: userData.id,
          teamPassword: e,
        },
      },
    }).then((userNew) => {
      if (
        !userNew.data.addUserToTeam.teams ||
        !userNew.data.addUserToTeam.teams.find(
          (team: Team) => team.password === e
        )
      ) {
        setTextJoinModal('Wrong password!');
      } else {
        setTextJoinModal('Please enter your team password.');
        dispatch({ type: SET_USER_DATA, payload: userNew.data.addUserToTeam });
        dispatch({ type: ACTIVE_MODAL_JOIN, payload: false });
      }
    });
  };

  const onSubmitLeaveModal = () => {
    removeUserFromTeam().then((userNew) => {
      dispatch({
        type: SET_USER_DATA,
        payload: userNew.data.removeUserFromTeam,
      });
    });
  };

  const onSubmitExpelModal = () => {
    expelUserFromTeam();
  };

  const pageCount: number = Math.ceil(teams.count / TEAMS_PER_PAGE);
  return (
    <>
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
        />
        <Pagination pageCount={pageCount} changePage={setPage} page={page} />
      </StyledTeams>

      <ModalExpel
        title="Leave Team"
        text="Are you sure want to leave team?"
        open={isActiveModalLeave}
        onSubmit={onSubmitLeaveModal}
        onClose={() => dispatch({ type: ACTIVE_MODAL_LEAVE, payload: false })}
        okText="Yes!"
        cancelText="No"
      />

      <ModalExpel
        title="Expel User"
        text="Are you sure want to expel user?"
        open={isActiveModalExpel}
        onSubmit={onSubmitExpelModal}
        onClose={() => dispatch({ type: ACTIVE_MODAL_EXPEL, payload: false })}
        okText="Yes!"
        cancelText="No"
      />

      <ModalCreateTeam
        title="Create Team"
        text="Please enter your team telegram / discord / viber / ets. group link."
        open={isActiveModalCreateTeam}
        onSubmit={onSubmit}
        onClose={() =>
          dispatch({ type: ACTIVE_MODAL_CREATE_TEAM, payload: false })
        }
        okText="Create team"
      />

      <ModalJoin
        title="Join team"
        text={textJoinModal}
        open={isActiveModalJoin}
        onSubmit={onSubmitJoinModal}
        onClose={() => {
          setTextJoinModal('Please enter your team password.');
          dispatch({ type: ACTIVE_MODAL_JOIN, payload: false });
        }}
        okText="Join team"
      />

      <ModalCreated
        title="New team created!"
        text="You are automatically added there."
        text2="If you want to invite friends - tell them your team password:"
        open={isActiveModalCreated}
        onClose={() => dispatch({ type: ACTIVE_MODAL_CREATED, payload: false })}
        cancelText="Got it!"
        password={password}
      />
    </>
  );
};
