import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_LANG, LANGUAGES } from 'appConstants';
import { selectCurrLanguage } from 'modules/LoginPage/selectors';
import { setCurrLang } from 'modules/LoginPage/loginPageReducer';
import i18n from 'translation/resources';
import { CommonSelectList } from 'components';

type LangSelectProps = {
  menuToggle?: string;
};

export const LangSelect: FC<LangSelectProps> = ({ menuToggle }) => {
  const [displayLangList, setDisplayLangList] = useState(false);
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
