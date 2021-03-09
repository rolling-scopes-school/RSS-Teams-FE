import React, { FC } from 'react';
import { StyledPopup, StyledPopupItem } from './styled';

type TablePopupProps = {
  dataLength: number;
  popupElements: string[];
};

export const TablePopup: FC<TablePopupProps> = ({
  popupElements,
  dataLength,
}) => {
  return (
    <StyledPopup dataLength={dataLength}>
      {popupElements?.map((element: string) => (
        <StyledPopupItem key={element}>{element}</StyledPopupItem>
      ))}
    </StyledPopup>
  );
};
