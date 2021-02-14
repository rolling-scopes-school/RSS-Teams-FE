import React, { FC } from 'react';
import { InfoLineStyled, CopyClipboardButton } from './styled';

type MyTeamInfoLine = {
  value?: string;
};

export const MyTeamInfoLine: FC<MyTeamInfoLine> = ({ value }) => {
  const copyInfo = (value: string) => {
    navigator.clipboard.writeText(value).catch((err) => {
      console.log(err);
    });
  };
  const currValue = value || '';
  return (
    <InfoLineStyled>
      <div>{currValue}</div>
      <CopyClipboardButton onClick={() => copyInfo(currValue)} />
    </InfoLineStyled>
  );
};
