import styled from 'styled-components';
import { WHITE_COLOR, MAIN2_COLOR } from 'appConstants/colors';
import { ReactComponent as HeaderMan } from '../../../../../../assets/svg/teams-man.svg';

export const StyledTeamHeader = styled.div`
  padding: 30px;
  position: relative;
  color: ${WHITE_COLOR};
  background-color: ${MAIN2_COLOR};
  border-radius: 20px;
  z-index: 0;
`;

export const StyledTeamHeaderRight = styled.div`
  max-width: 631px;
  width: 100%;
`;

export const StyledTeamHeaderTitle = styled.div`
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const StyledTeamHeaderSubtitle = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const StyledButtonBlock = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 580px) {
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
`;

export const StyledTeamHeaderLeft = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 631px;
  width: 100%;
  z-index: -1;
`;

export const HeaderManPic = styled(HeaderMan)`
  position: absolute;
  right: 89px;
  bottom: 0;
  width: 284px;
  height: 254px;

  @media (max-width: 580px) {
    right: 20px;
  }
`;
