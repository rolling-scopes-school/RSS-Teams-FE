import styled, { css, createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as SVGIcon } from '../assets/svg/logo.svg';
import { ReactComponent as RSLogoIcon } from '../assets/svg/rslogo.svg';
import {
  WHITE_COLOR,
  BACKGROUND_COLOR,
  MAIN1_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
} from '../appConstants/colors';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${BACKGROUND_COLOR};
  }
`;

interface StyledTextProps {
  color?: string;
  fontSize?: string;
  lineHeight?: string;
}

export const LinkText = styled(Link)`
  font: 600 18px/22px '', sans-serif;
  letter-spacing: 3px;
`;

export const Logo = styled(SVGIcon)`
  width: 50px;
  height: 50px;
`;

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
`;

export const Button = styled.button`
  ${TextSemiBold}
  padding: 13px 50px;
  background-color: ${MAIN1_COLOR};
  color: ${(props) => props.color || WHITE_COLOR};
  border-radius: 20px;
`;

export const Label = styled.label`
  ${TextRegular}
  color: ${(props) => props.color || LIGHT_TEXT_COLOR};
`;

export const Input = styled.input`
  ${TextMedium}
  background-color: ${BACKGROUND_COLOR};
  color: ${(props) => props.color || LIGHT_TEXT_COLOR};
`;
