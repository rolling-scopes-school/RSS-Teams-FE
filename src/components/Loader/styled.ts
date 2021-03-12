import styled from 'styled-components';
import { MAIN1_COLOR } from 'appConstants/colors';

export const LoaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const LoaderStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .loader {
    display: flex;
    align-items: center;
    width: fit-content;
    height: 2.5em;
    gap: 12px;
    animation-duration: 1.4s;
    animation-delay: 0.32s;
    margin: auto;
    text-align: center;

    .loader-child {
      width: 2em;
      height: 2em;
      background-color: ${MAIN1_COLOR};

      border-radius: 100%;
      display: inline-block;
      animation: loader-in 1.4s ease-in-out 0s infinite both;

      @media (max-width: 768px) {
        width: 1.7em;
        height: 1.7em;
      }
      @media (max-width: 550px) {
        width: 1.4em;
        height: 1.4em;
      }
      @media (max-width: 440px) {
        width: 1em;
        height: 1em;
      }
    }

    .loader-child-1 {
      animation-delay: -0.32s;
    }
    .loader-child-2 {
      animation-delay: -0.16s;
    }
  }

  @keyframes loader-in {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;
