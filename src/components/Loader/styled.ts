import styled from 'styled-components';
import { MAIN1_COLOR } from 'appConstants/colors';
import { MainComponentHeight } from 'typography';

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(-50%, -50%);
  ${MainComponentHeight};
`;

export const LoaderStyled = styled.div`
  width: 25%;
  .loader {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.5em;
    gap: 12px;
    animation-duration: 1.4s;
    animation-delay: 0.32s;
    margin: auto;
    text-align: center;

    @media (max-width: 440px) {
      gap: 9px;
    }

    .loader-child {
      width: 1.8em;
      height: 1.8em;
      background-color: ${MAIN1_COLOR};

      border-radius: 100%;
      display: inline-block;
      animation: loader-in 1.6s ease-in-out 0s infinite both;

      @media (max-width: 1200px) {
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
      animation-delay: -0.6s;
    }
    .loader-child-2 {
      animation-delay: -0.4s;
    }
    .loader-child-3 {
      animation-delay: -0.2s;
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
