import { AUTH_TOKEN } from 'appConstants';
import React, { FC, useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Logo } from 'typography';

type ParamsType = {
  id: string;
};

export const TokenPage: FC = () => {
  const { id } = useParams<ParamsType>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loginToken = sessionStorage.getItem(AUTH_TOKEN);
    if (!loginToken) {
      sessionStorage.setItem(AUTH_TOKEN, id);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div>
        <Logo />
        <p>Redirecting...</p>
      </div>
    );
  }
  return <Redirect to="/" />;
};
