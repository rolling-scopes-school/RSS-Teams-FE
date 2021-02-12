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
import { useWhoAmIQuery } from 'hooks/graphql';

export const App: FC = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector(selectToken);
  const [loading, setLoading] = useState(true);
  const { loadingW, whoAmI } = useWhoAmIQuery({
    skip: loginToken === null,
  });
  // const newUserCheck = whoAmI?.telegram;
  const newUserCheck = 'vasya333'; // switch with variable above to disable login/registration flow

  useEffect(() => {
    if (!loginToken) {
      const token = sessionStorage.getItem(AUTH_TOKEN);
      if (token) dispatch({ type: SET_TOKEN, payload: token });
    }
    if (!loadingW && loading) setLoading(false);
  }, [dispatch, loginToken, loadingW, loading]);

  if (loading || loadingW) return <Loader />;

  return (
    <>
      <Header isLogin={!!loginToken} />

      <Switch>
        <PrivateRoute
          path="/"
          exact
          isLoggedIn={!!loginToken}
          newUserCheck={newUserCheck}
          component={TeamsList}
        />
        <PrivateRoute
          exact
          path="/studentsTable"
          isLoggedIn={!!loginToken}
          newUserCheck={newUserCheck}
          component={StudentsTable}
        />
        <Route exact path="/token/:id" component={TokenPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/editProfile" component={EditProfile} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};
