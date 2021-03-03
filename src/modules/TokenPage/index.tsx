import { AUTH_TOKEN, SET_TOKEN } from 'appConstants';
import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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
      dispatch({ type: SET_TOKEN, payload: id });
    }
    history.push('/');
  }, [id, history, dispatch]);

  return (
    <div>
      <p>{t('Redirecting...')}</p>
    </div>
  );
};
