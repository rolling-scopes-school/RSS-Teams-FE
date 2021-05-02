import styled from 'styled-components';
import { TextRegular } from 'typography';

export const StepBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & > * {
    margin-bottom: 20px;
  }
`;

export const StepBlockText = styled.p`
  ${TextRegular};
  margin-top: 0;
`;
