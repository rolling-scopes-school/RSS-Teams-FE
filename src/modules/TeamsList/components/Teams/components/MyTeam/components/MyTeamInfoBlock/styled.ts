import styled from 'styled-components';
import { WHITE_COLOR, MAIN2_LIGHT_COLOR } from 'appConstants/colors';
import { TextRegular } from 'typography';

export const MyTeamInfoBlockStyled = styled.div`
  position: relative;
  width: 300px;
  border-radius: 10px;
  padding: 20px;
  color: ${WHITE_COLOR};
  background-color: ${MAIN2_LIGHT_COLOR};
`;

export const MyTeamInfoTitle = styled.div`
  ${TextRegular};
  color: ${WHITE_COLOR};
  margin-bottom: 10px;
`;
