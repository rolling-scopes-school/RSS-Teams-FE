import React, { FC, useState } from 'react';
import { Popup, TableBody, TableHead } from './components';
import { StyledTable } from './styled';
import { useUsersQuery } from 'hooks/graphql';
import { useSelector } from 'react-redux';
import { selectCurrCourse } from 'modules/LoginPage/selectors';

const tableHeaders: string[] = [
  '№',
  'First / Last Name',
  'Score',
  'Team Number',
  'Telegram',
  'Discord',
  'Github',
  'Location',
  'Courses',
];

export const Dashboard: FC = () => {
  const [popupElements, setPopupElements] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupStyles, setPopupStyles] = useState(null);
  const currCourse = useSelector(selectCurrCourse);

  const { users } = useUsersQuery({ reactCourseId: currCourse.id });
  console.log('🚀 ~ file: index.tsx ~ line 28 ~ users', users);

  return (
    <>
      <StyledTable>
        <TableHead tableHeaders={tableHeaders} />
        <TableBody
          users={users.results}
          setPopupElements={setPopupElements}
          setShowPopup={setShowPopup}
          setPopupStyles={setPopupStyles}
        />
      </StyledTable>
      <Popup
        popupElements={popupElements}
        showPopup={showPopup}
        popupStyles={popupStyles}
      />
    </>
  );
};
