import styled from 'styled-components';
import { WHITE_COLOR } from 'appConstants/colors';

export const StyledDashboard = styled.table`
  display: flex;
  flex-direction: column;
  width: 92%;
  max-width: 1320px;
  height: calc(100vh - 111px);
  margin: 0 auto;
  padding: 10px;
  padding-right: 0;
  background-color: ${WHITE_COLOR};
  border-radius: 20px;
`;
