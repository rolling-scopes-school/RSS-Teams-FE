import styled from 'styled-components';
import { WHITE_COLOR, MAIN2_COLOR } from 'appConstants/colors';
import { ReactComponent as HeaderMan } from 'assets/svg/teams-man.svg';
import { PageSubTitle, TextRegular } from 'typography';

export const TeamsHeaderStyled = styled.div`
  padding: 30px;
  position: relative;
  color: ${WHITE_COLOR};
  background-color: ${MAIN2_COLOR};
  border-radius: 20px;
  z-index: 0;
  margin-bottom: 40px;

  @media (max-width: 580px) {
    overflow: hidden;
  }
`;

export const TeamHeaderTitle = styled.h2`
  ${PageSubTitle};
  margin: 5px 0 18px;
`;

export const TeamsHeaderRightStyled = styled.div`
  max-width: 631px;
  width: 100%;
`;

export const TeamsHeaderSubtitleStyled = styled.div`
  ${TextRegular};
  color: ${WHITE_COLOR};
  margin-bottom: 30px;
`;

export const TeamsHeaderButtonsBlockStyled = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 680px) {
    gap: 10px;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
`;

export const TeamHeaderLeftStyled = styled.div`
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
  right: 40px;
  bottom: 0;
  width: 440px;
  height: 254px;
  z-index: -1;
`;
