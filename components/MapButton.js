import React from 'react';
import styled from 'styled-components';

export default function MapButton(props) {
  const { onClick } = props;
  return <Button onClick={onClick}>{props.children}</Button>;
}
const Button = styled.button`
  cursor: pointer;
  height: 65px;
  flex-grow: 1;
  background-color: #faf6e0;
  border: none;
  outline: none;
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 5px;
  }
  span {
    margin-left: 5px;
  }
`;
