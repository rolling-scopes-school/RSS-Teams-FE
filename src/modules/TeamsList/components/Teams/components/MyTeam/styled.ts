import styled from 'styled-components';
import { WHITE_COLOR, MAIN2_COLOR } from 'appConstants/colors';
import { ReactComponent as HeaderDecoration } from 'assets/svg/team-header-decorations.svg';

export const TeamsHeaderStyled = styled.div`
  padding: 30px;
  position: relative;
  color: ${WHITE_COLOR};
  background-color: ${MAIN2_COLOR};
  border-radius: 20px;
  z-index: 0;
`;

export const TeamsHeaderRightStyled = styled.div`
  max-width: 631px;
  width: 100%;
`;

export const TeamsHeaderTitleStyled = styled.div`
  font-size: 24px;
  line-height: 36px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const TeamsHeaderSubtitleStyled = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  margin-bottom: 30px;
`;

export const TeamsHeaderButtonsBlockStyled = styled.div`
  display: flex;
  gap: 20px;

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
  padding: 30px;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const HeaderManPic = styled(HeaderDecoration)`
  position: absolute;
  right: 0;
  top: 0;
  width: 220px;
  height: 160px;
  z-index: -1;
`;
