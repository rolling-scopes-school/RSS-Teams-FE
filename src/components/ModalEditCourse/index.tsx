import React, { FC, useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components';
import { TeamButton } from 'typography';
import { useTranslation } from 'react-i18next';
import { activeModalEditCourse } from 'modules/TeamsList/teamsListReducer';
import { InputBlock } from 'modules/AdminPage/components/ContentWrapper/components/AddCourseBlock/components/InputsBlock';
import { Course } from 'types';
import { COURSE_NAME_VALIDATION, TEAM_SIZE_VALIDATION } from 'appConstants';
import { onChangeField } from 'modules/AdminPage/components/ContentWrapper/components/AddCourseBlock';
import { DASHBOARD_HEADER_BG_COLOR, MAIN1_COLOR } from 'appConstants/colors';
import { useUpdateCourseMutation } from 'hooks/graphql';
import { ErrorModal } from 'components/ErrorModal';

type Props = {
  title: string;
  text: string;
  open: boolean;
  okText?: string;
  cancelText?: string;
  courseEditMeta: Course;
  checkIsCourseNameUniq: (courseName: string) => boolean;
  setCourseEditMeta: (course: Course | null) => void;
};

const isCourseInfoChanged = (
  { name, teamSize, isActive }: Course,
  newName: string,
  newTeamSize: string,
  newStatus: boolean
) => name !== newName || `${teamSize}` !== newTeamSize || isActive !== newStatus;

export const ModalEditCourse: FC<Props> = ({
  title,
  text,
  open,
  okText,
  cancelText,
  courseEditMeta,
  checkIsCourseNameUniq,
  setCourseEditMeta,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isCourseNameFieldValid, setIsCourseNameFieldValid] = useState(true);
  const [isTeamSizeFieldValid, setIsTeamSizeFieldValid] = useState(true);
  const [courseName, setCourseName] = useState(courseEditMeta.name);
  const [teamSize, setTeamSize] = useState(`${courseEditMeta.teamSize ?? ''}`);
  const [isCourseActive, setIsCourseActive] = useState(courseEditMeta.isActive);
  const [courseNameErrorMessage, setCourseNameErrorMessage] = useState('');
  const [teamSizeErrorMessage, setTeamSizeErrorMessage] = useState('');

  const { updateCourse, errorM: errorUpdateCourse } = useUpdateCourseMutation({
    course: {
      id: courseEditMeta?.id || '',
      name: courseName,
      teamSize: +teamSize,
      isActive: isCourseActive,
    },
  });

  const onCloseModal = useCallback(() => {
    setCourseEditMeta(null);
    setCourseNameErrorMessage('');
    setTeamSizeErrorMessage('');
    dispatch(activeModalEditCourse(false));
  }, [dispatch, setCourseEditMeta]);

  const onSubmitModal = useCallback(() => {
    if (isCourseNameFieldValid && isTeamSizeFieldValid) {
      if (courseName && teamSize) {
        const isCourseChanged = courseEditMeta
          ? isCourseInfoChanged(courseEditMeta, courseName, teamSize, isCourseActive)
          : true;
        isCourseChanged && updateCourse();
        onCloseModal();
      } else {
        if (!courseName) {
          setIsCourseNameFieldValid(false);
          setCourseNameErrorMessage(COURSE_NAME_VALIDATION.minLength.message);
        }
        if (!teamSize) {
          setIsTeamSizeFieldValid(false);
          setTeamSizeErrorMessage(TEAM_SIZE_VALIDATION.minLength.message);
        }
      }
    }
  }, [
    onCloseModal,
    courseEditMeta,
    courseName,
    isCourseActive,
    isCourseNameFieldValid,
    isTeamSizeFieldValid,
    teamSize,
    updateCourse,
  ]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSubmitModal();
      }
    };
    if (open) {
      document.addEventListener('keydown', listener);
    }
    return () => document.removeEventListener('keydown', listener);
  }, [onSubmitModal, open]);

  const changeCourseStateButtonText = isCourseActive ? 'Terminate course' : 'Activate course';
  const onChangeCourseState = () => setIsCourseActive(!isCourseActive);

  if (errorUpdateCourse) return <ErrorModal />;

  return (
    <Modal
      {...{ title, text, open, okText, cancelText }}
      onClose={onCloseModal}
      onSubmit={onSubmitModal}
      hideOnOutsideClick
      hideOnEsc
    >
      <InputBlock
        inputLabel="New course name"
        value={courseName}
        placeholder="Enter new course name"
        onChangeHandler={onChangeField(
          COURSE_NAME_VALIDATION,
          setIsCourseNameFieldValid,
          setCourseNameErrorMessage,
          setCourseName,
          checkIsCourseNameUniq
        )}
        isFieldValid={isCourseNameFieldValid}
        errorMessage={courseNameErrorMessage}
        isModal
      />
      <InputBlock
        inputLabel="New team size"
        value={teamSize}
        placeholder="Enter new team size"
        onChangeHandler={onChangeField(
          TEAM_SIZE_VALIDATION,
          setIsTeamSizeFieldValid,
          setTeamSizeErrorMessage,
          setTeamSize
        )}
        isFieldValid={isTeamSizeFieldValid}
        errorMessage={teamSizeErrorMessage}
        isModal
      />
      <TeamButton
        bgc={DASHBOARD_HEADER_BG_COLOR}
        color={MAIN1_COLOR}
        type="button"
        onClick={onChangeCourseState}
      >
        {t(changeCourseStateButtonText)}
      </TeamButton>
    </Modal>
  );
};
