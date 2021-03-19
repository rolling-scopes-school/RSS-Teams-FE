import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ModalExpel,
  ModalJoin,
  ModalCreateEditTeam,
  ModalCreated,
} from 'components';
import { MODAL_INPUT_VALIDATION } from 'appConstants';
import {
  selectIsActiveModalCreated,
  selectIsActiveModalCreateTeam,
  selectIsActiveModalExpel,
  selectIsActiveModalJoin,
  selectIsActiveModalLeave,
  selectIsActiveModalRemoveCourse,
  selectIsActiveModalSortStudents,
  selectIsActiveModalUpdateSocialLink,
  selectSocialLink,
  selectTeamPassword,
} from '../../selectors';
import { Team, User } from 'types';
import { setUserData } from 'modules/StudentsTable/studentsTableReducer';
import {
  setSocialLink,
  setTeamPassword,
  activeModalExpel,
  activeModalLeave,
  activeModalJoin,
  activeModalCreateTeam,
  activeModalCreated,
  activeModalUpdateSocialLink,
  activeModalRemoveCourse,
  activeModalSortStudents,
} from 'modules/TeamsList/teamsListReducer';

type TeamListModalsProps = {
  addUserToTeam: any;
  removeUserFromTeam: any;
  expelUserFromTeam: any;
  createTeam: any;
  updateTeam: any;
  removeUserFromCourse: any;
  sortStudents: any;
};

export const TeamListModals: FC<TeamListModalsProps> = ({
  addUserToTeam,
  removeUserFromTeam,
  expelUserFromTeam,
  createTeam,
  updateTeam,
  removeUserFromCourse,
  sortStudents,
}) => {
  const [textJoinModal, setTextJoinModal] = useState<string>(
    'Please, enter your team password.'
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
  const isActiveModalSortStudents = useSelector(
    selectIsActiveModalSortStudents
  );
  const isActiveModalRemoveCourse = useSelector(
    selectIsActiveModalRemoveCourse
  );
  const teamPassword = useSelector(selectTeamPassword);
  const socialLink = useSelector(selectSocialLink);

  const onSubmitJoinModal = async (e: string) => {
    addUserToTeam().then(
      ({ data: { addUserToTeam } }: { data: { addUserToTeam: User } }) => {
        const isPasswordIncorrect =
          !addUserToTeam.teams ||
          !addUserToTeam.teams.find((team: Team) => team.password === e);
        if (isPasswordIncorrect) {
          setTextJoinModal('Wrong password!');
        } else {
          setTextJoinModal('Please, enter your team password.');
          dispatch(setUserData(addUserToTeam));
          dispatch(activeModalJoin(false));
          dispatch(setTeamPassword(''));
        }
      }
    );
  };

  const onSubmitLeaveModal = () => {
    removeUserFromTeam().then(
      ({
        data: { removeUserFromTeam },
      }: {
        data: { removeUserFromTeam: User };
      }) => {
        dispatch(setUserData(removeUserFromTeam));
      }
    );
  };

  const onSubmitExpelModal = () => {
    expelUserFromTeam();
  };

  const onSubmitRemoveCourseModal = () => {
    removeUserFromCourse();
  };

  const onSubmitCreateTeam = () => {
    createTeam().then(
      ({ data: { createTeam } }: { data: { createTeam: Team } }) => {
        dispatch(setTeamPassword(createTeam.password));
        dispatch(activeModalCreated(true));
      }
    );
  };

  const onSubmitUpdateSocialLink = () => {
    updateTeam();
  };

  const onSubmitSortStudents = () => {
    sortStudents();
  };

  return (
    <>
      <ModalExpel
        title="Leave team"
        text="Are you sure want to leave team?"
        open={isActiveModalLeave}
        onSubmit={onSubmitLeaveModal}
        onClose={() => dispatch(activeModalLeave(false))}
        okText="Yes"
        cancelText="No"
      />
      <ModalExpel
        title="Expel User"
        text="Are you sure want to expel user?"
        open={isActiveModalExpel}
        onSubmit={onSubmitExpelModal}
        onClose={() => dispatch(activeModalExpel(false))}
        okText="Yes"
        cancelText="No"
      />
      <ModalExpel
        title="Leave course"
        text="Are you sure to leave this course?"
        open={isActiveModalRemoveCourse}
        onSubmit={onSubmitRemoveCourseModal}
        onClose={() => dispatch(activeModalRemoveCourse(false))}
        okText="Yes"
        cancelText="No"
      />
      <ModalExpel
        title="Sort students"
        text="Sort students?"
        open={isActiveModalSortStudents}
        onSubmit={onSubmitSortStudents}
        isCrossIconVisible={false}
        onClose={() => dispatch(activeModalSortStudents(false))}
        okText="Yes"
        cancelText="No"
      />
      {/*Create team*/}
      <ModalCreateEditTeam
        title="Create team"
        text="Please, enter your team telegram / discord / viber / ets. group link."
        open={isActiveModalCreateTeam}
        value={socialLink}
        onSubmit={onSubmitCreateTeam}
        onClose={() => {
          dispatch(activeModalCreateTeam(false));
          dispatch(setSocialLink(''));
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
        onChange={() => setTextJoinModal('Please, enter your team password.')}
        onClose={() => {
          setTextJoinModal('Please, enter your team password.');
          dispatch(activeModalJoin(false));
          dispatch(setTeamPassword(''));
        }}
        okText="Join team"
      />
      <ModalCreated
        title="New team created!"
        text="You are automatically added there."
        text2="If you want to invite friends - tell them your team password:"
        open={isActiveModalCreated}
        onClose={() => dispatch(activeModalCreated(false))}
        cancelText="Got it!"
        password={teamPassword}
      />
      {/*Edit Team*/}
      <ModalCreateEditTeam
        title="Link to group"
        text="Please, enter new group link."
        open={isActiveModalUpdateSocialLink}
        value={socialLink}
        onSubmit={onSubmitUpdateSocialLink}
        validateRules={MODAL_INPUT_VALIDATION}
        onClose={() => {
          dispatch(activeModalUpdateSocialLink(false));
          dispatch(setSocialLink(''));
        }}
        okText="Update link"
      />
    </>
  );
};
