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
import { Loader, PrivateRoute, Header, ErrorModal } from 'components';
import { selectToken } from 'modules/LoginPage/selectors';
import {
  AUTH_TOKEN,
  CURRENT_COURSE,
  SET_CURR_COURSE,
  SET_TOKEN,
  SET_USER_DATA,
} from 'appConstants';
import { useWhoAmIQuery } from 'hooks/graphql';
import { AppStyled } from './styled';

export const App: FC = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector(selectToken);
  const [loading, setLoading] = useState(true);
  const { loadingW, whoAmI, errorW } = useWhoAmIQuery({
    skip: loginToken === null,
  });
  const newUserCheck = !!whoAmI?.courses.length;

  useEffect(() => {
    if (!loginToken) {
      const token = sessionStorage.getItem(AUTH_TOKEN);
      if (token) dispatch({ type: SET_TOKEN, payload: token });
    }

    if (!!whoAmI) {
      dispatch({ type: SET_USER_DATA, payload: whoAmI });
    }
    if (whoAmI?.courses[0]) {
      if (!localStorage.getItem(CURRENT_COURSE)) {
        localStorage.setItem(
          CURRENT_COURSE,
          JSON.stringify(whoAmI?.courses[0])
        );
      }
      const currentCourse = JSON.parse(
        localStorage.getItem(CURRENT_COURSE) as string
      );
      dispatch({ type: SET_CURR_COURSE, payload: currentCourse });
    }

    if (!loadingW) setLoading(false);
  }, [dispatch, loginToken, loadingW, loading, whoAmI]);

  if (loading || loadingW) return <Loader />;
  if (errorW) return <ErrorModal />;

  return (
    <AppStyled>
      <Header />

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
        <Route exact path="/tutorial" component={Loader} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </AppStyled>
  );
};
