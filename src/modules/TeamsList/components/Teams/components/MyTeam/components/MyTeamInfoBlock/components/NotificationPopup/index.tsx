import React, { FC } from 'react';
import { NotificationPopupStyled } from './styled';

const NotificationPopup: FC = ({ children }) => {
  return <NotificationPopupStyled>{children}</NotificationPopupStyled>;
};

export default NotificationPopup;
