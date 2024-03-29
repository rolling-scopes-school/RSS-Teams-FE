import React, { FC, useEffect, useMemo, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FieldError, useForm } from 'react-hook-form';
import { Loader, InputField, CourseField, ErrorModal, ModalExpel } from 'components';
import { useCoursesQuery, useUpdUserMutation } from 'hooks/graphql';
import { Button, AdditionalWrapper } from 'typography';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { selectIsCommonError, selectPathToThePage, selectToken } from 'modules/LoginPage/selectors';
import { Course, UpdateUserInput, User } from 'types';
import { checkIsCoursesEqual, formFields, checkIsFormFieldsEqual } from './formFields';
import {
  EditProfileWrapper,
  InputsWrapper,
  ButtonWrapper,
  FormWrapper,
  UserCoursesListTitle,
  FormTitle,
  CoursesWrapper,
  CommonWrapper,
} from './styled';
import { BG_COLOR, MAIN1_COLOR } from 'appConstants/colors';
import { INPUT_VALUES_EDIT_PROFILE } from 'appConstants';
import { IOldCourses, UserCourseListItem } from './components/UserCourseListItem';
import { useTranslation } from 'react-i18next';
import { setUserData } from 'modules/StudentsTable/studentsTableReducer';
import { setCourse } from 'modules/LoginPage/loginPageMiddleware';
import { setEditProfileDataChange } from 'modules/LoginPage/loginPageReducer';
import { activeModalLeavePage } from 'modules/TeamsList/teamsListReducer';
import { selectIsActiveModalLeavePage } from 'modules/TeamsList/selectors';

export const EditProfile: FC = () => {
  const history = useHistory();
  const loginToken = useSelector(selectToken);
  const userData = useSelector(selectUserData);
  const isCommonError = useSelector(selectIsCommonError);
  const { t } = useTranslation();
  const isActiveModalLeavePage = useSelector(selectIsActiveModalLeavePage);
  const pathToThePage = useSelector(selectPathToThePage);

  const oldCourses: IOldCourses[] = userData.courses.map((course: Course) => ({
    ...course,
    isNew: true,
  }));

  const [userCourses, setUserCourses] = useState<IOldCourses[]>(oldCourses);
  const { loading, courses, error } = useCoursesQuery();
  const defaultData = useMemo(
    () => ({
      id: userData.id,
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      discord: userData.discord || '',
      telegram: userData.telegram || '',
      city: userData.city || '',
      country: userData.country || '',
      courseIds: [],
      score: userData.score || 9999,
    }),
    [userData]
  );
  const [inputValues, setInputValues] = useState<UpdateUserInput>(defaultData);

  const { updateUser, loadingM, errorM } = useUpdUserMutation({
    user: {
      ...inputValues,
      courseIds: userCourses.map(({ id }: Course) => id),
    },
  });

  const [isValidCoursesList, setValidCoursesList] = useState(true);

  const dispatch = useDispatch();

  const isUserNew = !!userData.courses.length;

  const currentCourses = courses?.filter(
    ({ isActive, name }: Course) =>
      isActive && !userCourses.find((uItem: Course) => uItem.name === name)
  );

  const { register, handleSubmit, errors, reset } = useForm<UpdateUserInput>({
    defaultValues: inputValues,
    mode: 'onChange',
  });

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value.trim(),
    });
    dispatch(
      setEditProfileDataChange(
        !checkIsFormFieldsEqual(
          {
            ...inputValues,
            [name]: value.trim(),
          },
          userData
        )
      )
    );
  };

  const onSubmit = () => {
    if (userCourses.length) {
      updateUser().then(({ data: { updateUser } }) => {
        const newCurrentCourse =
          updateUser.courses.find(
            (course: Course) => course.id === userCourses[userCourses.length - 1].id
          ) ?? updateUser.courses[0];
        dispatch(setCourse(newCurrentCourse));
        dispatch(setUserData(updateUser));
        history.push('/');
      });
    } else {
      setValidCoursesList(false);
    }
    dispatch(setEditProfileDataChange(false));
  };

  const localCourseUpdate = (course: IOldCourses) => {
    if (course) {
      setUserCourses([...userCourses, course]);
      setValidCoursesList(true);
      dispatch(setEditProfileDataChange(true));
    }
  };

  const localCourseSub = (course: IOldCourses) => {
    if (course) {
      const copyCourses: IOldCourses[] = [...userCourses];

      const index = copyCourses.findIndex((item: IOldCourses) => {
        return item.id === course.id;
      });

      if (index >= 0) {
        copyCourses.splice(index, 1);
      }

      if (checkIsCoursesEqual(copyCourses, userData.courses)) {
        dispatch(setEditProfileDataChange(false));
      }

      setUserCourses([...copyCourses]);
      setValidCoursesList(true);
    }
  };

  const onSubmitLeavePage = () => {
    history.push(pathToThePage);
    dispatch(setEditProfileDataChange(false));
  };

  useEffect(() => {
    if (userData.id !== '' && !inputValues.id) {
      setInputValues(defaultData);
      setUserCourses(oldCourses);
      reset(defaultData);
      dispatch(setEditProfileDataChange(false));
    }
  }, [reset, inputValues, defaultData, userData, oldCourses, dispatch]);

  if (!loginToken) return <Redirect to={'/login'} />;
  if (error || errorM || isCommonError) return <ErrorModal error={error || errorM} />;
  if (loading || loadingM) return <Loader />;

  return (
    <FormWrapper>
      <CommonWrapper>
        <EditProfileWrapper autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>{t('Enter your profile information')}</FormTitle>
          <InputsWrapper>
            {formFields.map((item, index) => {
              return (
                <InputField
                  key={JSON.stringify(item)}
                  name={item.name}
                  value={userData[INPUT_VALUES_EDIT_PROFILE[index] as keyof User] as string}
                  labelText={item.labelText}
                  placeholder={item.placeholder}
                  aria-invalid={
                    (errors[
                      INPUT_VALUES_EDIT_PROFILE[index] as keyof UpdateUserInput
                    ] as FieldError)
                      ? 'true'
                      : 'false'
                  }
                  message={
                    (
                      errors[
                        INPUT_VALUES_EDIT_PROFILE[index] as keyof UpdateUserInput
                      ] as FieldError
                    )?.message
                  }
                  onChange={changeInputValue}
                  register={register(item.register)}
                />
              );
            })}
            <CoursesWrapper>
              <UserCoursesListTitle>{t('Course')}</UserCoursesListTitle>
              {userCourses.map((item: IOldCourses) => {
                return (
                  <UserCourseListItem
                    key={item.id}
                    isUserRegisteredCourse={item.isNew}
                    course={item}
                    onSub={localCourseSub}
                  >
                    {item.name}
                  </UserCourseListItem>
                );
              })}
              {currentCourses.length !== 0 && (
                <CourseField
                  name="courses"
                  placeholder={t('Select course')}
                  register={register}
                  multi
                  onAdd={localCourseUpdate}
                  courses={currentCourses}
                  isValid={isValidCoursesList}
                />
              )}
              {userCourses.length === 0 && currentCourses.length === 0 && (
                <span>No courses available, try again later</span>
              )}
            </CoursesWrapper>
          </InputsWrapper>
          <ButtonWrapper>
            {isUserNew && (
              <Button
                type="button"
                bgc={BG_COLOR}
                color={MAIN1_COLOR}
                mr="20px"
                onClick={history.goBack}
              >
                {t('Cancel')}
              </Button>
            )}
            <Button>{isUserNew ? t('Submit') : t('Save')}</Button>
          </ButtonWrapper>
        </EditProfileWrapper>
        <AdditionalWrapper />
      </CommonWrapper>
      <ModalExpel
        title="Data is unsaved"
        text="Are you sure want to leave page without saving data"
        open={isActiveModalLeavePage}
        onSubmit={onSubmitLeavePage}
        isCrossIconVisible={false}
        onClose={() => dispatch(activeModalLeavePage(false))}
        okText="Yes"
        cancelText="No"
      />
    </FormWrapper>
  );
};
