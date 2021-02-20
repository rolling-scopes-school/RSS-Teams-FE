import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ModalExpel,
  ModalJoin,
  ModalCreateTeam,
  ModalCreated,
} from 'components';
import {
  ACTIVE_MODAL_EXPEL,
  ACTIVE_MODAL_LEAVE,
  ACTIVE_MODAL_JOIN,
  ACTIVE_MODAL_CREATE_TEAM,
  ACTIVE_MODAL_CREATED,
  SET_USER_DATA,
  SET_TEAM_PASSWORD,
  SET_SOCIAL_LINK,
} from 'appConstants';
import {
  selectIsActiveModalCreated,
  selectIsActiveModalCreateTeam,
  selectIsActiveModalExpel,
  selectIsActiveModalJoin,
  selectIsActiveModalLeave,
  selectSocialLink,
  selectTeamMemberExpelId,
  selectTeamPassword,
} from '../../selectors';
import { Team } from 'types';
import {
  useAddUserToTeamMutation,
  useRemoveUserFromTeamMutation,
  useExpelUserFromTeamMutation,
  useCreateTeamMutation,
} from 'hooks/graphql';
import { selectCurrCourse } from 'modules/LoginPage/selectors';
import { selectUserData } from 'modules/StudentsTable/selectors';

export const TeamListModals: FC<{ page: number }> = ({ page }) => {
  const [textJoinModal, setTextJoinModal] = useState<string>(
    'Please enter your team password.'
  );
  const dispatch = useDispatch();
  const currCourse = useSelector(selectCurrCourse);
  const userData = useSelector(selectUserData);
  const isActiveModalExpel = useSelector(selectIsActiveModalExpel);
  const isActiveModalLeave = useSelector(selectIsActiveModalLeave);
  const isActiveModalJoin = useSelector(selectIsActiveModalJoin);
  const isActiveModalCreateTeam = useSelector(selectIsActiveModalCreateTeam);
  const isActiveModalCreated = useSelector(selectIsActiveModalCreated);
  const teamMemberId = useSelector(selectTeamMemberExpelId);
  const teamPassword = useSelector(selectTeamPassword);
  const socialLink = useSelector(selectSocialLink);

  const { addUserToTeam } = useAddUserToTeamMutation({
    data: {
      userId: userData.id,
      courseId: currCourse.id,
      teamPassword,
    },
  });

  const { removeUserFromTeam } = useRemoveUserFromTeamMutation({
    data: {
      teamId:
        userData.teams.find((team: Team) => team.courseId === currCourse.id)
          ?.id ?? '',
      userId: userData.id,
      courseId: currCourse.id,
      page,
    },
  });

  const { expelUserFromTeam } = useExpelUserFromTeamMutation({
    data: {
      teamId:
        userData.teams.find((team: Team) => team.courseId === currCourse.id)
          ?.id ?? '',
      userId: teamMemberId,
      courseId: currCourse.id,
      page,
    },
  });

  const { createTeam } = useCreateTeamMutation({
    team: {
      socialLink,
      courseId: currCourse.id,
      ownerId: userData.id,
      page,
    },
  });

  const onSubmitJoinModal = async (e: string) => {
    addUserToTeam().then(({ data: { addUserToTeam } }) => {
      const isPasswordIncorrect =
        !addUserToTeam.teams ||
        !addUserToTeam.teams.find((team: Team) => team.password === e);
      if (isPasswordIncorrect) {
        setTextJoinModal('Wrong password!');
      } else {
        setTextJoinModal('Please enter your team password.');
        dispatch({ type: SET_USER_DATA, payload: addUserToTeam });
        dispatch({ type: ACTIVE_MODAL_JOIN, payload: false });
        dispatch({ type: SET_TEAM_PASSWORD, payload: '' });
      }
    });
  };

  const onSubmitLeaveModal = () => {
    removeUserFromTeam().then(({ data: { removeUserFromTeam } }) => {
      dispatch({
        type: SET_USER_DATA,
        payload: removeUserFromTeam,
      });
    });
  };

  const onSubmitExpelModal = () => {
    expelUserFromTeam();
  };

  const onSubmitCreateTeam = () => {
    createTeam().then(({ data: { createTeam } }) => {
      dispatch({ type: SET_TEAM_PASSWORD, payload: createTeam.password });
      dispatch({ type: ACTIVE_MODAL_CREATED, payload: true });
    });
  };

  return (
    <>
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
        onSubmit={onSubmitCreateTeam}
        value={socialLink}
        onClose={() => {
          dispatch({ type: ACTIVE_MODAL_CREATE_TEAM, payload: false });
          dispatch({ type: SET_SOCIAL_LINK, payload: '' });
        }}
        okText="Create team"
      />
      <ModalJoin
        title="Join team"
        text={textJoinModal}
        open={isActiveModalJoin}
        onSubmit={onSubmitJoinModal}
        value={teamPassword}
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
        password={teamPassword}
      />
    </>
  );
};