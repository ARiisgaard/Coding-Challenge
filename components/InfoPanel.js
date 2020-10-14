import React, { useState } from 'react';
// import Button from './Button';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Modal from './common/Modal.js';
import styled from 'styled-components';
import { Icon } from 'react-native-elements'
import Button from './common/Button';


  // Infopanel displaying the data
const V_THRESHOLD = 0.3;
export default function InfoPanel(props) {
  const { onClose, data } = props;
  const [displayedPanel, setDisplayedPanel] = useState(1);
  const bind = useDrag(({ last, vxvy: [vx, vy] }) => {
    if (last) {
      // getting the swipe direction
      if (Math.abs(vx) > Math.abs(vy)) {
        // swipe left is when horizontal velocity is inferior to minus threshold
        if (vx < -V_THRESHOLD) {
          if (displayedPanel === 1) setDisplayedPanel(2);
        }
        // swipe right is when horizontal velocity is superior to threshold
        else if (vx > V_THRESHOLD) if (displayedPanel === 2) setDisplayedPanel(1);
      }
    }
  });
  //Animations for content and button swiping, dots displaying current page
  const firstPartAnimation = useSpring({
    marginLeft: displayedPanel === 1 ? '0vw' : '-100vw',
  });
  const firstDotAnimation = useSpring({
    opacity: displayedPanel === 1 ? 1 : 0.5,
  });
  const secondDotAnimation = useSpring({
    opacity: displayedPanel === 2 ? 1 : 0.5,
  });
  const dotStyle = {
    width: 11,
    height: 11,
    borderRadius: '100%',
    backgroundColor: '#45241C',
    alignItems: "center"
  };
  const buttonSwipeAnimation = useSpring({
    marginLeft: displayedPanel === 1 ? '0vw' : '-100vw',
  });
  const AnimatedButton = animated(Button)

  return (
    <Modal show={true} onClose={() => onClose(null)}>
      <h1 style={{ marginTop: 0, marginBottom: 30 }}>
      {data.title}</h1>

      {/* Swipable content */}
      <animated.div
        {...bind()}
        style={{
          ...{ width: '200vw', display: 'flex', alignSelf: 'flex-start', opacity: '80%' },
          ...firstPartAnimation,
        }}
      >
        <span
          style={{
            width: '100vw',
            height: '65vh',
            marginLeft: -20,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
        <img src={data.imageUrl} alt="ParkingImage" width="80%"/>

        {/* Adding button as alternative to swipe*/}
        <AnimatedButton
        style={{
          ...buttonSwipeAnimation,
          ...{ position: 'absolute', left: '50%', top: '80%',
                    transform: 'translate(-50%, -50%)'} }
        }
        title="Read more"
        onClick={() => setDisplayedPanel(2)}
        disabled={displayedPanel !== 1}
/>


        </span>
        <span
          style={{
            width: '80vw',
          }}
        >
          {data.description}
        </span>
      </animated.div>
      {/* Adding animated dots */}
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          position: 'absolute', left: '50%', top: '90%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <animated.div
          style={{ ...{ marginRight: 4, }, ...dotStyle, ...firstDotAnimation }}
        ></animated.div>
        <animated.div
          style={{ ...{ marginLeft: 4 }, ...dotStyle, ...secondDotAnimation }}
        ></animated.div>
      </div>

    </Modal>
  );
}
