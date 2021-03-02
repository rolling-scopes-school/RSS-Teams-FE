import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ModalExpel,
  ModalJoin,
  ModalCreateEditTeam,
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
  ACTIVE_MODAL_UPDATE_SOCIAL_LINK,
  MODAL_INPUT_VALIDATION,
} from 'appConstants';
import {
  selectIsActiveModalCreated,
  selectIsActiveModalCreateTeam,
  selectIsActiveModalExpel,
  selectIsActiveModalJoin,
  selectIsActiveModalLeave,
  selectIsActiveModalUpdateSocialLink,
  selectSocialLink,
  selectTeamPassword,
} from '../../selectors';
import { Team } from 'types';
import { useCommonMutations } from './useCommonMutations';

export const TeamListModals: FC<{ page: number }> = ({ page }) => {
  const [textJoinModal, setTextJoinModal] = useState<string>(
    'Please enter your team password.'
  );
  const dispatch = useDispatch();
  const isActiveModalExpel = useSelector(selectIsActiveModalExpel);
  const isActiveModalLeave = useSelector(selectIsActiveModalLeave);
  const isActiveModalJoin = useSelector(selectIsActiveModalJoin);
  const isActiveModalCreateTeam = useSelector(selectIsActiveModalCreateTeam);
  const isActiveModalCreated = useSelector(selectIsActiveModalCreated);
  const isActiveModalUpdateSocialLink = useSelector(
    selectIsActiveModalUpdateSocialLink
  );
  const teamPassword = useSelector(selectTeamPassword);
  const socialLink = useSelector(selectSocialLink);

  const {
    addUserToTeam,
    removeUserFromTeam,
    expelUserFromTeam,
    createTeam,
    updateTeam,
  } = useCommonMutations(page);

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

  const onSubmitUpdateSocialLink = () => {
    updateTeam();
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
      {/*Create team*/}
      <ModalCreateEditTeam
        title="Create Team"
        text="Please enter your team telegram / discord / viber / ets. group link."
        open={isActiveModalCreateTeam}
        value={socialLink}
        onSubmit={onSubmitCreateTeam}
        onClose={() => {
          dispatch({ type: ACTIVE_MODAL_CREATE_TEAM, payload: false });
          dispatch({ type: SET_SOCIAL_LINK, payload: '' });
        }}
        okText="Create team"
        validateRules={MODAL_INPUT_VALIDATION}
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
      {/*Edit Team*/}
      <ModalCreateEditTeam
        title="Link to group"
        text="Please enter new group link."
        open={isActiveModalUpdateSocialLink}
        value={socialLink}
        onSubmit={onSubmitUpdateSocialLink}
        validateRules={MODAL_INPUT_VALIDATION}
        onClose={() => {
          dispatch({ type: ACTIVE_MODAL_UPDATE_SOCIAL_LINK, payload: false });
          dispatch({ type: SET_SOCIAL_LINK, payload: '' });
        }}
        okText="Update link"
      />
    </>
  );
};
