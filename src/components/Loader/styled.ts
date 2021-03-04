import styled from 'styled-components';
import { MAIN1_COLOR } from 'appConstants/colors';

export const LoaderStyled = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -56%);

  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: load7 1.8s infinite ease-in-out;
    animation: load7 1.8s infinite ease-in-out;
  }
  .loader {
    color: ${MAIN1_COLOR};
    font-size: 10px;
    margin: 80px auto;
    position: relative;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
    @media (max-width: 767px) and (min-width: 550px) {
      font-size: 8px;
    }
    @media (max-width: 549px) and (min-width: 440px) {
      font-size: 7px;
    }
    @media (max-width: 439px) and (min-width: 320px) {
      font-size: 6px;
    }
  }
  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    top: 0px;
  }
  .loader:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader:after {
    left: 3.5em;
  }
  @-webkit-keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
  @keyframes load7 {
    0%,
    80%,
    100% {
      box-shadow: 0 2.5em 0 -1.3em;
    }
    40% {
      box-shadow: 0 2.5em 0 0;
    }
  }
`;
