import styled from 'styled-components';
import { WHITE_COLOR } from 'appConstants/colors';
import { GeneralAdaptiveFont } from 'typography';

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1320px;
  height: 75vh;
  margin: 0 auto;
  padding: 10px;
  padding-right: 0;
  font-size: 1rem;
  background-color: ${WHITE_COLOR};
  border-radius: 20px;
  ${GeneralAdaptiveFont};
`;
