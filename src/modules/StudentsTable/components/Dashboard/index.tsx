import { FC, useState } from 'react';
import { Popup, TableBody, TableHead } from './components';
import { mockData } from './mockData';
import { StyledDashboard } from './styled';

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

  return (
    <>
      <StyledDashboard>
        <TableHead tableHeaders={tableHeaders} />
        <TableBody
          users={mockData.results}
          setPopupElements={setPopupElements}
          setShowPopup={setShowPopup}
          setPopupStyles={setPopupStyles}
        />
      </StyledDashboard>
      <Popup
        popupElements={popupElements}
        showPopup={showPopup}
        popupStyles={popupStyles}
      />
    </>
  );
};
