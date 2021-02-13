import styled, { css } from 'styled-components';
import { WHITE_COLOR, MAIN2_COLOR } from 'appConstants/colors';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import { ReactComponent as InfoIcon } from 'assets/svg/info.svg';

const InfoBlockButton = css`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  padding: 8px;
  background: ${MAIN2_COLOR};
  fill: ${WHITE_COLOR};
  cursor: pointer;
  border-radius: 5px;
`;

export const InfoButton = styled(InfoIcon)`
  ${InfoBlockButton};
`;

export const EditButton = styled(EditIcon)`
  ${InfoBlockButton};
`;
