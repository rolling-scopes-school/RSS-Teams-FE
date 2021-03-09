import styled from 'styled-components';

export const StyledMenuWrapper = styled.div`
  display: flex;
  height: 60px;
  gap: 4.2%;
  @media (max-width: 768px) {
    height: 56px;
  }
  @media (max-width: 700px) {
    align-self: center;
  }
  @media (max-width: 550px) {
    height: 52px;
    margin-top: 0.15rem;
  }
  @media (max-width: 440px) {
    height: 48px;
  }
`;
