import React, { FC } from 'react';
// import { useSelector } from 'react-redux';
// import { useCoursesQuery } from 'hooks/graphql';
// import { selectUserData } from 'modules/StudentsTable/selectors';
import { Logo } from 'typography';

export const EditProfile: FC = () => {
  // const { loading, error, courses } = useCoursesQuery();
  // // const userData = useSelector(selectUserData);
  return (
    <div>
      <Logo />
      <p>EDIT PROFILE</p>
    </div>
  );
};
