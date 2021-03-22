import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_LANG, Language, LANGUAGES } from 'appConstants';
import {
  StyledCoursesList,
  StyledCoursesSelectArrow,
  StyledCoursesSelectHeaderWrapper,
  StyledCoursesSelectInfo,
  StyledCoursesSelectWrapper,
} from 'components/Header/components/MenuWrapper/components/CoursesSelect/styled';
import { selectCurrLanguage } from 'modules/LoginPage/selectors';
import i18n from 'translation/resources';
import { setCurrLang } from 'modules/LoginPage/loginPageReducer';

type LangSelectProps = {
  displayLangList: boolean;
  setDisplayLangList: (display: boolean) => void;
};

export const LangSelect: FC<LangSelectProps> = ({
  displayLangList,
  setDisplayLangList,
}) => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectCurrLanguage);

  const onLangChange = (item: string) => {
    setDisplayLangList(false);
    localStorage.setItem(CURRENT_LANG, item);
    dispatch(setCurrLang(item));
    i18n.changeLanguage(item);
  };

  const languages: string[] = LANGUAGES.filter(
    (lang) => lang !== currentLanguage
  );

  return (
    <StyledCoursesSelectWrapper
      isClicked={displayLangList}
      footer={currentLanguage}
      className="LanguageSelect"
    >
      <StyledCoursesSelectHeaderWrapper
        isClicked={displayLangList}
        footer={currentLanguage}
      >
        <StyledCoursesSelectInfo
          hover={!!LANGUAGES.length}
          footer={currentLanguage}
          onClick={() => setDisplayLangList(!displayLangList)}
        >
          <p>{Language[currentLanguage]}</p>
          <StyledCoursesSelectArrow footer={currentLanguage} />
        </StyledCoursesSelectInfo>
      </StyledCoursesSelectHeaderWrapper>
      <StyledCoursesList footer={currentLanguage}>
        {languages.map((lang: string) => {
          return (
            <li key={lang} onClick={() => onLangChange(lang)}>
              {Language[lang]}
            </li>
          );
        })}
      </StyledCoursesList>
    </StyledCoursesSelectWrapper>
  );
};
