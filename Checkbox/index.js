import React from 'react';
import styled, { css } from 'styled-components';

const StyledSvg = styled.svg`
  display: block;

  height: ${({ size }) => (size ? `${size}px` : '24px')};
  width: ${({ size }) => (size ? `${size}px` : '24px')};

  ${props => props.size};

  margin-right: 12px;
  border: 2px solid ${({ theme }) => theme.linkWater};
  border: ${props => props.selected && css`none`};
  box-sizing: border-box;
  border-radius: 2px;
  cursor: pointer;

  path:first-of-type {
    fill: transparent;
    ${props =>
      props.selected &&
      css`
        fill: ${({ theme }) => theme.malibu};
        border: none;
      `}
  }

  @media ${({ theme }) => theme.media.mobile} {
    height: auto;
  }
`;

const Checkbox = ({ className, fillColor, secondaryFillColor, ...props }) => (
  <StyledSvg
    className={className}
    version="1.1"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Checkbox</title>
    <path d="M0 0h32v32h-32v-32z" fill={fillColor || '#000'} />
    <path
      d="M24.295 7.674c-0.252-0.255-0.662-0.255-0.912 0l-9.609 9.636c-0.252 0.257-0.663 0.257-0.913 0l-4.21-4.32c-0.125-0.128-0.288-0.191-0.452-0.192-0.166-0.001-0.334 0.062-0.461 0.192l-1.861 1.685c-0.124 0.128-0.191 0.288-0.191 0.455s0.067 0.344 0.192 0.471l4.245 4.489c0.251 0.256 0.663 0.672 0.913 0.927l1.825 1.854c0.251 0.254 0.661 0.254 0.913 0l12.346-12.417c0.252-0.255 0.252-0.673 0-0.927l-1.826-1.853z"
      style={{ fill: secondaryFillColor || '#FFF' }}
    />
  </StyledSvg>
);

export default Checkbox;
