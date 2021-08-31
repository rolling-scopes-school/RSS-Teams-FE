import React, { FC, useCallback, useState } from 'react';
import { MAIN2_COLOR, WHITE_COLOR } from 'appConstants/colors';
import { useTranslation } from 'react-i18next';
import { TeamButton } from 'typography';
import { InputBlock } from './components/InputsBlock';
import { AddCourseBlockWrapper, InputsBlockWrapper } from './styled';
import { isFieldValid } from 'utils/isFieldValid';
import { COURSE_NAME_VALIDATION, TEAM_SIZE_VALIDATION } from 'appConstants';
import { useCreateCourseMutation } from 'hooks/graphql';
import { ErrorModal, Modal } from 'components';
import { activeModalCreatedCourse } from 'modules/TeamsList/teamsListReducer';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsActiveModalCreatedCourse } from 'modules/TeamsList/selectors';

export const onChangeField =
  (
    validateRules: any,
    setInputValid: (isValid: boolean) => void,
    setErrorMessage: (errorMessage: string) => void,
    setInputValue: (value: string) => void,
    isValueUniq?: (value: string) => boolean
  ) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    isFieldValid(
      e.target.value.trim(),
      validateRules,
      !!validateRules,
      setInputValid,
      setErrorMessage,
      isValueUniq
    );
    setInputValue(e.target.value);
  };

export const AddCourseBlock: FC<{ isCourseNameUniq: (courseName: string) => boolean }> = ({
  isCourseNameUniq,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isActiveModalCreatedCourse = useSelector(selectIsActiveModalCreatedCourse);
  const [isCourseNameFieldValid, setIsCourseNameFieldValid] = useState(true);
  const [isTeamSizeFieldValid, setIsTeamSizeFieldValid] = useState(true);
  const [courseName, setCourseName] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [courseNameErrorMessage, setCourseNameErrorMessage] = useState('');
  const [teamSizeErrorMessage, setTeamSizeErrorMessage] = useState('');

  const { createCourse, errorM: errorCreateCourse } = useCreateCourseMutation({
    course: {
      name: courseName,
      teamSize: +teamSize,
      isActive: true,
    },
  });

  const onAddNewCourse = useCallback(() => {
    if (isCourseNameFieldValid && isTeamSizeFieldValid) {
      if (courseName && teamSize) {
        createCourse().then(() => {
          dispatch(activeModalCreatedCourse(true));
        });
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
  }, [isCourseNameFieldValid, isTeamSizeFieldValid, courseName, teamSize, createCourse, dispatch]);

  if (errorCreateCourse) return <ErrorModal />;

  return (
    <>
      <AddCourseBlockWrapper>
        <InputsBlockWrapper>
          <InputBlock
            inputLabel="Course name"
            value={courseName}
            placeholder="Enter course name"
            onChangeHandler={onChangeField(
              COURSE_NAME_VALIDATION,
              setIsCourseNameFieldValid,
              setCourseNameErrorMessage,
              setCourseName,
              isCourseNameUniq
            )}
            isFieldValid={isCourseNameFieldValid}
            errorMessage={courseNameErrorMessage}
          />
          <InputBlock
            inputLabel="Team size"
            value={teamSize}
            placeholder="Enter team size"
            onChangeHandler={onChangeField(
              TEAM_SIZE_VALIDATION,
              setIsTeamSizeFieldValid,
              setTeamSizeErrorMessage,
              setTeamSize
            )}
            isFieldValid={isTeamSizeFieldValid}
            errorMessage={teamSizeErrorMessage}
          />
        </InputsBlockWrapper>
        <TeamButton bgc={MAIN2_COLOR} color={WHITE_COLOR} type="button" onClick={onAddNewCourse}>
          {t('Add new course')}
        </TeamButton>
      </AddCourseBlockWrapper>
      <Modal
        title="Course was created"
        text="If you want to change something in new course"
        onClose={() => {
          setCourseName('');
          setTeamSize('');
          dispatch(activeModalCreatedCourse(false));
        }}
        cancelText="Got it!"
        open={isActiveModalCreatedCourse}
        hideOnOutsideClick
        hideOnEsc
      ></Modal>
    </>
  );
};
