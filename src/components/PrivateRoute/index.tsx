import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';

type Props = {
  isLoggedIn: boolean;
  path: string;
  component: FC<any>;
  exact?: boolean;
  newUserCheck?: boolean;
};

export const PrivateRoute: FC<Props> = ({
  component: Component,
  isLoggedIn,
  newUserCheck,
  path,
  exact,
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => {
        if (isLoggedIn && newUserCheck) {
          return <Component {...props} />;
        }
        if (isLoggedIn && !newUserCheck) {
          return <Redirect to={'/edit-profile'} />;
        }
        if (!isLoggedIn) {
          return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }
      }}
    />
  );
};
