import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_LANG, Langs, SET_CURR_LANG } from 'appConstants';
import {
  StyledCoursesList,
  StyledCoursesSelectArrow,
  StyledCoursesSelectHeaderWrapper,
  StyledCoursesSelectInfo,
  StyledCoursesSelectWrapper,
} from 'components/Header/components/MenuWrapper/components/CoursesSelect/styled';
import { selectCurrLanguage } from 'modules/LoginPage/selectors';
import i18n from 'translation/resources';

type LangSelectProps = {
  displayLangList: boolean;
  setDisplayLangList: (display: boolean) => void;
};

export const LangSelect: FC<LangSelectProps> = ({
  displayLangList,
  setDisplayLangList,
}) => {
  const dispatch = useDispatch();
  const currLanguage = useSelector(selectCurrLanguage);

  const onLangChange = (item: string) => {
    setDisplayLangList(false);
    localStorage.setItem(CURRENT_LANG, item);
    dispatch({ type: SET_CURR_LANG, payload: item });
    i18n.changeLanguage(item);
  };

  const currentLangOption = (Object.entries(Langs).find(
    (item) => item[1] === currLanguage
  ) as string[])[0];
  const langs = Object.entries(Langs).filter(
    (item) => item[0] !== currentLangOption
  );

  return (
    <StyledCoursesSelectWrapper
      isClicked={displayLangList}
      footer={currLanguage}
      className="LanguageSelect"
    >
      <StyledCoursesSelectHeaderWrapper
        isClicked={displayLangList}
        footer={currLanguage}
      >
        <StyledCoursesSelectInfo
          hover={!!langs.length}
          footer={currLanguage}
          onClick={() => setDisplayLangList(!displayLangList)}
        >
          <p>{currentLangOption}</p>
          <StyledCoursesSelectArrow footer={currLanguage} />
        </StyledCoursesSelectInfo>
      </StyledCoursesSelectHeaderWrapper>
      <StyledCoursesList footer={currLanguage}>
        {langs.map((item: string[]) => {
          return (
            <li key={item[0]} onClick={() => onLangChange(item[1])}>
              {item[0]}
            </li>
          );
        })}
      </StyledCoursesList>
    </StyledCoursesSelectWrapper>
  );
};
