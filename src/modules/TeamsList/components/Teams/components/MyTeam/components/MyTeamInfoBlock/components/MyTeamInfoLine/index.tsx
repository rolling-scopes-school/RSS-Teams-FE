import React, { FC, MouseEvent, useState } from 'react';
import { InfoLineStyled, CopyClipboardButton } from './styled';
import { TablePopup } from 'components/TablePopup';

type MyTeamInfoLine = {
  value?: string;
  hoverHandler?: () => void;
};

export const MyTeamInfoLine: FC<MyTeamInfoLine> = ({ value }) => {
  const [showPopup, setShowPopup] = useState(false);
  const copyInfo = (value: string) => {
    navigator.clipboard.writeText(value).catch((err) => {
      console.log(err);
    });
  };

  const mouseOverHandler = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLDivElement;
    if (target.scrollWidth !== target.clientWidth) {
      setShowPopup(true);
    }
  };

  const currValue: string = value || '';
  return (
    <InfoLineStyled>
      <div
        className={'info__text'}
        onMouseOver={mouseOverHandler}
        onMouseLeave={() => setShowPopup(false)}
      >
        {currValue}
      </div>
      {showPopup && <TablePopup dataLength={0} popupElements={[currValue]} />}
      <CopyClipboardButton onClick={() => copyInfo(currValue)} />
    </InfoLineStyled>
  );
};
