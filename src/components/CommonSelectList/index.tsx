import React, { FC, useEffect, useRef } from 'react';
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
  isLang?: boolean;
  menuToggle?: boolean;
  customStyle?: boolean;
  showOptionsSelect?: boolean;
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
  customStyle,
  showOptionsSelect,
}) => {
  const selectRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const closeEventHandler = (ev: MouseEvent) => {
      if ((selectRef.current as unknown as HTMLDivElement)?.contains(ev.target as HTMLDivElement)) {
        setDisplayList(!displayList);
        return;
      }
      setDisplayList(false);
    };

    document && document.addEventListener('click', closeEventHandler);

    return (): void => {
      document && document.removeEventListener('click', closeEventHandler);
    };
  }, [displayList, setDisplayList]);

  const isListItemsExists = !!listItems.length;

  return (
    <StyledCoursesSelectWrapper
      isClicked={displayList}
      {...{ isLang, menuToggle, customStyle, showOptionsSelect }}
      className={`CommonSelectList${!isLang && ' eighthStep'}`}
    >
      <StyledCoursesSelectHeaderWrapper
        isClicked={displayList}
        {...{ isLang, menuToggle, customStyle }}
      >
        {title && <p>{t(title)}</p>}
        <StyledCoursesSelectInfo
          hover={isListItemsExists}
          ref={selectRef}
          {...{ isLang, menuToggle, customStyle }}
        >
          <p>{t(currItem)}</p>
          {isListItemsExists && <StyledCoursesSelectArrow />}
        </StyledCoursesSelectInfo>
      </StyledCoursesSelectHeaderWrapper>{' '}
      {isListItemsExists && (
        <StyledCoursesList {...{ isLang, menuToggle, customStyle }}>
          {listItems.map((item: Course | string) => {
            return (
              <li
                key={typeof item === 'string' ? item : item.id}
                onClick={() => onClickHandler(item)}
              >
                {typeof item === 'string' ? Language[item] : t(item.name)}
              </li>
            );
          })}
        </StyledCoursesList>
      )}
    </StyledCoursesSelectWrapper>
  );
};
