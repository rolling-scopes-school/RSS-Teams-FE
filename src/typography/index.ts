import styled, { css } from 'styled-components';
import { ReactComponent as RSLogoIcon } from '../assets/svg/rslogo.svg';
import {
  WHITE_COLOR,
  BG_COLOR,
  MAIN1_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
} from 'appConstants/colors';

interface StyledTextProps {
  color?: string;
  fontSize?: string;
  lineHeight?: string;
}

export const RSLogo = styled(RSLogoIcon)`
  width: 84px;
  height: 30px;
`;

const StyledText = css<StyledTextProps>`
  color: ${(props) => props.color || DARK_TEXT_COLOR};
  font-size: ${(props) => props.fontSize || '16px'};
  line-height: ${(props) => props.lineHeight || '24px'};
`;

export const TextRegular = css`
  ${StyledText}
  font-weight: 400;
`;

export const TextMedium = css`
  ${StyledText}
  font-weight: 500;
`;

export const TextSemiBold = css`
  ${StyledText}
  font-weight: 600;
`;

export const TextBold = css`
  ${StyledText}
  font-weight: 700;
`;

export const PageTitle = styled.h1`
  ${TextBold}
  font-size: ${(props) => props.fontSize || '30px'};
  line-height: ${(props) => props.lineHeight || '45px'};
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const PageSubTitle = styled.h2`
  ${TextSemiBold}
  color: ${(props) => props.color || WHITE_COLOR};
  font-size: ${(props) => props.fontSize || '24px'};
  line-height: ${(props) => props.lineHeight || '36px'};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  ${TextSemiBold}
  padding: 13px 50px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${MAIN1_COLOR};
  color: ${(props) => props.color || WHITE_COLOR};
`;

export const Label = styled.label`
  ${TextRegular}
  max-width: 300px;
  margin-bottom: 10px;
  color: ${(props) => props.color || LIGHT_TEXT_COLOR};
`;

export const Input = styled.input`
  ${TextMedium}
  width: 300px;
  padding: 8px 15px;
  border-radius: 10px;
  border: none;
  background-color: ${BG_COLOR};
  color: ${(props) => props.color || DARK_TEXT_COLOR};
  outline: none;
  &::-webkit-input-placeholder {
    color: ${LIGHT_TEXT_COLOR};
  }
  &::-moz-placeholder {
    color: ${LIGHT_TEXT_COLOR};
  }
  &:-moz-placeholder {
    color: ${LIGHT_TEXT_COLOR};
  }
  &:-ms-input-placeholder {
    color: ${LIGHT_TEXT_COLOR};
  }
`;

export const Select = styled.select`
  ${TextMedium}
  width: 300px;
  padding: 8px 15px;
  border-radius: 10px;
  border: none;
  background-color: ${BG_COLOR};
  color: ${(props) => props.color || DARK_TEXT_COLOR};
  outline: none;
  &::-webkit-input-placeholder {
    color: ${LIGHT_TEXT_COLOR};
  }
  &::-moz-placeholder {
    color: ${LIGHT_TEXT_COLOR};
  }
  &:-moz-placeholder {
    color: ${LIGHT_TEXT_COLOR};
  }
  &:-ms-input-placeholder {
    color: ${LIGHT_TEXT_COLOR};
  }
  /* -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url("/uploads/media/default/0001/02/f7b4d3d2ba3fe1d8518e6e63d7740e1e73921abf.png") 96% / 15% no-repeat #eee; */
  }
  select::-ms-expand { 
    display: none; /* удалите стрелку по умолчанию в IE 10 и 11 */
  }
`;
