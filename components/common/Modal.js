import React from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { Icon } from 'react-native-elements'

export default function Modal(props) {
  const {
    show,
    onClose,
    closed,
    children,
    style,
    slideInFrom,
    closeIcon,
  } = props;
  const baseStyle = {
    position: 'absolute',
    zIndex: 4,
    right: 10,
    left: 10,
    bottom: 75,
    top: 10,
    padding: 30,
    backgroundColor: '#F7F3DA',
    boxShadow: '0 2px 15px 0 rgba(69,36,28,0.37)',
    display: 'flex',
    flexDirection: 'column',
  };
  const renderCloseButton = () => {
    if (closeIcon) {
      return (
        <CloseButton onClick={() => onClose('hidden')}>{closeIcon}</CloseButton>
      );
    }
    return (
      <CloseButton onClick={() => onClose('hidden')}>
      <Icon
      type='font-awesome-5'
      name='times'
      />
      </CloseButton>
    );
  };
  const animation = useSpring({
    transform: show
      ? 'translate3d(0,calc(0vh + 0px),0)'
      : slideInFrom && slideInFrom === 'top'
      ? 'translate3d(0,calc(-100vh - 20px),0)'
      : 'translate3d(0,calc(100vh + 20px),0)',
    onRest: () => {
      if (!show && closed) {
        closed();
      }
    },
  });
  return (
    <animated.div style={{ ...baseStyle, ...animation, ...style }}>
      {renderCloseButton()}
      {children}
    </animated.div>
  );
}

const CloseButton = styled.button`
  position: absolute;
  z-index: 5;
  top: 22px;
  right: 22px;
  background: none;
  border: none;
  outline: none;
  height: 20px;
  width: 20px;
  cursor: pointer;
  padding: 0;
`;
