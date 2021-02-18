import styled from 'styled-components';
import { WHITE_COLOR } from 'appConstants/colors';
import { TextBold } from 'typography';
import { ReactComponent as CopyIcon } from 'assets/svg/copy.svg';

export const InfoLineStyled = styled.div`
  ${TextBold};
  color: ${WHITE_COLOR};
  display: flex;
  align-items: center;

  .info__text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const CopyClipboardButton = styled(CopyIcon)`
  width: 16px;
  height: 16px;
  min-width: 16px;
  cursor: pointer;
  margin-left: 10px;
`;
