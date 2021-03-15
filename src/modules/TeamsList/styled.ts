import styled from 'styled-components';
import { ScrollBar } from 'typography';

export const TeamWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
  justify-content: center;
  overflow-y: scroll;
  ${ScrollBar};
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
