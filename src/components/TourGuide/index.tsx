import React, { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsTourOpen } from 'modules/LoginPage/selectors';
import Tour, { ReactourStep } from 'reactour';
import { tourConfig } from './tourConfig';
import { setIsTourOpen } from 'modules/LoginPage/loginPageReducer';
import { MAIN1_COLOR } from 'appConstants/colors';
import leftArrow from 'assets/svg/paginateArrowLeft.svg';
import rightArrow from 'assets/svg/paginateArrowRight.svg';
import './style.css';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

export const TourGuide: FC = () => {
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const dispatch = useDispatch();
  const isTourOpen = useSelector(selectIsTourOpen);
  const history = useHistory();
  const { t } = useTranslation();

  const onRequestCloseHandler = () => dispatch(setIsTourOpen(false));

  const tourConfigInfo = useCallback(() => tourConfig(history, dispatch, t), [
    history,
    dispatch,
    t,
  ]);

  return (
    <Tour
      onRequestClose={onRequestCloseHandler}
      steps={tourConfigInfo() as ReactourStep[]}
      isOpen={isTourOpen}
      prevButton={<img src={leftArrow} alt="Previous" />}
      nextButton={<img src={rightArrow} alt="Next" />}
      accentColor={MAIN1_COLOR}
      maskClassName="mask"
      disableDotsNavigation={true}
      disableKeyboardNavigation={true}
      showNavigationNumber={false}
      showButtons={isButtonsVisible}
      disableInteraction={true}
      lastStepNextButton={<div className="LastStepNextButton" />}
      getCurrentStep={(currStep) => setIsButtonsVisible(!!currStep)}
      closeWithMask={false}
      className="helper"
      rounded={20}
    />
  );
};
