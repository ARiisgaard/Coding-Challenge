import React from 'react';
import styled, { css } from 'styled-components';

export default function Button(props) {
  const { onClick, title, inverted, warning } = props;
  return (
    <Wrapper inverted={inverted} warning={warning} onClick={onClick}>
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background: #67453d;
  cursor: pointer;
  height: 65px;
  color: #faf6e0;
  border: none;
  outline: none;
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  width: 80vw;
  ${props =>
    props.inverted &&
    css`
      color: #67453d;
      background: #faf6e0;
      border: solid 1px #67453d;
    `};
  ${props =>
    props.warning &&
    css`
      color: #faf6e0;
      background: #d46161;
      border: solid 1px #d46161;
    `};
  ${props =>
    props.warning &&
    props.inverted &&
    css`
      color: #d46161;
      background: #faf6e0;
      border: solid 1px #d46161;
    `};
`;
