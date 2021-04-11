import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Course } from 'types';
import {
  StyledCoursesSelectWrapper,
  StyledCoursesSelectHeaderWrapper,
  StyledCoursesList,
  StyledCoursesSelectInfo,
  StyledCoursesSelectArrow,
} from './styled';
import { useTranslation } from 'react-i18next';
import { Language } from 'appConstants';

type CommonSelectProps = {
  displayList: boolean;
  setDisplayList: (display: boolean) => void;
  listItems: any;
  onClickHandler: any;
  title?: string;
  currItem: string;
  isLang?: string;
  menuToggle?: string;
};

export const CommonSelectList: FC<CommonSelectProps> = ({
  displayList,
  setDisplayList,
  listItems,
  onClickHandler,
  title,
  currItem,
  isLang,
  menuToggle,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const onClickSelectHandler = () => {
    dispatch(setDisplayList(!displayList));
  };
  return (
    <StyledCoursesSelectWrapper
      isClicked={displayList}
      {...{ isLang, menuToggle }}
      className="CommonSelectList"
    >
      <StyledCoursesSelectHeaderWrapper
        isClicked={displayList}
        {...{ isLang, menuToggle }}
      >
        {title && <p>{t(title)}</p>}
        <StyledCoursesSelectInfo
          hover={!!listItems.length}
          onClick={onClickSelectHandler}
          {...{ isLang, menuToggle }}
        >
          <p>{currItem}</p>
          {!!listItems.length && <StyledCoursesSelectArrow />}
        </StyledCoursesSelectInfo>
      </StyledCoursesSelectHeaderWrapper>{' '}
      {!!listItems.length && (
        <StyledCoursesList {...{ isLang, menuToggle }}>
          {listItems.map((item: Course | string) => {
            return (
              <li
                key={typeof item === 'string' ? item : JSON.stringify(item)}
                onClick={() => onClickHandler(item)}
              >
                {typeof item === 'string' ? Language[item] : item.name}
              </li>
            );
          })}
        </StyledCoursesList>
      )}
    </StyledCoursesSelectWrapper>
  );
};
