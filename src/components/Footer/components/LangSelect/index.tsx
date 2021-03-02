import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_LANG, LANGUAGES, SET_CURR_LANG } from 'appConstants';
import {
  StyledCoursesList,
  StyledCoursesSelectArrow,
  StyledCoursesSelectHeaderWrapper,
  StyledCoursesSelectInfo,
  StyledCoursesSelectWrapper,
} from 'components/Header/components/MenuWrapper/components/CoursesSelect/styled';
import { selectCurrLanguage } from 'modules/LoginPage/selectors';

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

  const onCourseChange = (lang: string) => {
    setDisplayLangList(false);
    localStorage.setItem(CURRENT_LANG, JSON.stringify(lang));
    dispatch({ type: SET_CURR_LANG, payload: lang });
  };

  const langs = LANGUAGES.filter((item) => item !== currLanguage);

  return (
    <StyledCoursesSelectWrapper
      isClicked={displayLangList}
      footer={currLanguage}
    >
      <StyledCoursesSelectHeaderWrapper
        isClicked={displayLangList}
        footer={currLanguage}
      >
        <StyledCoursesSelectInfo
          hover={!!LANGUAGES.length}
          footer={currLanguage}
          onClick={() => setDisplayLangList(!displayLangList)}
        >
          <p>{currLanguage}</p>
          <StyledCoursesSelectArrow footer={currLanguage} />
        </StyledCoursesSelectInfo>
      </StyledCoursesSelectHeaderWrapper>
      <StyledCoursesList footer={currLanguage}>
        {langs.map((lang: string) => {
          return (
            <li key={lang} onClick={() => onCourseChange(lang)}>
              {lang}
            </li>
          );
        })}
      </StyledCoursesList>
    </StyledCoursesSelectWrapper>
  );
};
