import styled from 'styled-components';
import { TextRegular, TextSemiBold } from 'typography';
import { WHITE_COLOR } from 'appConstants/colors';

export const TeamItemStyled = styled.div`
  padding: 20px 30px;
  background: ${WHITE_COLOR};
  border-radius: 20px;
  margin-bottom: 20px;

  & > div {
    display: flex;
    align-items: center;
  }
`;

export const TeamItemName = styled.div`
  ${TextSemiBold}
`;

export const TeamItemDescription = styled.div`
  ${TextRegular};
  flex-grow: 1;
`;
