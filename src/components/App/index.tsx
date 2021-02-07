import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import {
  TeamsList,
  LoginPage,
  StudentsTable,
  TokenPage,
  NotFoundPage,
  EditProfile,
} from 'modules';
import { Loader, PrivateRoute, Header } from 'components';
import { selectToken } from 'modules/LoginPage/selectors';
import { AUTH_TOKEN, SET_TOKEN } from 'appConstants';
import { GlobalStyle } from 'typography';

export const App: FC = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector(selectToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem(AUTH_TOKEN);
    dispatch({ type: SET_TOKEN, payload: token });
    setLoading(false);
  }, [dispatch]);

  if (loading) return <Loader />;

  return (
    <>
      <GlobalStyle />
      <Header />
      <Switch>
        <PrivateRoute
          path="/"
          exact
          isLoggedIn={!!loginToken}
          component={TeamsList}
        />
        <PrivateRoute
          exact
          path="/studentsTable"
          isLoggedIn={!!loginToken}
          component={StudentsTable}
        />
        <PrivateRoute
          exact
          path="/editProfile"
          isLoggedIn={!!loginToken}
          component={EditProfile}
        />
        <Route exact path="/token/:id" component={TokenPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};
