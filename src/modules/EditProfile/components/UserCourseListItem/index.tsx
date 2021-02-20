import React, { FC } from 'react';
import { MinusButton, UserCourseListItemStyled } from './styled';
import { Course } from 'types';

import { ReactComponent as CrossSvgIcon } from 'assets/svg/cross.svg';

type TUserCourseListItem = {
  deleteButton: boolean;
  onSub: (c: IOldCourses) => void;
  course: Course;
};

export interface IOldCourses extends Course {
  isNew: boolean;
}

export const UserCourseListItem: FC<TUserCourseListItem> = ({
  children,
  deleteButton,
  onSub,
  course,
}) => {
  return (
    <UserCourseListItemStyled>
      <div>{children}</div>
      {!deleteButton && (
        <MinusButton
          type="button"
          active={false}
          onClick={() => {
            onSub({ ...course, isNew: true });
          }}
        >
          <CrossSvgIcon />
        </MinusButton>
      )}
    </UserCourseListItemStyled>
  );
};
