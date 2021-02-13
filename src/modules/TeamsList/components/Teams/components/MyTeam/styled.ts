import styled from 'styled-components';
import { ReactComponent as HeaderDecoration } from 'assets/svg/team-header-decorations.svg';
import { MAIN2_COLOR, WHITE_COLOR } from 'appConstants/colors';
import { PageSubTitle, TextRegular } from 'typography';

export const MyTeamsHeader = styled.div`
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

export const MyTeamHeaderTitle = styled.h2`
  ${PageSubTitle};
  margin: 5px 0 37px;
`;

export const MyTeamsHeaderRight = styled.div`
  max-width: 631px;
  width: 100%;
`;

export const MyTeamsHeaderSubtitle = styled.div`
  ${TextRegular};
  color: ${WHITE_COLOR};
  margin-bottom: 30px;
`;

export const MyTeamHeaderLeft = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  max-width: 631px;
  width: 100%;
  z-index: -1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

export const HeaderDecor = styled(HeaderDecoration)`
  top: 0;
  width: 220px;
  height: 160px;
  position: absolute;
  right: 0;
  z-index: -1;
`;

export const MyTeamInfoBlockWrapper = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 580px) {
    flex-direction: column;
  }
`;
