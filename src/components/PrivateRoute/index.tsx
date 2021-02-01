import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';

type Props = {
  isLoggedIn: boolean;
  path: string;
  component: FC<any>;
  exact?: boolean;
};

export const PrivateRoute: FC<Props> = ({
  component: Component,
  isLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};
