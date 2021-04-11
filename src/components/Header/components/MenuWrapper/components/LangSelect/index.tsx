import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_LANG, LANGUAGES } from 'appConstants';
import { selectCurrLanguage } from 'modules/LoginPage/selectors';
import { setCurrLang } from 'modules/LoginPage/loginPageReducer';
import i18n from 'translation/resources';
import { CommonSelectList } from 'components';

type LangSelectProps = {
  displayLangList: boolean;
  setDisplayLangList: (display: boolean) => void;
  menuToggle?: string;
};

export const LangSelect: FC<LangSelectProps> = ({
  displayLangList,
  setDisplayLangList,
  menuToggle,
}) => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectCurrLanguage);

  const onLangChange = (item: string) => {
    dispatch(setDisplayLangList(false));
    localStorage.setItem(CURRENT_LANG, item);
    dispatch(setCurrLang(item));
    i18n.changeLanguage(item);
  };

  const languages: string[] = LANGUAGES.filter(
    (lang) => lang !== currentLanguage
  );

  return (
    <CommonSelectList
      listItems={languages}
      onClickHandler={onLangChange}
      currItem={currentLanguage.toUpperCase()}
      setDisplayList={setDisplayLangList}
      displayList={displayLangList}
      isLang="Lang"
      {...{ menuToggle }}
    />
  );
};
