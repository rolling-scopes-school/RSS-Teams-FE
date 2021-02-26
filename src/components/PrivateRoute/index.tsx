import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';

type Props = {
  isLoggedIn: boolean;
  path: string;
  component: FC<any>;
  exact?: boolean;
  newUserCheck?: undefined | null | string;
};

export const PrivateRoute: FC<Props> = ({
  component: Component,
  isLoggedIn,
  newUserCheck,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLoggedIn && !!newUserCheck) {
          return <Component {...props} />;
        }
        if (isLoggedIn && !newUserCheck) {
          return <Redirect to={'/editProfile'} />;
        }
        if (!isLoggedIn) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
};
