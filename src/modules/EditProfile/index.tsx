import React, { FC } from 'react';
// import { useSelector } from 'react-redux';
// import { useCoursesQuery } from 'hooks/graphql';
// import { selectUserData } from 'modules/StudentsTable/selectors';
import { Logo } from 'typography';
import {
  TextRegular,
  TextMedium,
  TextSemiBold,
  TextBold,
  PageTitle,
  Button,
  Label,
  Input,
} from 'typography';

export const EditProfile: FC = () => {
  // const { loading, error, courses } = useCoursesQuery();
  // // const userData = useSelector(selectUserData);
  return (
    <div>
      <Logo />
      <PageTitle>EDIT PROFILE</PageTitle>
      <Label>label</Label>
      <Input />
      <Button>button</Button>
    </div>
  );
};
