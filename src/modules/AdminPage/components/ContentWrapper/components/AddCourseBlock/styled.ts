import styled from 'styled-components';

export const AddCourseBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
  gap: 4%;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const InputsBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  gap: 20px;

  @media (max-width: 850px) {
    margin-bottom: 30px;
  }
`;
