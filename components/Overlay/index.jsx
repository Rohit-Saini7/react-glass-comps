import React from 'react';
import styled from 'styled-components';

const Overlay = ({
  opacity = 0.5,
  color = 'rgba(234, 78, 78, 0.7)',
  radius = 5,
  blur = 100,
  zIndex = 5,
}) => {
  return (
    <OverlayWrapper
      opacity={opacity}
      color={color}
      radius={radius}
      blur={blur}
      zIndex={zIndex}
    />
  );
};

export default Overlay;

const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ color }) => color};
  z-index: ${({ zIndex }) => zIndex};
  backdrop-filter: blur(${({ blur }) => blur}px);
  opacity: ${({ opacity }) => opacity};
  border-radius: ${({ radius }) => radius}px;
`;
