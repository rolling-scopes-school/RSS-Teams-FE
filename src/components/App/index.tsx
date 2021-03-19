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
import { Loader, PrivateRoute, Header, Footer, ErrorModal } from 'components';
import { selectToken } from 'modules/LoginPage/selectors';
import {
  AUTH_TOKEN,
  CURRENT_COURSE,
  CURRENT_LANG,
  DEFAULT_LANGUAGE,
} from 'appConstants';
import { useWhoAmIQuery } from 'hooks/graphql';
import { AppStyled } from './styled';
import {
  setCurrCourse,
  setCurrLang,
  setToken,
} from 'modules/LoginPage/loginPageReducer';
import { setUserData } from 'modules/StudentsTable/studentsTableReducer';

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
      if (token) dispatch(setToken(token));
    }

    if (!!whoAmI) {
      dispatch(setUserData(whoAmI));
    }
    if (whoAmI?.courses[0]) {
      if (!localStorage.getItem(CURRENT_COURSE)) {
        localStorage.setItem(
          CURRENT_COURSE,
          JSON.stringify(whoAmI?.courses[0])
        );
      }
      if (!localStorage.getItem(CURRENT_LANG)) {
        localStorage.setItem(CURRENT_LANG, DEFAULT_LANGUAGE);
      }
      const currentCourse = JSON.parse(
        localStorage.getItem(CURRENT_COURSE) as string
      );
      const currentLanguage = localStorage.getItem(CURRENT_LANG);

      dispatch(setCurrCourse(currentCourse));
      dispatch(setCurrLang(currentLanguage));
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

      {!!loginToken && <Footer />}
    </AppStyled>
  );
};
