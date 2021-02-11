import { FC, useState } from 'react';
import { TableBody } from './components/TableBody/index';
import { TableHead } from './components/TableHead/index';
import { mockData } from './mockData';
import { Popup } from './components/Popup/index';
import './styles.css';

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
  const [showPopup, setShow] = useState(false);
  const [stylesPopup, setStyles] = useState({});
  return (
    <>
      <table className="Dashboard">
        <TableHead tableHeaders={tableHeaders} />
        <TableBody
          users={mockData.results.sort(
            (firstItem: any, secondItem: any): any =>
              firstItem.score - secondItem.score
          )}
          popupElements={popupElements}
          setPopupElements={setPopupElements}
          setShow={setShow}
          stylesPopup={stylesPopup}
          setStyles={setStyles}
        />
      </table>
      <Popup elements={popupElements} show={showPopup} stylesPopup={stylesPopup} />
    </>
  );
};
