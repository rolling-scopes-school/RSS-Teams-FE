import styled from 'styled-components';
import { WHITE_COLOR } from 'appConstants/colors';

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1320px;
  height: calc(100vh - 345px);
  margin: 0 auto;
  padding: 10px;
  padding-right: 0;
  font-size: 1rem;
  background-color: ${WHITE_COLOR};
  border-radius: 20px;
  @media (max-width: 1199px) and (min-width: 992px) {
    height: calc(100vh - 320px);
    font-size: 0.95rem;
  }
  @media (max-width: 991px) and (min-width: 768px) {
    height: calc(100vh - 295px);
    font-size: 0.9rem;
  }
  @media (max-width: 767px) and (min-width: 550px) {
    height: calc(100vh - 270px);
    font-size: 0.825rem;
  }
  @media (max-width: 549px) and (min-width: 440px) {
    height: calc(100vh - 260px);
    font-size: 0.8rem;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    height: calc(100vh - 220px);
    font-size: 0.68rem;
  }
`;
