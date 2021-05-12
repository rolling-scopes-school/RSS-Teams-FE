import styled, { css } from 'styled-components';
import { WHITE_COLOR, MAIN2_LIGHT_COLOR, MAIN2_COLOR } from 'appConstants/colors';
import { TextRegular, GeneralAdaptiveFont, SVGParamsAdaptive } from 'typography';

export const StyledMyTeamInfoBlock = styled.div`
  position: relative;
  max-width: 300px;
  width: 100%;
  border-radius: 10px;
  padding: 20px;
  color: ${WHITE_COLOR};
  background-color: ${MAIN2_LIGHT_COLOR};

  .infoBlock__title {
    ${TextRegular};
    color: ${WHITE_COLOR};
    margin-bottom: 10px;
    ${GeneralAdaptiveFont};
  }

  @media (max-width: 992px) {
    max-width: 50%;
  }
  @media (max-width: 580px) {
    max-width: 100%;
  }
`;

const InfoBlockButton = css`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 8px;
  background: ${MAIN2_COLOR};
  fill: ${WHITE_COLOR};
  cursor: pointer;
  border-radius: 5px;
`;

export const InfoButton = styled.div`
  ${InfoBlockButton};

  svg {
    ${SVGParamsAdaptive};
  }
`;
