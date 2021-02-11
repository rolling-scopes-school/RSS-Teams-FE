import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectToken } from './selectors';

export const LoginPage: FC = () => {
  const loginToken = useSelector(selectToken);

  if (loginToken) return <Redirect to="/" />;

  return (
    <div>
      <p>This is login page!</p>
      <a href="https://rss-teams-dev.herokuapp.com/auth/github/">
        Link to blink
      </a>
    </div>
  );
};
