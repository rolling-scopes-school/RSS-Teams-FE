import React, { FC } from 'react';
import { MinusButton, UserCourseListItemStyled } from './styled';
import { Course } from 'types';
import { IOldCourses } from '../../index';

type TUserCourseListItem = {
  deleteButton: boolean;
  onSub: (c: IOldCourses) => void;
  course: Course;
};

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
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8L0.999838 8"
              stroke="#7E96C2"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </MinusButton>
      )}
    </UserCourseListItemStyled>
  );
};
