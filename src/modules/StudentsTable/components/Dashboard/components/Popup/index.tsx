import React, { FC } from 'react';
import { StyledPopup, StyledPopupItem } from './styled';

type PopupProps = {
  showPopup: boolean;
  popupElements: string[];
  popupStyles: {
    top: number;
    left: number;
  } | null;
};

export const Popup: FC<PopupProps> = ({
  popupElements,
  popupStyles,
  showPopup,
}) => {
  return (
    <StyledPopup showPopup={showPopup} popupStyles={popupStyles}>
      {popupElements?.map((element: string, index: number) => (
        <StyledPopupItem key={`PopupKey-${index}`}>{element}</StyledPopupItem>
      ))}
    </StyledPopup>
  );
};
