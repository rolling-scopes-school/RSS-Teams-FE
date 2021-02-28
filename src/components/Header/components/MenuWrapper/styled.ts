import styled from 'styled-components';

export const StyledMenuWrapper = styled.div`
  display: flex;
  height: 60px;
  gap: 4.2%;
  @media (max-width: 767px) and (min-width: 550px) {
    height: 56px;
  }

  @media (max-width: 710px) and (min-width: 440px) {
    height: 52px;
    align-self: center;
    margin-top: 0.15rem;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    height: 48px;
    align-self: center;
    margin-top: 0.15rem;
  }
`;
