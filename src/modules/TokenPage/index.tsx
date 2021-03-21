import React, { FC, useEffect } from 'react';
import { AUTH_TOKEN } from 'appConstants';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { setToken } from 'modules/LoginPage/loginPageReducer';

type ParamsType = {
  id: string;
};

export const TokenPage: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams<ParamsType>();
  const history = useHistory();
  const { t } = useTranslation();

  useEffect(() => {
    const loginToken = sessionStorage.getItem(AUTH_TOKEN);
    if (!loginToken) {
      sessionStorage.setItem(AUTH_TOKEN, id);
      dispatch(setToken(id));
    }
    history.push('/');
  }, [id, history, dispatch]);

  return (
    <div>
      <p>{t('Redirecting...')}</p>
    </div>
  );
};
