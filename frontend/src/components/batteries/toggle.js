import React from 'react';
import styled from 'styled-components';

const ratio = (val, size) => (val / 60) * size;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: ${({ size }) => ratio(60, size)}px;
  height: ${({ size }) => ratio(34, size)}px;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: ${({ size }) => ratio(34, size)}px;

  &::before {
    position: absolute;
    content: '';
    height: ${({ size }) => ratio(26, size)}px;
    width: ${({ size }) => ratio(26, size)}px;
    left: ${({ size }) => ratio(4, size)}px;
    bottom: ${({ size }) => ratio(4, size)}px;
    background-color: white;
    -webkit-transition: 0.4s;
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
    -webkit-transform: translateX(${({ size }) => ratio(26, size)}px);
    -ms-transform: translateX(${({ size }) => ratio(26, size)}px);
    transform: translateX(${({ size }) => ratio(26, size)}px);
  }
`;

export const Toggle = ({ onToggle, toggleSize }) => {
  return (
    <Switch size={toggleSize}>
      <Input type="checkbox" onClick={onToggle} size={toggleSize} />
      <Slider size={toggleSize} />
    </Switch>
  );
};
