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

  const onLangChange = (item: { lang: string }) => {
    setDisplayLangList(false);
    localStorage.setItem(CURRENT_LANG, JSON.stringify(item));
    dispatch({ type: SET_CURR_LANG, payload: item });
    const currentLang = item.lang === 'English' ? 'en' : 'ru';
    i18n.changeLanguage(currentLang);
  };

  const langs = LANGUAGES.filter((item) => item.lang !== currLanguage.lang);

  return (
    <StyledCoursesSelectWrapper
      isClicked={displayLangList}
      footer={currLanguage.lang}
      className="LanguageSelect"
    >
      <StyledCoursesSelectHeaderWrapper
        isClicked={displayLangList}
        footer={currLanguage.lang}
      >
        <StyledCoursesSelectInfo
          hover={!!LANGUAGES.length}
          footer={currLanguage.lang}
          onClick={() => setDisplayLangList(!displayLangList)}
        >
          <p>{currLanguage.lang}</p>
          <StyledCoursesSelectArrow footer={currLanguage.lang} />
        </StyledCoursesSelectInfo>
      </StyledCoursesSelectHeaderWrapper>
      <StyledCoursesList footer={currLanguage.lang}>
        {langs.map((item: { lang: string }) => {
          return (
            <li key={item.lang} onClick={() => onLangChange(item)}>
              {item.lang}
            </li>
          );
        })}
      </StyledCoursesList>
    </StyledCoursesSelectWrapper>
  );
};
