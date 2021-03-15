import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { MinusButton, UserCourseListItemStyled } from './styled';
import { Course, Team } from 'types';
import { ReactComponent as CrossSvgIcon } from 'assets/svg/cross.svg';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { useRemoveUserFromCourseMutation } from 'hooks/graphql';

type TUserCourseListItem = {
  isUserRegisteredCourse: boolean;
  onSub: (c: IOldCourses) => void;
  course: Course;
};

export interface IOldCourses extends Course {
  isNew: boolean;
}

export const UserCourseListItem: FC<TUserCourseListItem> = ({
  children,
  isUserRegisteredCourse,
  onSub,
  course,
}) => {
  const userData = useSelector(selectUserData);

  const { removeUserFromCourse } = useRemoveUserFromCourseMutation({
    data: {
      courseId: course.id,
      userId: userData.id,
      teamId:
        userData.teams.find((team: Team) => team.courseId === course.id)?.id ??
        null,
      page: 0,
    },
  });
  const onClickHandler = isUserRegisteredCourse
    ? () => {
        onSub({ ...course, isNew: false });
        removeUserFromCourse();
      }
    : () => {
        onSub({ ...course, isNew: true });
      };

  return (
    <UserCourseListItemStyled>
      <div>{children}</div>
      <MinusButton type="button" active={false} onClick={onClickHandler}>
        <CrossSvgIcon />
      </MinusButton>
    </UserCourseListItemStyled>
  );
};
