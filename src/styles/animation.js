/* eslint-disable import/prefer-default-export */
import { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
  from{
    filter: blur(5px);
    opacity: 0;
  }

  to{
    filter: blur(0px);
    opacity: 1;
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
  animation: ${time} ${fadeInKeyframes} ${type};
`;

const bounceDownKeyFrames = keyframes`
 0% {
    top: -70px;
  }

  50%{
    top: 0;
  }

  100% {
    top: -20px;
  }
`;

export const bounceDown = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${bounceDownKeyFrames} ${type};
  `;

const loaderKeyframe = keyframes`
  0% {
    transform: rotate(0deg);

  }
  50%, 100% {
    transform: rotate(360deg);
  }
`;

export const loading = ({
  time = '1s',
  type = 'cubic-bezier(0, 0.5, 0.5, 1)',
  animationIterationCount = 'infinite',
} = {}) =>
  css`
    animation: ${time} ${loaderKeyframe} ${type} ${animationIterationCount};
  `;
