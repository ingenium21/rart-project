import React from 'react';
import styled, { css } from 'styled-components';

const ratio = (val, size) => (val / 60) * size;

const Switch = styled.label`
  position: relative;
  display: inline-block;

  ${({ size }) =>
    css`
      width: ${ratio(60, size)}px;
      height: ${ratio(34, size)}px;
    `}
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: ${({ size }) => ratio(34, size)}px;

  &::before {
    position: absolute;
    content: '';
    ${({ size, theme }) =>
      css`
        height: ${ratio(26, size)}px;
        width: ${ratio(26, size)}px;
        left: ${ratio(4, size)}px;
        bottom: ${ratio(4, size)}px;
        background-color: ${theme.colors.linktext};
      `}
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2196f3;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(${(props) => ratio(26, props.size)}px);
  }
`;

export const Toggle = ({ className, onToggle, toggleSize }) => {
  return (
    <Switch className={className} size={toggleSize}>
      <Input type="checkbox" onClick={onToggle} size={toggleSize} />
      <Slider size={toggleSize} />
    </Switch>
  );
};
