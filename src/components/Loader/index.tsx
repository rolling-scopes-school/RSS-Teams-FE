import React, { FC } from 'react';
import { LoaderStyled } from './styled';

export const Loader: FC = () => {
  return (
    <LoaderStyled>
      <div className={'loader'}>Loading...</div>
    </LoaderStyled>
  );
};
