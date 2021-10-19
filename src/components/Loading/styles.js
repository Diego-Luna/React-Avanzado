/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { loading } from '../../styles/animation';

export const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 32px;
  height: 32px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 25.6px;
    height: 25.6px;
    margin: 3.2px;
    border: 3.2px solid #fff;
    border-radius: 50%;
    ${loading('1.2s', 'cubic-bezier(0, 0.5, 0.5, 1)', 'infinite')};
    border-color: #fff transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
