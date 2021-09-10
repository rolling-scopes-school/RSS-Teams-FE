import styled from 'styled-components';

export const CoursesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 20px;

  @media (max-width: 1100px) and (min-width: 768px) {
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
  }
`;
