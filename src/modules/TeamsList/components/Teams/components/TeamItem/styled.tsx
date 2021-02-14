import styled from 'styled-components';
import { TextRegular, TextSemiBold } from 'typography';
import { WHITE_COLOR } from 'appConstants/colors';
import { TableWrapper } from '../MyTeam/styled';

export const TeamItemStyled = styled.div`
  background: ${WHITE_COLOR};
  border-radius: 20px;
  margin-bottom: 20px;

  .teamItem__header {
    padding: 20px 30px;
    display: flex;
    align-items: center;
  }

  .teamItem__name {
    ${TextSemiBold};
  }
  .teamItem__description {
    ${TextRegular};
    flex-grow: 1;
  }
`;

export const TeamItemTableWrapper = styled(TableWrapper)`
  margin-top: ${({ open }) => (open ? '-20px' : '0')};
  ${({ open }) => (open ? 'padding: 20px 30px 20px' : null)};
`;
