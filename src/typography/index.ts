import styled, { css } from 'styled-components';
import { ReactComponent as RSLogoIcon } from 'assets/svg/rslogo.svg';
import {
  WHITE_COLOR,
  BG_COLOR,
  MAIN1_COLOR,
  DARK_TEXT_COLOR,
  LIGHT_TEXT_COLOR,
  TABLE_POPUP_BORDER_COLOR,
} from 'appConstants/colors';

interface StyledTextProps {
  color?: string;
  fontSize?: string;
  lineHeight?: string;
  marginBottom?: string;
}

type ButtonProps = {
  bgc?: string;
  color?: string;
  mr?: string;
};

type TRSLogoProps = {
  login: string | null;
};

type ModalInputProps = {
  mt?: string;
  blink?: boolean;
  autoComplete?: string;
};

export const RSLogo = styled(RSLogoIcon)<TRSLogoProps>`
  width: 84px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 22%;
  path {
    fill: ${({ login }) => (login ? WHITE_COLOR : DARK_TEXT_COLOR)};
  }

  @media (max-width: 992px) {
    width: 80px;
    height: 28px;
  }
  @media (max-width: 768px) {
    width: 76px;
    height: 24px;
  }
  @media (max-width: 550px) {
    width: 72px;
    height: 22px;
  }
  @media (max-width: 440px) {
    width: 70px;
    height: 20px;
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

export const GeneralAdaptiveFont = css`
  @media (max-width: 1200px) {
    font-size: 0.95rem;
    line-height: 23px;
  }
  @media (max-width: 992px) {
    font-size: 0.9rem;
    line-height: 22px;
  }
  @media (max-width: 768px) {
    font-size: 0.825rem;
    line-height: 21px;
  }
  @media (max-width: 550px) {
    font-size: 0.8rem;
    line-height: 20px;
  }
  @media (max-width: 440px) {
    font-size: 0.68rem;
    line-height: 18px;
  }
`;

export const HeaderAdaptiveFont = css`
  font-size: 1rem;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 0.925rem;
    line-height: 22px;
  }
  @media (max-width: 440px) {
    font-size: 0.85rem;
    line-height: 20px;
  }
`;

export const H1AdaptiveFont = css`
  font-size: 30px;
  line-height: 45px;

  @media (max-width: 1200px) {
    font-size: 28px;
    line-height: 40px;
  }
  @media (max-width: 992px) {
    font-size: 26px;
    line-height: 38px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
  @media (max-width: 550px) {
    font-size: 22px;
    line-height: 32px;
  }
  @media (max-width: 440px) {
    font-size: 20px;
    line-height: 28px;
  }
`;

export const H2AdaptiveFont = css`
  @media (max-width: 1200px) {
    font-size: 26px;
    line-height: 35px;
  }
  @media (max-width: 992px) {
    font-size: 24px;
    line-height: 30px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 25px;
  }
  @media (max-width: 550px) {
    font-size: 20px;
    line-height: 25px;
  }
  @media (max-width: 440px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

export const GeneralButtonPadding = css`
  padding: 13px 50px;
  @media (max-width: 1200px) {
    padding: 11px 45px;
  }
  @media (max-width: 992px) {
    padding: 14px 40px;
  }
  @media (max-width: 768px) {
    padding: 12px 30px;
  }
  @media (max-width: 550px) {
    padding: 10px 25px;
  }
  @media (max-width: 440px) {
    padding: 10px 20px;
  }
`;

export const SVGArrowAdaptive = css`
  @media (max-width: 992px) {
    width: 13px;
    height: 13px;
  }
  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
  @media (max-width: 550px) {
    width: 11px;
    height: 11px;
  }
  @media (max-width: 440px) {
    width: 10px;
    height: 10px;
  }
`;

export const SVGParamsAdaptive = css`
  width: 16px;
  height: 16px;
  @media (max-width: 768px) {
    width: 15px;
    height: 15px;
  }
  @media (max-width: 550px) {
    width: 14px;
    height: 14px;
  }
  @media (max-width: 440px) {
    width: 13px;
    height: 13px;
  }
`;

export const AdditionalWrapper = styled.div`
  width: 100%;
  height: 60px;
  @media screen and (max-width: 768px) {
    height: 20px;
  }
`;

export const ScrollBar = css`
  scrollbar-color: transparent ${TABLE_POPUP_BORDER_COLOR};
  scrollbar-width: 8px;

  &::-webkit-scrollbar {
    width: 8px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${TABLE_POPUP_BORDER_COLOR};
  }
`;

export const MainComponentHeight = css`
  height: calc(100vh - 191px);

  @media (max-width: 992px) {
    height: calc(100vh - 181px);
  }
  @media (max-width: 880px) {
    height: calc(100vh - 161px);
  }
  @media (max-width: 768px) {
    height: calc(100vh - 146px);
  }
  @media (max-width: 550px) {
    height: calc(100vh - 141px);
  }
  @media (max-width: 440px) {
    height: calc(100vh - 131px);
  }
`;

export const ContentPageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  overflow-y: scroll;
  ${ScrollBar};
  ${MainComponentHeight};
`;

export const PageTitle = styled.h1`
  ${TextBold};
  font-size: ${(props) => props.fontSize || '30px'};
  line-height: ${(props) => props.lineHeight || '45px'};
  margin-top: 0;
  ${H1AdaptiveFont};
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
  border-radius: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ bgc }) => bgc || MAIN1_COLOR};
  color: ${({ color }) => color || WHITE_COLOR};
  ${GeneralAdaptiveFont};
  ${GeneralButtonPadding}
`;

export const TeamButton = styled(Button)`
  padding: 11px 23px;
  @media (max-width: 650px) {
    padding: 8px 16px;
  }
`;

export const CourseButton = styled(TeamButton)`
  background-color: ${WHITE_COLOR};
  color: ${DARK_TEXT_COLOR};
  border-radius: 10px;
`;

export const InvertedButton = styled(Button)`
  background-color: ${BG_COLOR};
  color: ${MAIN1_COLOR};
`;

export const Label = styled.label`
  ${TextRegular};
  ${GeneralAdaptiveFont};
  max-width: 300px;
  margin-bottom: ${(props) => props.marginBottom || '10px'};
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
  ${GeneralAdaptiveFont};
  @media (max-width: 440px) {
    width: 100%;
  }
  &::placeholder {
    color: ${LIGHT_TEXT_COLOR};
  }
`;

export const ModalInput = styled(Input)<ModalInputProps>`
  @keyframes blinkInput {
    from {
      background-color: rgb(101, 80, 246, 0.5);
    }
    to {
      background-color: ${BG_COLOR};
    }
  }

  animation: ${({ blink }) => (blink ? 'blinkInput 1s' : 'none')};
  margin-top: ${({ mt }) => mt || '20px'};
`;

export const Select = styled.div`
  display: grid;
  position: relative;
  grid-template-areas: 'select';
  align-items: center;
  width: 100%;
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
    right: 15px;
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
  ${GeneralAdaptiveFont}
  appearance: none;
  z-index: 1;
  cursor: pointer;
  option {
    color: ${DARK_TEXT_COLOR};
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 10px;
`;
