import styled from 'styled-components';

export const StyledTeams = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding-top: 20px;

  @media (max-width: 1200px) {
    width: calc(100% - 40px);
    margin: 0 20px;
  }

  @media (max-width: 580px) {
    width: calc(100% - 30px);
    margin: 0 15px;
  }
`;
