import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LANGUAGES } from 'appConstants';
import { selectCurrLanguage } from 'modules/LoginPage/selectors';
import i18n from 'translation/resources';
import { CommonSelectList } from 'components';
import { setLanguage } from 'modules/LoginPage/loginPageMiddleware';

type LangSelectProps = {
  menuToggle?: boolean;
  customStyle?: boolean;
};

export const LangSelect: FC<LangSelectProps> = ({ menuToggle, customStyle }) => {
  const [displayLangList, setDisplayLangList] = useState(false);
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectCurrLanguage);

  const onLangChange = (item: string) => {
    setDisplayLangList(false);
    dispatch(setLanguage(item));
    i18n.changeLanguage(item);
  };

  const languages: string[] = LANGUAGES.filter((lang) => lang !== currentLanguage);

  return (
    <CommonSelectList
      listItems={languages}
      onClickHandler={onLangChange}
      currItem={currentLanguage.toUpperCase()}
      setDisplayList={setDisplayLangList}
      displayList={displayLangList}
      isLang
      {...{ menuToggle, customStyle }}
    />
  );
};
