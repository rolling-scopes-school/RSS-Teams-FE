import React, { FC } from 'react';
import { LoaderStyled, LoaderWrapper } from './styled';

export const Loader: FC = () => {
  return (
    <LoaderWrapper>
      <LoaderStyled>
        <div className="loader">
          <div className="loader-child loader-child-1"></div>
          <div className="loader-child loader-child-2"></div>
          <div className="loader-child loader-child-3"></div>
        </div>
      </LoaderStyled>
    </LoaderWrapper>
  );
};
