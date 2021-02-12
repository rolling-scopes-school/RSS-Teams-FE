import styled from 'styled-components';
import { MAIN1_COLOR, WHITE_COLOR } from 'appConstants/colors';
import { ReactComponent as LoginImage } from 'assets/svg/loginImage.svg';

export const StyledLoginPage = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: ${WHITE_COLOR};
`;

export const StyledLoginPageItemsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 100%;
  overflow: hidden;
`;

export const StyledLoginImage = styled(LoginImage)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  width: auto;
  height: 100%;

  @media (max-width: 991px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledLoginFakeBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -2;
  width: 30%;
  height: 100%;
  background-color: ${MAIN1_COLOR};
`;
