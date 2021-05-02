import styled from 'styled-components';
import { ScrollBar, MainComponentHeight } from 'typography';

export const ContentPageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  overflow-y: scroll;
  ${ScrollBar};
  ${MainComponentHeight};
`;

export const StyledTeams = styled.div`
  max-width: 1320px;
  width: 92%;
`;

export const TeamsTitleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  h1 {
    width: auto;
  }
`;
