import React, { FC } from 'react';
import { LoaderStyled, LoaderWrapper } from './styled';

export const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <LoaderStyled>
        <div className="loader">Loading...</div>
      </LoaderStyled>
    </LoaderWrapper>
  );
};
