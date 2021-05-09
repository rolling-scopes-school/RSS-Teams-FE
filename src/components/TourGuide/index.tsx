import React, { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsTourOpen } from 'modules/LoginPage/selectors';
import Tour, { ReactourStep } from 'reactour';
import { tourConfig } from './tourConfig';
import { setIsTourOpen } from 'modules/LoginPage/loginPageReducer';
import { MAIN1_COLOR } from 'appConstants/colors';
import leftArrow from 'assets/svg/paginateArrowLeft.svg';
import rightArrow from 'assets/svg/paginateArrowRight.svg';
import './style.css';

export const TourGuide: FC = () => {
  const dispatch = useDispatch();
  const isTourOpen = useSelector(selectIsTourOpen);

  const onRequestCloseHandler = () => dispatch(setIsTourOpen(false));

  const tourConfigInfo = useCallback(() => tourConfig(dispatch), [dispatch]);

  return (
    <Tour
      onRequestClose={onRequestCloseHandler}
      steps={tourConfigInfo() as ReactourStep[]}
      isOpen={isTourOpen}
      prevButton={<img src={leftArrow} alt="Previous" />}
      nextButton={<img src={rightArrow} alt="Next" />}
      accentColor={MAIN1_COLOR}
      maskClassName="mask"
      closeWithMask={false}
      className="helper"
      rounded={20}
    />
  );
};
