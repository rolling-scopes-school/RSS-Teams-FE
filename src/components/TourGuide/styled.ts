import styled from 'styled-components';
import { MAIN1_COLOR, WHITE_COLOR } from 'appConstants/colors';
import {
  TextSemiBold,
  GeneralAdaptiveFont,
  GeneralButtonPadding,
} from 'typography';

export const LinkButton = styled.a`
  ${TextSemiBold};
  margin-right: 0;
  border-radius: 20px;
  border: none;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  background-color: ${MAIN1_COLOR};
  color: ${WHITE_COLOR};
  ${GeneralAdaptiveFont};
  ${GeneralButtonPadding}
`;
