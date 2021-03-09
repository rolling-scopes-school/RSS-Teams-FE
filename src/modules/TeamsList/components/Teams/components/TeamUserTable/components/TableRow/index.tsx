import React, { FC } from 'react';
import { ACTIVE_MODAL_EXPEL, SET_TEAM_MEMBER_EXPEL_ID } from 'appConstants';
import { User } from 'types';
import { TableCell } from './components';
import { ExpelButton } from './components';
import { useDispatch } from 'react-redux';

type TableRowProps = {
  member: User;
  count: number;
  isMyTeam?: boolean;
  userId?: string;
  secondTable?: boolean;
};

export const TableRow: FC<TableRowProps> = ({
  member,
  count,
  isMyTeam,
  userId,
  secondTable = false,
}) => {
  const {
    firstName,
    lastName,
    score,
    telegram,
    discord,
    github,
    country,
    city,
    id,
  } = member;
  const dispatch = useDispatch();
  return (
    <tr className={secondTable ? 'SecondTable' : 'FirstTable'}>
      <TableCell value={count.toString(10)} />
      <TableCell value={`${firstName} ${lastName}`} />
      <TableCell value={score} />
      <TableCell value={telegram} isSocialLink={true} />
      <TableCell value={discord} isSocialLink={true} />
      <TableCell value={github} isSocialLink={true} />
      <TableCell value={`${city}, ${country}`} />
      {isMyTeam && (
        <TableCell
          value={
            id !== userId && (
              <ExpelButton
                onClickHandler={() => {
                  dispatch({ type: ACTIVE_MODAL_EXPEL, payload: true });
                  dispatch({ type: SET_TEAM_MEMBER_EXPEL_ID, payload: id });
                }}
              />
            )
          }
        />
      )}
    </tr>
  );
};
