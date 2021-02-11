import { FC, MouseEvent, useState } from 'react';
import './styles.css';

type TableBodyProps = {
  popupElements: string[];
  setPopupElements: any;
  setShow: (show: boolean) => void;
  stylesPopup: stylesPopup;
  setStyles: (stylesPopup: stylesPopup) => void;
  users: any[];
};

type stylesPopup =
  | {
      top: number;
      left: number;
    }
  | Record<string, unknown>;

export const TableBody: FC<TableBodyProps> = (props) => {
  const [styles, setStyles] = useState({});
  const teamNames: string[][] = props.users.map((user: any) => {
    user.teamName = user.teams.find((team: any) => team.id === user.teamIds[0])
      ? user.teams.find((team: any) => team.id === user.teamIds[0]).id
      : 'No team yet.';
    return user.teamName;
  });
  const usersData: string[][] = props.users.map((user: any, index: number) => {
    return [
      index + 1,
      `${user.firstName} ${user.lastName}`,
      user.score,
      teamNames[index],
      user.telegram,
      user.discord,
      user.github,
      `${user.country},
      ${user.city}`,
      user.courses.map((course: any) => course.name).join(', '),
    ];
  });

  const mouseOverHandler = (event: MouseEvent<HTMLTableCellElement>) => {
    const target: any = event.target;
    if (target.scrollWidth !== target.clientWidth) {
      const style = {
        top: target.getBoundingClientRect().bottom,
        left: target.getBoundingClientRect().left - 5,
      };
      props.setShow(true);
      props.setPopupElements(target.textContent.split(','));
      props.setStyles(style);
      setStyles({ cursor: 'pointer' });
    }
  };

  const mouseLeaveHandler = (event: MouseEvent<HTMLTableCellElement>) => {
    const target: any = event.target;
    if (target.scrollWidth !== target.clientWidth) {
      props.setShow(false);
      props.setPopupElements([]);
      props.setStyles({});
      setStyles({ cursor: 'unset' });
    }
  };

  return (
    <tbody className="TableBody">
      {usersData.map((user: any, index: number) => (
        <tr className="TableRow" key={index}>
          {user.map((item: 'string', index: number) => (
            <td
              className={`TableItem TableItem--${index}`}
              key={index}
              onMouseOver={(event) => mouseOverHandler(event)}
              onMouseLeave={(event) => mouseLeaveHandler(event)}
              style={styles}
            >
              {item}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
