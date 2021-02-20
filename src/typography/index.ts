import styled, { css } from 'styled-components';
import { ReactComponent as RSLogoIcon } from 'assets/svg/rslogo.svg';
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

type ButtonProps = {
  bgc?: string;
  color?: string;
  mr?: string;
};

type TRSLogoProps = {
  login: string | null;
};

export const RSLogo = styled(RSLogoIcon)<TRSLogoProps>`
  width: 84px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 22%;
  path {
    fill: ${({ login }) => (login ? WHITE_COLOR : DARK_TEXT_COLOR)};
  }

  @media (max-width: 991px) and (min-width: 768px) {
    width: 80px;
    height: 28px;
  }
  @media (max-width: 767px) and (min-width: 550px) {
    width: 76px;
    height: 24px;
  }
  @media (max-width: 549px) and (min-width: 440px) {
    width: 72px;
    height: 22px;
    margin-bottom: 0;
  }
  @media (max-width: 439px) and (min-width: 320px) {
    width: 70px;
    height: 20px;
    margin-bottom: -1%;
  }
`;

const StyledText = css<StyledTextProps>`
  color: ${(props) => props.color || DARK_TEXT_COLOR};
  font-size: ${(props) => props.fontSize || '16px'};
  line-height: ${(props) => props.lineHeight || '24px'};
`;

export const TextRegular = css`
  ${StyledText};
  font-weight: 400;
`;

export const TextMedium = css`
  ${StyledText};
  font-weight: 500;
`;

export const TextSemiBold = css`
  ${StyledText};
  font-weight: 600;
`;

export const TextBold = css`
  ${StyledText};
  font-weight: 700;
`;

export const PageTitle = styled.h1`
  ${TextBold};
  font-size: ${(props) => props.fontSize || '30px'};
  line-height: ${(props) => props.lineHeight || '45px'};
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

export const PageSubTitle = styled.h2`
  ${TextSemiBold};
  color: ${(props) => props.color || WHITE_COLOR};
  font-size: ${(props) => props.fontSize || '24px'};
  line-height: ${(props) => props.lineHeight || '36px'};
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Button = styled.button<ButtonProps>`
  ${TextSemiBold};
  margin-right: ${({ mr }) => mr || 0};
  padding: 13px 50px;
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ bgc }) => bgc || MAIN1_COLOR};
  color: ${({ color }) => color || WHITE_COLOR};
`;

export const InvertedButton = styled(Button)`
  background-color: ${BG_COLOR};
  color: ${MAIN1_COLOR};
`;

export const Label = styled.label`
  ${TextRegular};
  max-width: 300px;
  margin-bottom: 10px;
  color: ${(props) => props.color || LIGHT_TEXT_COLOR};
`;

export const Input = styled.input`
  ${TextMedium};
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

export const ModalInput = styled(Input)`
  margin-top: 20px;
`;

export const Select = styled.div`
  display: grid;
  position: relative;
  grid-template-areas: 'select';
  align-items: center;
  width: 100%;
  max-width: 250px;
  background-color: ${BG_COLOR};
  border-radius: 10px;
  cursor: pointer;
  &:after {
    position: absolute;
    content: '*';
    grid-area: select;
    width: 12px;
    height: 7px;
    background-color: ${LIGHT_TEXT_COLOR};
    clip-path: polygon(100% 0%, 50% 70%, 0% 0%, 0% 40%, 50% 100%, 100% 40%);
    justify-self: end;
    right: 10px;
  }
`;

export const SelectInner = styled.select`
  ${TextMedium};
  margin: 0;
  width: 100%;
  grid-area: select;
  padding: 8px 15px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  color: ${(props) => props.color || LIGHT_TEXT_COLOR};
  outline: none;
  &::-ms-expand {
    display: none;
  }
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  z-index: 1;
  cursor: pointer;
  option {
    color: ${DARK_TEXT_COLOR};
  }
`;
