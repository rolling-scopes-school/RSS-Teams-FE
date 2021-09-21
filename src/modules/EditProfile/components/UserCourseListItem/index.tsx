import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { MinusButton, UserCourseListItemStyled, InfoBox, UserCourseInput } from './styled';
import { Course, Team } from 'types';
import { ReactComponent as CrossSvgIcon } from 'assets/svg/cross.svg';
import { selectUserData } from 'modules/StudentsTable/selectors';
import { useRemoveUserFromCourseMutation } from 'hooks/graphql';
import { roles, scoreFormField } from 'modules/EditProfile/formFields';
import { SelectCourse } from 'components/CourseField/styled';
import { Select, SelectInner } from 'typography';

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
  const [score, setScore] = useState(0); //course.score
  const [role, setRole] = useState('Mentor'); // course.role

  const { removeUserFromCourse } = useRemoveUserFromCourseMutation({
    data: {
      courseId: course.id,
      userId: userData.id,
      teamId: userData.teams.find((team: Team) => team.courseId === course.id)?.id ?? null,
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

  const rolesOptions = roles.map((role: string) => {
    return (
      <option key={role} value={role}>
        {role}
      </option>
    );
  });

  const changeRole = (role: string) => {
    setRole(role);
    if (role === 'Mentor') {
      setScore(0);
    }
  };
  return (
    <UserCourseListItemStyled>
      <InfoBox>{children}</InfoBox>
      {/* course role */}
      <SelectCourse>
        <Select>
          <SelectInner value={role} onChange={(e) => changeRole(e.target.value)} name="roles">
            {rolesOptions}
          </SelectInner>
        </Select>
      </SelectCourse>
      {/* course score */}
      <UserCourseInput
        autoComplete="off"
        disabled={role === 'Mentor'}
        uncommonWidth="auto"
        mr="20px"
        name={scoreFormField.name}
        value={score}
        onChange={(e) => setScore(+e.target.value)}
      />
      <MinusButton type="button" active={false} onClick={onClickHandler}>
        <CrossSvgIcon />
      </MinusButton>
    </UserCourseListItemStyled>
  );
};
