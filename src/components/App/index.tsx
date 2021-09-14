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
  TutorialPage,
  AdminPage,
} from 'modules';
import { Loader, PrivateRoute, Header, Footer, ErrorModal, TourGuide } from 'components';
import { selectToken } from 'modules/LoginPage/selectors';
import { AUTH_TOKEN, CURRENT_COURSE, CURRENT_LANG, DEFAULT_LANGUAGE } from 'appConstants';
import { useWhoAmIQuery } from 'hooks/graphql';
import { AppStyled } from './styled';
import { setToken } from 'modules/LoginPage/loginPageReducer';
import { setUserData } from 'modules/StudentsTable/studentsTableReducer';
import { setCourse, setLanguage } from 'modules/LoginPage/loginPageMiddleware';

export const App: FC = () => {
  const dispatch = useDispatch();
  const loginToken = useSelector(selectToken);
  const [loading, setLoading] = useState(true);
  const { loadingW, whoAmI, errorW } = useWhoAmIQuery({
    skip: loginToken === null,
  });
  const newUserCheck = !!whoAmI?.courses.length;
  const isUserAdmin = !!whoAmI?.isAdmin;

  useEffect(() => {
    if (!loginToken) {
      const token = sessionStorage.getItem(AUTH_TOKEN);
      if (token) dispatch(setToken(token));
    }

    if (!!whoAmI) {
      dispatch(setUserData(whoAmI));
    }
    if (whoAmI?.courses[0]) {
      dispatch(setLanguage(localStorage.getItem(CURRENT_LANG) ?? DEFAULT_LANGUAGE));
      dispatch(
        setCourse(JSON.parse(localStorage.getItem(CURRENT_COURSE) as string) ?? whoAmI?.courses[0])
      );
    }

    if (!loadingW) setLoading(false);
  }, [dispatch, loginToken, loadingW, loading, whoAmI]);

  if (errorW) return <ErrorModal error={errorW} />;
  if (loading || loadingW) return <Loader />;

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
        <PrivateRoute
          exact
          path="/admin"
          isLoggedIn={!!loginToken && isUserAdmin}
          newUserCheck={isUserAdmin}
          component={AdminPage}
        />
        <Route exact path="/token/:id" component={TokenPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/editProfile" component={EditProfile} />
        <Route exact path="/tutorial" component={TutorialPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>

      <TourGuide />

      {!!loginToken && <Footer />}
    </AppStyled>
  );
};
