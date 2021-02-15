import React, { FC, useState } from 'react';
import { Popup, TableBody, TableHead } from './components';
import { StyledTable } from './styled';
import { User } from 'types';

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

type DashboardProps = {
  users: User[];
  page: number;
};

export const Dashboard: FC<DashboardProps> = ({ users, page }) => {
  const [popupElements, setPopupElements] = useState<string[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupStyles, setPopupStyles] = useState<{
    top: number;
    left: number;
  } | null>(null);

  return (
    <>
      <StyledTable>
        <TableHead tableHeaders={tableHeaders} />
        <TableBody
          users={users}
          setPopupElements={setPopupElements}
          setShowPopup={setShowPopup}
          setPopupStyles={setPopupStyles}
          page={page}
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
