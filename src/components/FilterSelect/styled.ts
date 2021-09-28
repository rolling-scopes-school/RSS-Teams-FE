import styled from 'styled-components';

export const FilterSelectWrapper = styled.div<{ responsiveByLang: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 28px;

  label {
    min-width: ${({ responsiveByLang }) => (responsiveByLang ? '190px' : '120px')};
    margin: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;

    label {
      min-width: unset;
    }
  }
`;
