import React, { FC } from 'react';
import { InfoLineStyled, CopyClipboardButton } from './styled';

type MyTeamInfoLine = {
  value: string | undefined;
};

export const MyTeamInfoLine: FC<MyTeamInfoLine> = ({ value }) => {
  const copyInfo = (value: string) => {
    navigator.clipboard.writeText(value).catch((err) => {
      console.log(err);
    });
  };
  const curValue = value ? value : '';
  return (
    <InfoLineStyled>
      <div>{curValue}</div>
      <CopyClipboardButton onClick={() => copyInfo(curValue)} />
    </InfoLineStyled>
  );
};
