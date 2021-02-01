import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { TeamsList } from 'modules/TeamsList';
import { LoginPage } from 'modules/LoginPage';
import { StudentsTable } from 'modules/StudentsTable';
import { selectToken } from 'modules/LoginPage/selectors';
import { PrivateRoute, Loader } from 'components';
import { AUTH_TOKEN, SET_TOKEN } from 'appConstants';

export const App: FC = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector(selectToken);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loginToken = localStorage.getItem(AUTH_TOKEN);
    dispatch({ type: SET_TOKEN, payload: loginToken });
    setLoading(false);
  }, [dispatch]);
  if (loading) return <Loader />;
  return (
    <Switch>
      <PrivateRoute
        path="/"
        exact
        isLoggedIn={!!loginToken}
        component={StudentsTable}
      />
      <PrivateRoute
        exact
        path="/teamsList"
        isLoggedIn={!!loginToken}
        component={TeamsList}
      />
      <PrivateRoute
        exact
        path="/editProfile"
        isLoggedIn={!!loginToken}
        component={StudentsTable}
      />
      <Route exact path="/login" component={LoginPage} />
    </Switch>
  );
};
