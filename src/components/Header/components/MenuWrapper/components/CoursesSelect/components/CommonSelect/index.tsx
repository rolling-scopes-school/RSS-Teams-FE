import React, { FC } from 'react';
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
};

export const CommonSelect: FC<CommonSelectProps> = ({
  displayList,
  setDisplayList,
  listItems,
  onClickHandler,
  title,
  currItem,
  isLang,
}) => {
  const { t } = useTranslation();
  return (
    <StyledCoursesSelectWrapper isClicked={displayList} isLang={isLang}>
      <StyledCoursesSelectHeaderWrapper isClicked={displayList}>
        {title && <p>{t(title)}</p>}
        <StyledCoursesSelectInfo
          hover={!!listItems.length}
          onClick={() => setDisplayList(!displayList)}
        >
          <p>{currItem}</p>
          {!!listItems.length && <StyledCoursesSelectArrow />}
        </StyledCoursesSelectInfo>
      </StyledCoursesSelectHeaderWrapper>{' '}
      {!!listItems.length && (
        <StyledCoursesList>
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
