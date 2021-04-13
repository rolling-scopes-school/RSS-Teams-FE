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
  const selectRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const closeEventHandler = (ev: MouseEvent) => {
      if (
        ((selectRef.current as unknown) as HTMLDivElement).contains(
          ev.target as HTMLDivElement
        )
      ) {
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
          ref={selectRef}
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
