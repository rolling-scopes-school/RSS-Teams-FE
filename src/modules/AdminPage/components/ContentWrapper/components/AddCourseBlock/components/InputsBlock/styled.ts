import styled from 'styled-components';

export const InputWrapper = styled.div<{ isModal?: boolean }>`
  display: flex;
  ${({ isModal }) => isModal && 'flex-direction: column;'}
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  ${({ isModal }) => isModal && 'margin-bottom: 40px;'}
  gap: ${({ isModal }) => (isModal ? '5px' : '20px')};

  @media (max-width: 580px) {
    ${({ isModal }) => isModal && 'margin-bottom: 30px;'}
    label {
      ${({ isModal }) => !isModal && 'display: none;'}
    }
  }
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  & > div:nth-child(2) {
    position: absolute;
    top: 100%;
  }
`;
