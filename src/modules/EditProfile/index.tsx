import React, { FC } from 'react';
import { useSelector } from 'react-redux';
// import { useCoursesQuery } from 'hooks/graphql';
// import { selectUserData } from 'modules/StudentsTable/selectors';
import { Logo } from 'typography';
import { selectToken } from 'modules/LoginPage/selectors';
import { Redirect } from 'react-router-dom';
// import { useWhoAmIQuery } from 'hooks/graphql';

export const EditProfile: FC = () => {
  const loginToken = useSelector(selectToken);
  // const { loading, error, courses } = useCoursesQuery();
  // const userData = useSelector(selectUserData);
  if (!loginToken) return <Redirect to={'/login'} />;
  return (
    <div>
      <Logo />
      <p>EDIT PROFILE</p>
    </div>
  );
};
