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
  const [popupElements, setPopupElements] = useState<string[] | undefined>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupStyles, setPopupStyles] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const currCourse = useSelector(selectCurrCourse);
  const { users } = useUsersQuery({ reactCourseId: currCourse.id });

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
